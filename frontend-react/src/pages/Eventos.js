import React from 'react';

function Eventos() {
  const eventos = [
    { id: 1, nome: "Festival de Música", local: "Parque da Cidade", data: "20/06/2025" },
    { id: 2, nome: "Feira de Artesanato", local: "Taguatinga", data: "25/06/2025" },
    { id: 3, nome: "Mostra de Cinema", local: "Plano Piloto", data: "30/06/2025" },
  ];

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Eventos Cadastrados</h2>
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="table-primary">
            <tr>
              <th>Nome</th>
              <th>Local</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {eventos.map((evento) => (
              <tr key={evento.id}>
                <td>{evento.nome}</td>
                <td>{evento.local}</td>
                <td>{evento.data}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Eventos;
