import React from 'react';

const ProductList = () => (
  <section className="page">
    <header className="page-header">
      <h2>Lista de produtos</h2>
      <p>Consulte o catálogo têxtil disponível.</p>
    </header>
    <div className="table-card">
      <table>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Categoria</th>
            <th>Preço</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tecido Oxford Premium</td>
            <td>Camisaria</td>
            <td>R$ 39,90</td>
            <td><span className="status ok">Ativo</span></td>
          </tr>
          <tr>
            <td>Malha Modal Soft</td>
            <td>Casual</td>
            <td>R$ 29,50</td>
            <td><span className="status ok">Ativo</span></td>
          </tr>
          <tr>
            <td>Jeans Stretch 12oz</td>
            <td>Denim</td>
            <td>R$ 54,00</td>
            <td><span className="status warn">Baixo estoque</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
);

export default ProductList;
