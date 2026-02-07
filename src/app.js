const express = require('express');
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
const retailerRoutes = require('./routes/retailers');
const orderRoutes = require('./routes/orders');
const { authenticate, errorHandler } = require('./middleware');

const app = express();

app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.use('/auth', authRoutes);
app.use('/products', authenticate, productRoutes);
app.use('/retailers', authenticate, retailerRoutes);
app.use('/orders', authenticate, orderRoutes);

app.use(errorHandler);

module.exports = app;
