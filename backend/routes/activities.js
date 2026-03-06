const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all activities
router.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM activities ORDER BY id DESC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create activity
router.post('/', async (req, res) => {
  const { title, image, question, objective, participating } = req.body;
  try {
    const result = await db.query(
      'INSERT INTO activities (title, image, question, objective, participating) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [title, image, question, objective, participating]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update activity
router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, image, question, objective, participating } = req.body;
  try {
    const result = await db.query(
      'UPDATE activities SET title=$1, image=$2, question=$3, objective=$4, participating=$5 WHERE id=$6 RETURNING *',
      [title, image, question, objective, participating, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete activity
router.delete('/:id', async (req, res) => {
  try {
    await db.query('DELETE FROM activities WHERE id = $1', [req.params.id]);
    res.json({ message: 'Activity deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
