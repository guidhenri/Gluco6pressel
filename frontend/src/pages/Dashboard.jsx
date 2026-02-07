import React from 'react';
import Card from '../components/Card.jsx';

const Dashboard = () => (
  <section className="page">
    <header className="page-header">
      <h2>Dashboard</h2>
      <p>Visão geral rápida do SaaS têxtil.</p>
    </header>
    <div className="grid">
      <Card title="Pedidos abertos" value="24" helper="Últimos 7 dias" />
      <Card title="Produtos ativos" value="128" helper="Catálogo têxtil" />
      <Card title="Lojistas" value="52" helper="Parceiros ativos" />
    </div>
    <div className="panel">
      <h3>Alertas operacionais</h3>
      <ul>
        <li>4 pedidos aguardando confirmação de estoque.</li>
        <li>2 lojistas sem contato atualizado.</li>
        <li>Última sincronização ERP: hoje às 08:32.</li>
      </ul>
    </div>
  </section>
);

export default Dashboard;
