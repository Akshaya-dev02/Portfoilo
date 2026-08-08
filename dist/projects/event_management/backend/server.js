// backend/server.js
const express = require('express');
const cors = require('cors');
const db = require('./db');  // Import database connection

const app = express();
app.use(cors());            // Allow frontend to call backend
app.use(express.json());    // Parse JSON requests

// ===== Routes =====

// Register a new user
app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    await db.query(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [name, email, password]
    );
    res.json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(400).json({ message: 'Error registering user', error: err.message });
  }
});

// Login user
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const [rows] = await db.query(
      'SELECT * FROM users WHERE email = ? AND password = ?',
      [email, password]
    );
    if (rows.length > 0) {
      res.json({ message: 'Login successful', user: rows[0] });
    } else {
      res.status(400).json({ message: 'Invalid credentials' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Get all events
app.get('/events', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM events');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Add a new event
app.post('/events', async (req, res) => {
  const { title, date, location } = req.body;
  try {
    await db.query(
      'INSERT INTO events (title, date, location) VALUES (?, ?, ?)',
      [title, date, location]
    );
    res.json({ message: 'Event added successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error adding event', error: err.message });
  }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
