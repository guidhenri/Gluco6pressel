const express = require('express');
const db = require('../db');
const { ApiError } = require('../middleware');
const { productSchema } = require('../validators');

const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    const data = productSchema.parse(req.body);
    const result = await db.query(
      'INSERT INTO products (name, description, price) VALUES ($1, $2, $3) RETURNING id, name, description, price, created_at',
      [data.name, data.description, data.price]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    if (err.name === 'ZodError') {
      return next(new ApiError(400, err.errors.map((e) => e.message).join(', ')));
    }
    return next(err);
  }
});

router.get('/', async (_req, res, next) => {
  try {
    const result = await db.query('SELECT id, name, description, price, created_at FROM products ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
