const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all roles
router.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM roles ORDER BY id DESC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create role
router.post('/', async (req, res) => {
  const { name, description, userCount, type } = req.body;
  try {
    const result = await db.query(
      'INSERT INTO roles (name, description, user_count, type) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, description, userCount, type]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update role
router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description, userCount, type } = req.body;
  try {
    const result = await db.query(
      'UPDATE roles SET name=$1, description=$2, user_count=$3, type=$4 WHERE id=$5 RETURNING *',
      [name, description, userCount, type, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete role
router.delete('/:id', async (req, res) => {
  try {
    await db.query('DELETE FROM roles WHERE id = $1', [req.params.id]);
    res.json({ message: 'Role deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
