import React from 'react';
import { Link } from 'react-router-dom';

function PokemonItem({ name, url }) {
  const id = url.split('/')[url.split('/').length - 2];

  return (
    <div className="col-4">
      <div className="card mt-3">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <Link to={`/pokemon-detalle/${id}`} className="btn btn-primary">Ver Detalles</Link>
        </div>
      </div>
    </div>
  );
}

export default PokemonItem;