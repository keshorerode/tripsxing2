const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all vendors
router.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM vendors ORDER BY id DESC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create vendor
router.post('/', async (req, res) => {
  const { name, category, type, rating, status, initial, description } = req.body;
  try {
    const result = await db.query(
      'INSERT INTO vendors (name, category, type, rating, status, initial, description) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [name, category, type, rating, status, initial, description]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update vendor
router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, category, type, rating, status, description } = req.body;
  try {
    const result = await db.query(
      'UPDATE vendors SET name=$1, category=$2, type=$3, rating=$4, status=$5, description=$6 WHERE id=$7 RETURNING *',
      [name, category, type, rating, status, description, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete vendor
router.delete('/:id', async (req, res) => {
  try {
    await db.query('DELETE FROM vendors WHERE id = $1', [req.params.id]);
    res.json({ message: 'Vendor deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
