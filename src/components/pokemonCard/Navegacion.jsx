import PropTypes from 'prop-types';

const Navegacion = ({ handleBackList, handleNextPokemon }) => (
  <div className="py-4 text-center">
    <button
      onClick={handleBackList}
      className="btn me-3"
      style={{
        backgroundColor: 'rgba(255, 0, 0, 0.1)',
        color: '#FF0000',
        border: '2px solid #FF0000',
        borderRadius: '50px',
        padding: '12px 30px',
        fontSize: '16px',
        fontWeight: 'bold',
        display: 'inline-flex',
        alignItems: 'center',
      }}
    >
      <i className="fas fa-arrow-left" style={{ marginRight: '8px', color: '#FF0000' }}></i> Volver al Listado
    </button>
    <button
      onClick={handleNextPokemon}
      className="btn"
      style={{
        backgroundColor: 'rgba(255, 0, 0, 0.1)',
        color: '#FF0000',
        border: '2px solid #FF0000',
        borderRadius: '50px',
        padding: '12px 30px',
        fontSize: '16px',
        fontWeight: 'bold',
        display: 'inline-flex',
        alignItems: 'center',
      }}
    >
      Siguiente Pokémon <i className="fas fa-arrow-right" style={{ marginLeft: '8px', color: '#FF0000' }}></i>
    </button>
  </div>
);
  
Navegacion.propTypes = {
  handleBackList: PropTypes.func.isRequired,
  handleNextPokemon: PropTypes.func.isRequired,
};

export default Navegacion;
  