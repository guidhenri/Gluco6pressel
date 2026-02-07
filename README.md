# Gluco6pressel - API REST SaaS B2B Têxtil

API REST em Node.js + Express com autenticação JWT e PostgreSQL para gestão de produtos, lojistas e pedidos.

## Requisitos

- Node.js 18+
- PostgreSQL

## Configuração

1. Instale dependências:

```bash
npm install
```

2. Configure as variáveis de ambiente:

```bash
cp .env.example .env
```

3. Crie as tabelas no banco:

```bash
psql "$DATABASE_URL" -f schema.sql
```

4. Suba a API:

```bash
npm run dev
```

## Endpoints

### Autenticação
- `POST /auth/register` — cria usuário e retorna JWT
- `POST /auth/login` — retorna JWT

### Produtos (JWT obrigatório)
- `POST /products`
- `GET /products`

### Lojistas (JWT obrigatório)
- `POST /retailers`
- `GET /retailers`

### Pedidos (JWT obrigatório)
- `POST /orders`
- `GET /orders`

## Interface React (frontend)

Dentro da pasta `frontend` há uma interface React com rotas para login, dashboard, produtos e pedidos.

```bash
cd frontend
npm install
npm run dev
```

## Exemplos de payload

### Produto
```json
{
  "name": "Tecido Oxford",
  "description": "Tecido para camisaria",
  "price": 39.9
}
```

### Lojista
```json
{
  "name": "Boutique Alfa",
  "contactEmail": "compras@boutiquealfa.com"
}
```

### Pedido
```json
{
  "retailerId": 1,
  "productId": 2,
  "quantity": 50,
  "status": "aberto"
}
```
