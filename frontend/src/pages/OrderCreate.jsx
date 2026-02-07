import React from 'react';

const OrderCreate = () => (
  <section className="page">
    <header className="page-header">
      <h2>Cadastro de pedidos</h2>
      <p>Registre solicitações de lojistas.</p>
    </header>
    <form className="form-grid">
      <label>
        Lojista
        <input type="text" placeholder="Boutique Alfa" />
      </label>
      <label>
        Produto
        <input type="text" placeholder="Tecido Oxford Premium" />
      </label>
      <label>
        Quantidade (m)
        <input type="number" placeholder="150" />
      </label>
      <label>
        Prazo de entrega
        <input type="date" />
      </label>
      <label className="full">
        Observações
        <textarea rows="4" placeholder="Detalhes logísticos e exigências." />
      </label>
      <div className="actions">
        <button type="button" className="primary">Criar pedido</button>
        <button type="button" className="ghost">Cancelar</button>
      </div>
    </form>
  </section>
);

export default OrderCreate;
