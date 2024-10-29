import PropTypes from 'prop-types';

const Evoluciones = ({ evolutions, pokemonColor, currentPokemonName }) => (
  <div className="py-5">
    <h4 className="pokemon-font" style={{ textAlign: "center" }}>EVOLUCIONES</h4>
    {evolutions.length > 0 ? (
      <div className="d-flex justify-content-center flex-wrap">
        {evolutions.map((evolution, index) => (
          <div
            key={index}
            className="card m-4"
            style={{
              width: '160px',
              borderRadius: '10px',
              padding: '12px',
              border: evolution.name === currentPokemonName ? `2px solid ${pokemonColor}` : 'none',
              boxShadow: evolution.name === currentPokemonName ? `0px 9px 24px 7px ${pokemonColor}` : '0px 4px 10px rgba(0,0,0,0.1)'
            }}
          >
            <img
              src={evolution.image}
              alt={evolution.name}
              className="card-img-top"
              style={{ height: '100px', objectFit: 'contain' }}
            />
            <div className="card-body text-center">
              <h6 className="card-title text-capitalize">{evolution.name}</h6>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <p>Este Pokémon no tiene evoluciones.</p>
    )}
  </div>
  );
  
Evoluciones.propTypes = {
  evolutions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  pokemonColor: PropTypes.string.isRequired,
  currentPokemonName: PropTypes.string.isRequired,
};

export default Evoluciones;
  