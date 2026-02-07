const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../db');
const { ApiError } = require('../middleware');
const { registerSchema, loginSchema } = require('../validators');

const router = express.Router();

router.post('/register', async (req, res, next) => {
  try {
    if (!process.env.JWT_SECRET) {
      throw new ApiError(500, 'JWT_SECRET não configurado');
    }
    const data = registerSchema.parse(req.body);
    const hash = await bcrypt.hash(data.password, 10);

    const result = await db.query(
      'INSERT INTO users (name, email, password_hash) VALUES ($1, $2, $3) RETURNING id, name, email, created_at',
      [data.name, data.email, hash]
    );

    const user = result.rows[0];
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: '8h',
    });

    res.status(201).json({ user, token });
  } catch (err) {
    if (err.code === '23505') {
      return next(new ApiError(409, 'E-mail já cadastrado'));
    }
    if (err.name === 'ZodError') {
      return next(new ApiError(400, err.errors.map((e) => e.message).join(', ')));
    }
    return next(err);
  }
});

router.post('/login', async (req, res, next) => {
  try {
    if (!process.env.JWT_SECRET) {
      throw new ApiError(500, 'JWT_SECRET não configurado');
    }
    const data = loginSchema.parse(req.body);
    const result = await db.query('SELECT id, name, email, password_hash FROM users WHERE email = $1', [data.email]);

    if (!result.rows.length) {
      throw new ApiError(401, 'Credenciais inválidas');
    }

    const user = result.rows[0];
    const match = await bcrypt.compare(data.password, user.password_hash);
    if (!match) {
      throw new ApiError(401, 'Credenciais inválidas');
    }

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: '8h',
    });

    res.json({ token });
  } catch (err) {
    if (err.name === 'ZodError') {
      return next(new ApiError(400, err.errors.map((e) => e.message).join(', ')));
    }
    return next(err);
  }
});

module.exports = router;
