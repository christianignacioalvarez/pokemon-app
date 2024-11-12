import PropTypes from 'prop-types';

const PokemonImage = ({ pokemon, pokemonColor }) => (
    <div className="text-center rounded-start-pill" style={{ backgroundColor: pokemonColor, borderRadius: '15px', padding: '1rem' }}>
      <div
        className="rounded-start-pill p-3 mx-auto"
        style={{
          width: "450px",
          position: "relative",
          right: "-58px",
          backgroundColor: pokemonColor,
          borderRadius: '50%',
          boxShadow: '0px 4px 20px rgba(0,0,0,0.1)'
        }}
      >
        <img
          src={pokemon.sprites.other['official-artwork'].front_default}
          alt={pokemon.name}
          className="img-fluid"
          style={{ maxHeight: '250px' }}
        />
      </div>
    </div>
  );
  
PokemonImage.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        sprites: PropTypes.shape({
        other: PropTypes.shape({
            'official-artwork': PropTypes.shape({
            front_default: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired,
        }).isRequired,
    }).isRequired,
    pokemonColor: PropTypes.string.isRequired,
};

export default PokemonImage;
  