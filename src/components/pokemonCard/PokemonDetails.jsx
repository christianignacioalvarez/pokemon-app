import PropTypes from 'prop-types';

const PokemonDetails = ({ pokemon }) => (
    <div className="col-12 col-md-6 p-4">
      <h2 className="text-capitalize">{pokemon.name}</h2>
      <div className="mt-3">
        <p><strong>Altura:</strong> {pokemon.height} decímetros</p>
        <p><strong>Peso:</strong> {pokemon.weight} hectogramos</p>
        <p><strong>Habilidades:</strong></p>
        <div className="d-flex flex-wrap gap-1">
          {pokemon.abilities.map((ability, index) => (
            <span key={index} className="badge badge-pill bg-primary text-white">
              {ability.ability.name}
            </span>
          ))}
        </div>
        <p><strong>Tipos:</strong> {pokemon.types.map(type => type.type.name).join(', ')}</p>
      </div>
    </div>
  );
  
PokemonDetails.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        height: PropTypes.number.isRequired,
        weight: PropTypes.number.isRequired,
        abilities: PropTypes.arrayOf(
        PropTypes.shape({
            ability: PropTypes.shape({
            name: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired
        ).isRequired,
        types: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.shape({
            name: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired
        ).isRequired,
    }).isRequired,
};

export default PokemonDetails;
  