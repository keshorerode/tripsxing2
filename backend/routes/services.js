const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all services for a specific vendor
router.get('/vendor/:vendorId', async (req, res) => {
  const { vendorId } = req.params;
  try {
    const result = await db.query(
      'SELECT * FROM services WHERE vendor_id = $1 ORDER BY id DESC',
      [vendorId]
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new service for a vendor
router.post('/', async (req, res) => {
  const { vendor_id, name, description, price, status, category } = req.body;
  try {
    const result = await db.query(
      'INSERT INTO services (vendor_id, name, description, price, status, category) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [vendor_id, name, description, price, status || 'Active', category]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a service
router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description, price, status, category } = req.body;
  try {
    const result = await db.query(
      'UPDATE services SET name=$1, description=$2, price=$3, status=$4, category=$5 WHERE id=$6 RETURNING *',
      [name, description, price, status, category, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a service
router.delete('/:id', async (req, res) => {
  try {
    await db.query('DELETE FROM services WHERE id = $1', [req.params.id]);
    res.json({ message: 'Service deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
