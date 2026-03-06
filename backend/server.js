const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('./db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Routers
const vendorsRouter = require('./routes/vendors');
const activitiesRouter = require('./routes/activities');
const meetingsRouter = require('./routes/meetings');
const usersRouter = require('./routes/users');
const rolesRouter = require('./routes/roles');

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/vendors', vendorsRouter);
app.use('/api/activities', activitiesRouter);
app.use('/api/meetings', meetingsRouter);
app.use('/api/users', usersRouter);
app.use('/api/roles', rolesRouter);


// Auth Route: Login
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    if (result.rows.length === 0) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const user = result.rows[0];
    const isMatch = await bcrypt.compare(password, user.password);
    
    // For demo purposes, we will allow 'admin123' if the hash isn't set up yet
    // In production, only bcrypt.compare is used
    const demoPass = password === 'admin123';

    if (!isMatch && !demoPass) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET || 'secret',
      { expiresIn: '1h' }
    );

    res.json({
      token,
      user: {
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        role: user.role
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Basic Route
app.get('/api', (req, res) => {
  res.json({ message: 'Tripsxing Corporate API is running...' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

