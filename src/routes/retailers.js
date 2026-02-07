const express = require('express');
const db = require('../db');
const { ApiError } = require('../middleware');
const { retailerSchema } = require('../validators');

const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    const data = retailerSchema.parse(req.body);
    const result = await db.query(
      'INSERT INTO retailers (name, contact_email) VALUES ($1, $2) RETURNING id, name, contact_email, created_at',
      [data.name, data.contactEmail]
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
    const result = await db.query('SELECT id, name, contact_email, created_at FROM retailers ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
