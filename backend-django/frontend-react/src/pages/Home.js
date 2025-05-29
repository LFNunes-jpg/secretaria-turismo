import React from 'react';

function Home() {
  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h1 className="display-4">Bem-vindo ao DF Turismo</h1>
        <p className="lead">Explore Brasília com nosso app moderno!</p>
      </div>

      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <img src="/imagens/parque.jpg" className="card-img-top" alt="Parque" />
            <div className="card-body">
              <h5 className="card-title">Parques</h5>
              <p className="card-text">Conheça os melhores parques do DF.</p>
              <a href="/eventos" className="btn btn-outline-primary">Ver mais</a>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <img src="/imagens/arte.jpg" className="card-img-top" alt="Arte" />
            <div className="card-body">
              <h5 className="card-title">Cultura</h5>
              <p className="card-text">Descubra eventos culturais imperdíveis.</p>
              <a href="/eventos" className="btn btn-outline-primary">Ver mais</a>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <img src="/imagens/feira.jpg" className="card-img-top" alt="Feira" />
            <div className="card-body">
              <h5 className="card-title">Feiras</h5>
              <p className="card-text">Explore feiras típicas e locais únicos.</p>
              <a href="/eventos" className="btn btn-outline-primary">Ver mais</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
