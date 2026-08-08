// server.js - Express + Socket.io backend

console.log(">>> SERVER STARTING...");

const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const dotenv = require("dotenv");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const path = require("path");
const pool = require("./db");

dotenv.config();
console.log(">>> .ENV LOADED");

const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || "super_secret_key";
const publicPath = path.join(__dirname, "..", "public");

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.use(cors());
app.use(express.json());

function authMiddleware(req, res, next) {
  const header = req.headers.authorization;
  if (!header) return res.status(401).json({ error: "Missing header" });

  const tokenValue = header.split(" ")[1];
  if (!tokenValue) return res.status(401).json({ error: "Missing token" });

  try {
    req.user = jwt.verify(tokenValue, JWT_SECRET);
    next();
  } catch {
    return res.status(401).json({ error: "Invalid token" });
  }
}

function parsePayload(value) {
  return typeof value === "string" ? JSON.parse(value) : value;
}

async function initDb() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(120) NOT NULL,
      email VARCHAR(190) NOT NULL UNIQUE,
      password_hash VARCHAR(255) NOT NULL,
      role VARCHAR(20) NOT NULL DEFAULT 'user',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS quizzes (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      payload JSON NOT NULL,
      created_by INT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (created_by) REFERENCES users(id)
    )
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS attempts (
      id INT AUTO_INCREMENT PRIMARY KEY,
      quiz_id INT NOT NULL,
      user_id INT NOT NULL,
      answers JSON NOT NULL,
      score DECIMAL(5,2) DEFAULT 0,
      finished_at TIMESTAMP NULL,
      FOREIGN KEY (quiz_id) REFERENCES quizzes(id),
      FOREIGN KEY (user_id) REFERENCES users(id)
    )
  `);

  console.log(">>> DATABASE READY");
}

// REGISTER
app.post("/api/register", async (req, res) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "Missing fields" });
  }

  try {
    const hash = await bcrypt.hash(password, 10);
    const [result] = await pool.query(
      "INSERT INTO users (name,email,password_hash,role) VALUES (?,?,?,?)",
      [name, email, hash, role || "user"]
    );

    const token = jwt.sign(
      { id: result.insertId, email, role: role || "user" },
      JWT_SECRET,
      { expiresIn: "12h" }
    );

    res.json({ token });
  } catch (err) {
    console.log("REGISTER ERROR:", err);
    if (err.code === "ER_DUP_ENTRY") {
      return res.status(400).json({ error: "Email already registered" });
    }
    res.status(500).json({ error: "Registration failed" });
  }
});

// LOGIN
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Missing fields" });
  }

  try {
    const [rows] = await pool.query("SELECT * FROM users WHERE email=?", [email]);
    if (!rows.length) return res.status(401).json({ error: "Invalid credentials" });

    const user = rows[0];
    const ok = await bcrypt.compare(password, user.password_hash);
    if (!ok) return res.status(401).json({ error: "Invalid credentials" });

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: "12h" }
    );

    res.json({ token });
  } catch (err) {
    console.log("LOGIN ERROR:", err);
    res.status(500).json({ error: "Login failed" });
  }
});

// GENERATE QUIZ (Admin only)
app.post("/api/generate-quiz", authMiddleware, async (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ error: "Forbidden" });
  }

  const { title, topic, num_questions } = req.body;
  const n = parseInt(num_questions, 10) || 5;
  const questions = [];

  for (let i = 1; i <= n; i++) {
    questions.push({
      id: `${Date.now()}_${i}`,
      text: `${topic} Question ${i}`,
      options: ["Option A", "Option B", "Option C", "Option D"],
      correct: Math.floor(Math.random() * 4),
    });
  }

  const payload = { title: title || topic, questions };

  try {
    const [result] = await pool.query(
      "INSERT INTO quizzes (title,payload,created_by) VALUES (?,?,?)",
      [payload.title, JSON.stringify(payload), req.user.id]
    );

    res.json({ quizId: result.insertId, payload });
  } catch (err) {
    console.log("QUIZ GEN ERROR:", err);
    res.status(500).json({ error: "Quiz create failed" });
  }
});

// LIST QUIZZES
app.get("/api/quizzes", authMiddleware, async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT id,title,created_at FROM quizzes ORDER BY created_at DESC"
    );
    res.json(rows);
  } catch (err) {
    console.log("QUIZ LIST ERROR:", err);
    res.status(500).json({ error: "Failed to load quizzes" });
  }
});

// START QUIZ ATTEMPT
app.post("/api/start/:quizId", authMiddleware, async (req, res) => {
  const { quizId } = req.params;

  try {
    const [rows] = await pool.query("SELECT * FROM quizzes WHERE id=?", [quizId]);
    if (!rows.length) return res.status(404).json({ error: "Quiz not found" });

    const quiz = parsePayload(rows[0].payload);
    const safeQuestions = quiz.questions.map((q) => ({
      id: q.id,
      text: q.text,
      options: q.options,
    }));

    const [insert] = await pool.query(
      "INSERT INTO attempts (quiz_id,user_id,answers,score) VALUES (?,?,?,?)",
      [quizId, req.user.id, JSON.stringify({}), 0]
    );

    res.json({
      attemptId: insert.insertId,
      quiz: { id: quizId, title: quiz.title, questions: safeQuestions },
    });
  } catch (err) {
    console.log("START ERROR:", err);
    res.status(500).json({ error: "Start failed" });
  }
});

// SUBMIT ANSWERS
app.post("/api/submit/:attemptId", authMiddleware, async (req, res) => {
  const attemptId = req.params.attemptId;
  const { answers } = req.body;

  try {
    const [attemptRows] = await pool.query("SELECT * FROM attempts WHERE id=?", [
      attemptId,
    ]);
    if (!attemptRows.length) return res.status(404).json({ error: "Attempt not found" });

    const quizId = attemptRows[0].quiz_id;
    const [quizRows] = await pool.query("SELECT * FROM quizzes WHERE id=?", [quizId]);
    const quiz = parsePayload(quizRows[0].payload);

    let score = 0;
    quiz.questions.forEach((q) => {
      if (answers[q.id] === q.correct) score++;
    });

    const percent = (score / quiz.questions.length) * 100;

    await pool.query(
      "UPDATE attempts SET answers=?, score=?, finished_at=NOW() WHERE id=?",
      [JSON.stringify(answers), percent, attemptId]
    );

    io.to(`quiz_${quizId}`).emit("score_update", {
      attemptId: Number(attemptId),
      userId: attemptRows[0].user_id,
      score: percent,
    });

    res.json({ score: percent });
  } catch (err) {
    console.log("SUBMIT ERROR:", err);
    res.status(500).json({ error: "Submit failed" });
  }
});

io.on("connection", (socket) => {
  console.log("Socket connected:", socket.id);

  socket.on("join_quiz_room", ({ quizId }) => {
    socket.join(`quiz_${quizId}`);
  });

  socket.on("disconnect", () => {
    console.log("Socket disconnected:", socket.id);
  });
});

app.use(express.static(publicPath));

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

initDb()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`>>> SERVER RUNNING ON http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error(">>> DATABASE INIT FAILED:");
    console.error(err);
    process.exit(1);
  });
