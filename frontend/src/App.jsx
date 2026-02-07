import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import ProductCreate from './pages/ProductCreate.jsx';
import ProductList from './pages/ProductList.jsx';
import OrderCreate from './pages/OrderCreate.jsx';
import OrderList from './pages/OrderList.jsx';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}
    >
      <Route index element={<Login />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="produtos/novo" element={<ProductCreate />} />
      <Route path="produtos" element={<ProductList />} />
      <Route path="pedidos/novo" element={<OrderCreate />} />
      <Route path="pedidos" element={<OrderList />} />
    </Route>
  </Routes>
);

export default App;
