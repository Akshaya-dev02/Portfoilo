import http from 'http';

const PORT = 3001;

function sendJson(res, statusCode, body) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type,Authorization'
  });
  res.end(JSON.stringify(body));
}

function buildToken(role = 'user') {
  const payload = { id: 1, email: 'demo@example.com', role };
  const encodedPayload = Buffer.from(JSON.stringify(payload)).toString('base64url');
  return `header.${encodedPayload}.signature`;
}

function getBody(req, cb) {
  let body = '';
  req.on('data', (chunk) => {
    body += chunk;
  });
  req.on('end', () => {
    try {
      cb(body ? JSON.parse(body) : {});
    } catch {
      cb({});
    }
  });
}

const quizzes = [
  { id: 1, title: 'AI Basics', created_at: '2026-07-02' },
  { id: 2, title: 'Web Development', created_at: '2026-07-02' }
];

const events = [
  {
    title: 'Community Tech Meetup',
    date: '2026-07-10',
    location: 'Online',
    description: 'A sample event loaded from the local demo backend.'
  }
];

const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://127.0.0.1');
  const { pathname } = url;

  if (req.method === 'OPTIONS') {
    sendJson(res, 200, {});
    return;
  }

  if (req.method === 'POST' && pathname === '/api/login') {
    getBody(req, (body) => {
      const role = body.email && body.email.includes('admin') ? 'admin' : 'user';
      sendJson(res, 200, { token: buildToken(role), role, message: 'Login successful' });
    });
    return;
  }

  if (req.method === 'POST' && pathname === '/api/register') {
    getBody(req, (body) => {
      sendJson(res, 200, { token: buildToken(body.role || 'user'), message: 'Registration successful' });
    });
    return;
  }

  if (req.method === 'POST' && pathname === '/api/generate-quiz') {
    sendJson(res, 200, { quizId: 99, payload: { title: 'Demo Quiz', questions: [] } });
    return;
  }

  if (req.method === 'GET' && pathname === '/api/quizzes') {
    sendJson(res, 200, quizzes);
    return;
  }

  if (req.method === 'POST' && pathname.startsWith('/api/start/')) {
    const quizId = pathname.split('/').pop();
    sendJson(res, 200, {
      attemptId: Number(quizId) || 1,
      quiz: {
        id: Number(quizId) || 1,
        title: 'Demo Quiz',
        questions: [{ id: 'q1', text: 'What is the main goal of this demo?', options: ['Show UI', 'Break the app', 'Hide content'], correct: 0 }]
      }
    });
    return;
  }

  if (req.method === 'POST' && pathname.startsWith('/api/submit/')) {
    sendJson(res, 200, { score: 100 });
    return;
  }

  if (req.method === 'GET' && pathname === '/event-api/events') {
    sendJson(res, 200, events);
    return;
  }

  if (req.method === 'POST' && pathname === '/event-api/login') {
    getBody(req, (body) => {
      sendJson(res, 200, { message: 'Login successful', name: body.email ? 'Demo User' : 'User' });
    });
    return;
  }

  if (req.method === 'POST' && pathname === '/event-api/register') {
    sendJson(res, 200, { message: 'Registration successful' });
    return;
  }

  sendJson(res, 404, { error: 'Not found' });
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Mock project API running on http://127.0.0.1:${PORT}`);
});
