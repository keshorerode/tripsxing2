const express = require('express');
const router = express.Router();
const db = require('../db');
const bcrypt = require('bcryptjs');

// Get all users
router.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT id, first_name, last_name, email, role, status, clearance, trust_score FROM users ORDER BY id DESC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create user (Onboarding/Governance)
router.post('/', async (req, res) => {
  const { firstName, lastName, email, password, role, status, clearance, trustScore } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password || 'changeMe123', 10);
    const result = await db.query(
      'INSERT INTO users (first_name, last_name, email, password, role, status, clearance, trust_score) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id, first_name, last_name, email, role, status, clearance, trust_score',
      [firstName, lastName, email, hashedPassword, role, status, clearance, trustScore]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update user
router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, role, status, clearance, trustScore } = req.body;
  try {
    const result = await db.query(
      'UPDATE users SET first_name=$1, last_name=$2, email=$3, role=$4, status=$5, clearance=$6, trust_score=$7 WHERE id=$8 RETURNING id, first_name, last_name, email, role, status, clearance, trust_score',
      [firstName, lastName, email, role, status, clearance, trustScore, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete user
router.delete('/:id', async (req, res) => {
  try {
    await db.query('DELETE FROM users WHERE id = $1', [req.params.id]);
    res.json({ message: 'User deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
