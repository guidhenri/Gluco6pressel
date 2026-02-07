import React from 'react';

const OrderList = () => (
  <section className="page">
    <header className="page-header">
      <h2>Lista de pedidos</h2>
      <p>Acompanhe o andamento das entregas.</p>
    </header>
    <div className="table-card">
      <table>
        <thead>
          <tr>
            <th>Pedido</th>
            <th>Lojista</th>
            <th>Produto</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#1245</td>
            <td>Boutique Alfa</td>
            <td>Tecido Oxford Premium</td>
            <td><span className="status ok">Processando</span></td>
          </tr>
          <tr>
            <td>#1244</td>
            <td>Ateliê Solar</td>
            <td>Malha Modal Soft</td>
            <td><span className="status info">Em separação</span></td>
          </tr>
          <tr>
            <td>#1243</td>
            <td>Loja VesteBem</td>
            <td>Jeans Stretch 12oz</td>
            <td><span className="status warn">Aguardando estoque</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
);

export default OrderList;
