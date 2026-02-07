const express = require('express');
const db = require('../db');
const { ApiError } = require('../middleware');
const { orderSchema } = require('../validators');

const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    const data = orderSchema.parse(req.body);
    const result = await db.query(
      `INSERT INTO orders (retailer_id, product_id, quantity, status)
       VALUES ($1, $2, $3, $4)
       RETURNING id, retailer_id, product_id, quantity, status, created_at`,
      [data.retailerId, data.productId, data.quantity, data.status || 'aberto']
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    if (err.name === 'ZodError') {
      return next(new ApiError(400, err.errors.map((e) => e.message).join(', ')));
    }
    if (err.code === '23503') {
      return next(new ApiError(400, 'Lojista ou produto não encontrado'));
    }
    return next(err);
  }
});

router.get('/', async (_req, res, next) => {
  try {
    const result = await db.query(
      `SELECT o.id,
              o.quantity,
              o.status,
              o.created_at,
              r.id AS retailer_id,
              r.name AS retailer_name,
              p.id AS product_id,
              p.name AS product_name
       FROM orders o
       JOIN retailers r ON r.id = o.retailer_id
       JOIN products p ON p.id = o.product_id
       ORDER BY o.created_at DESC`
    );
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
