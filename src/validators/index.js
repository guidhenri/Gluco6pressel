const { z } = require('zod');

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().min(2),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const productSchema = z.object({
  name: z.string().min(2),
  description: z.string().min(5),
  price: z.number().positive(),
});

const retailerSchema = z.object({
  name: z.string().min(2),
  contactEmail: z.string().email(),
});

const orderSchema = z.object({
  retailerId: z.number().int().positive(),
  productId: z.number().int().positive(),
  quantity: z.number().int().positive(),
  status: z.enum(['aberto', 'processando', 'enviado', 'entregue']).optional(),
});

module.exports = {
  registerSchema,
  loginSchema,
  productSchema,
  retailerSchema,
  orderSchema,
};
