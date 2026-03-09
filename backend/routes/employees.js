const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all employees (onboarding)
router.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM employees ORDER BY id DESC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create employee (start onboarding)
router.post('/', async (req, res) => {
  const { first_name, last_name, role, department, level, progress, status, initial, color } = req.body;
  try {
    const result = await db.query(
      'INSERT INTO employees (first_name, last_name, role, department, level, progress, status, initial, color) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
      [first_name, last_name, role, department, level, progress || 0, status || 'In Progress', initial, color]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update employee onboarding status
router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, role, department, level, progress, status, initial, color } = req.body;
  try {
    const result = await db.query(
      'UPDATE employees SET first_name=$1, last_name=$2, role=$3, department=$4, level=$5, progress=$6, status=$7, initial=$8, color=$9 WHERE id=$10 RETURNING *',
      [first_name, last_name, role, department, level, progress, status, initial, color, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete employee from onboarding list
router.delete('/:id', async (req, res) => {
  try {
    await db.query('DELETE FROM employees WHERE id = $1', [req.params.id]);
    res.json({ message: 'Employee onboarding removed' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
