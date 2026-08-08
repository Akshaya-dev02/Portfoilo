const token = () => localStorage.getItem("token");

async function api(path, method = "GET", body) {
  const headers = { "Content-Type": "application/json" };
  const authToken = token();
  if (authToken) headers.Authorization = `Bearer ${authToken}`;

  const response = await fetch(`/api${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  let data;
  try {
    data = await response.json();
  } catch {
    throw new Error("Server returned invalid response");
  }

  if (!response.ok) {
    throw new Error(data.error || "Request failed");
  }

  return data;
}

function initSocket() {
  if (typeof io === "undefined") return null;
  return io();
}

// ----------------- INDEX PAGE -----------------
const loginBtnIndex = document.getElementById("loginBtn");
const registerBtnIndex = document.getElementById("registerBtn");
const roleSelectIndex = document.getElementById("roleSelect");

if (loginBtnIndex && registerBtnIndex && roleSelectIndex) {
  loginBtnIndex.onclick = () =>
    (window.location.href = `login.html?role=${roleSelectIndex.value}`);
  registerBtnIndex.onclick = () =>
    (window.location.href = `register.html?role=${roleSelectIndex.value}`);
}

// ----------------- LOGIN -----------------
const loginBtn = document.getElementById("loginBtn");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

async function loginUser() {
  const email = emailInput?.value.trim();
  const password = passwordInput?.value.trim();

  if (!email || !password) {
    alert("Enter all fields");
    return;
  }

  try {
    const data = await api("/login", "POST", { email, password });
    localStorage.setItem("token", data.token);

    const payload = JSON.parse(atob(data.token.split(".")[1]));
    window.location.href =
      payload.role === "admin" ? "admin-dashboard.html" : "user-dashboard.html";
  } catch (err) {
    console.error("LOGIN ERROR:", err);
    alert(err.message || "Cannot connect to server.");
  }
}

if (loginBtn && emailInput && passwordInput) {
  loginBtn.addEventListener("click", loginUser);
}

// ----------------- REGISTER -----------------
const registerBtn = document.getElementById("registerBtn");

async function registerUser() {
  const name = document.getElementById("name")?.value.trim();
  const email = document.getElementById("email")?.value.trim();
  const password = document.getElementById("password")?.value.trim();
  const role = document.getElementById("roleSelect")?.value || "user";

  if (!name || !email || !password) {
    alert("Please fill all fields");
    return;
  }

  try {
    const data = await api("/register", "POST", {
      name,
      email,
      password,
      role,
    });

    localStorage.setItem("token", data.token);
    alert("Registration successful!");
    window.location.href = "login.html";
  } catch (err) {
    console.error("REGISTER ERROR:", err);
    alert(err.message || "Could not connect to server.");
  }
}

if (registerBtn) {
  registerBtn.addEventListener("click", registerUser);
}

// ----------------- LOGOUT -----------------
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.onclick = () => {
    localStorage.removeItem("token");
    window.location.href = "login.html";
  };
}

// ----------------- USER DASHBOARD -----------------
const quizzesList = document.getElementById("quizzesList");
const quizArea = document.getElementById("quizArea");
const socket = initSocket();
let currentAttemptId = null;

if (quizzesList && quizArea) {
  async function loadQuizzes() {
    try {
      const quizzes = await api("/quizzes");
      quizzesList.innerHTML = "";
      quizzes.forEach((q) => {
        const div = document.createElement("div");
        div.className = "quiz-item";
        div.textContent = q.title;
        div.onclick = () => startQuiz(q.id);
        quizzesList.appendChild(div);
      });
    } catch (err) {
      quizzesList.innerHTML = `<p>${err.message}</p>`;
    }
  }

  async function startQuiz(quizId) {
    try {
      const result = await api(`/start/${quizId}`, "POST");
      currentAttemptId = result.attemptId;

      quizArea.innerHTML = `<h3>${result.quiz.title}</h3>`;
      result.quiz.questions.forEach((q, idx) => {
        const div = document.createElement("div");
        div.className = "question";
        div.innerHTML =
          `<p>${idx + 1}. ${q.text}</p>` +
          q.options
            .map(
              (opt, i) =>
                `<label><input type="radio" name="q_${q.id}" value="${i}" />${opt}</label>`
            )
            .join("<br>");
        quizArea.appendChild(div);
      });

      const submitBtn = document.createElement("button");
      submitBtn.textContent = "Submit";
      submitBtn.className = "btn-primary";
      submitBtn.onclick = submitQuiz;
      quizArea.appendChild(submitBtn);

      socket?.emit("join_quiz_room", { quizId, role: "user" });
    } catch (err) {
      alert(err.message);
    }
  }

  async function submitQuiz() {
    const answers = {};
    document.querySelectorAll(".question").forEach((div) => {
      const radios = div.querySelectorAll('input[type="radio"]');
      if (radios.length) {
        const name = radios[0].name;
        const id = name.slice(2);
        radios.forEach((r) => {
          if (r.checked) answers[id] = parseInt(r.value, 10);
        });
      }
    });

    try {
      const result = await api(`/submit/${currentAttemptId}`, "POST", { answers });
      alert(`Your score: ${result.score}%`);
    } catch (err) {
      alert(err.message);
    }
  }

  loadQuizzes();
}

// ----------------- ADMIN DASHBOARD -----------------
const generateQuizBtn = document.getElementById("generateQuizBtn");
const attemptsList = document.getElementById("attemptsList");

if (generateQuizBtn && attemptsList) {
  generateQuizBtn.addEventListener("click", async () => {
    const title = document.getElementById("quizTitle")?.value.trim();
    const topic = document.getElementById("quizTopic")?.value.trim();
    const count = document.getElementById("quizCount")?.value.trim();

    if (!title || !topic || !count) {
      alert("Please fill all fields!");
      return;
    }

    try {
      await api("/generate-quiz", "POST", {
        title,
        topic,
        num_questions: count,
      });

      const div = document.createElement("div");
      div.className = "quiz-item";
      div.textContent = `Quiz: ${title} | Topic: ${topic} | Questions: ${count}`;
      attemptsList.appendChild(div);

      document.getElementById("quizTitle").value = "";
      document.getElementById("quizTopic").value = "";
      document.getElementById("quizCount").value = "";

      alert("Quiz generated successfully!");
    } catch (err) {
      alert(err.message);
    }
  });
}
