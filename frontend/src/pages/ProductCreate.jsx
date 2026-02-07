import React from 'react';

const ProductCreate = () => (
  <section className="page">
    <header className="page-header">
      <h2>Cadastro de produtos</h2>
      <p>Inclua novos tecidos e itens no catálogo.</p>
    </header>
    <form className="form-grid">
      <label>
        Nome do produto
        <input type="text" placeholder="Tecido Oxford Premium" />
      </label>
      <label>
        Categoria
        <input type="text" placeholder="Camisaria" />
      </label>
      <label>
        Preço unitário (R$)
        <input type="number" placeholder="39,90" />
      </label>
      <label className="full">
        Descrição
        <textarea rows="4" placeholder="Detalhes técnicos do tecido." />
      </label>
      <label>
        Composição
        <input type="text" placeholder="100% algodão" />
      </label>
      <label>
        Gramatura
        <input type="text" placeholder="150 g/m²" />
      </label>
      <div className="actions">
        <button type="button" className="primary">Salvar produto</button>
        <button type="button" className="ghost">Limpar</button>
      </div>
    </form>
  </section>
);

export default ProductCreate;
