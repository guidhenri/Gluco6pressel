import React from 'react';

const Login = () => (
  <section className="page">
    <header className="page-header">
      <h2>Login</h2>
      <p>Acesse o painel do SaaS têxtil.</p>
    </header>
    <form className="form-card">
      <label>
        E-mail
        <input type="email" placeholder="usuario@empresa.com" />
      </label>
      <label>
        Senha
        <input type="password" placeholder="Sua senha" />
      </label>
      <button type="button" className="primary">
        Entrar
      </button>
    </form>
  </section>
);

export default Login;
