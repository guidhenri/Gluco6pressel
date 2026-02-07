const jwt = require('jsonwebtoken');

class ApiError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

const authenticate = (req, _res, next) => {
  if (!process.env.JWT_SECRET) {
    return next(new ApiError(500, 'JWT_SECRET não configurado'));
  }
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return next(new ApiError(401, 'Token não informado'));
  }

  const [scheme, token] = authHeader.split(' ');
  if (!token || scheme.toLowerCase() !== 'bearer') {
    return next(new ApiError(401, 'Token inválido'));
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
    return next();
  } catch (err) {
    return next(new ApiError(401, 'Token expirado ou inválido'));
  }
};

const errorHandler = (err, _req, res, _next) => {
  const status = err.status || 500;
  const message = err.message || 'Erro interno do servidor';
  if (status >= 500) {
    console.error(err);
  }
  res.status(status).json({ error: message });
};

module.exports = {
  ApiError,
  authenticate,
  errorHandler,
};
