import PropTypes from 'prop-types';

const Carrusel = ({ pokemones }) => (
  <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner" data-bs-interval="500">
      {pokemones.map((pokemon, index) => (
        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={pokemon.name}>
          <img
            src={pokemon.url} 
            className="d-block w-100 mx-auto"
            alt={pokemon.name}
            style={{ maxHeight: '200px', objectFit: 'contain' }}
          />
        </div>
      ))}
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleAutoplaying"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleAutoplaying"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
);

Carrusel.propTypes = {
  pokemones: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired, 
    })
  ).isRequired,
};

export default Carrusel;
