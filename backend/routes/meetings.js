const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all meetings
router.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM meetings ORDER BY date ASC, start_time ASC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create meeting
router.post('/', async (req, res) => {
  const { title, date, start_time, end_time, location, phase, status, priority } = req.body;
  try {
    const result = await db.query(
      'INSERT INTO meetings (title, date, start_time, end_time, location, phase, status, priority) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
      [title, date, start_time, end_time, location, phase, status, priority]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update meeting
router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, date, start_time, end_time, location, phase, status, priority } = req.body;
  try {
    const result = await db.query(
      'UPDATE meetings SET title=$1, date=$2, start_time=$3, end_time=$4, location=$5, phase=$6, status=$7, priority=$8 WHERE id=$9 RETURNING *',
      [title, date, start_time, end_time, location, phase, status, priority, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete meeting
router.delete('/:id', async (req, res) => {
  try {
    await db.query('DELETE FROM meetings WHERE id = $1', [req.params.id]);
    res.json({ message: 'Meeting deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
