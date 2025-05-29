import React from 'react';

function Cadastro() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Cadastro de Evento</h2>
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="nome" className="form-label">Nome do Evento</label>
          <input type="text" className="form-control" id="nome" />
        </div>
        <div className="col-md-6">
          <label htmlFor="data" className="form-label">Data</label>
          <input type="date" className="form-control" id="data" />
        </div>
        <div className="col-md-6">
          <label htmlFor="local" className="form-label">Local</label>
          <input type="text" className="form-control" id="local" />
        </div>
        <div className="col-12">
          <label htmlFor="descricao" className="form-label">Descrição</label>
          <textarea className="form-control" id="descricao" rows="4"></textarea>
        </div>
        <div className="col-12 text-center">
          <button type="submit" className="btn btn-primary">Cadastrar</button>
        </div>
      </form>
    </div>
  );
}

export default Cadastro;
