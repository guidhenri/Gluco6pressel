import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => (
  <div className="app-shell">
    <aside className="sidebar">
      <h1 className="logo">SaaS Têxtil</h1>
      <nav className="menu">
        <NavLink to="/" end>
          Login
        </NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <div className="menu-section">Produtos</div>
        <NavLink to="/produtos">Lista de produtos</NavLink>
        <NavLink to="/produtos/novo">Cadastro de produtos</NavLink>
        <div className="menu-section">Pedidos</div>
        <NavLink to="/pedidos">Lista de pedidos</NavLink>
        <NavLink to="/pedidos/novo">Cadastro de pedidos</NavLink>
      </nav>
    </aside>
    <main className="content">
      <Outlet />
    </main>
  </div>
);

export default Layout;
