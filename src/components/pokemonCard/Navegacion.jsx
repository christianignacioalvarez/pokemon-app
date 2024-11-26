import PropTypes from 'prop-types';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navegacion = ({ handleBackList, handleNextPokemon, handlePrevPokemon,handlePrevEvolution,handleNextEvolution }) => (
  <div className="container-fluid py-4">
    <div className="d-flex align-items-center justify-content-center position-relative">

      <div style={{ position: 'absolute', left: 0 }}>
        <button
          onClick={handleBackList}
          className="btn"
          style={{
            backgroundColor: '#959595',
            color: '#fff',
            border: '2px solid #c5c5c5',
            borderRadius: '50px',
            padding: '5px 10px',
            fontSize: '12px',
            fontWeight: 'bold',
            display: 'inline-flex',
            alignItems: 'center',
          }}
        >
          <i className="fas fa-arrow-left" style={{ marginRight: '8px', color: '#fff' }}></i> Volver al Listado
        </button>
      </div>

      <section className="d-flex gap-3 mx-auto">
        <button
          onClick={handlePrevPokemon}
          className="btn"
          style={{
            backgroundColor: 'rgba(255, 0, 0, 0.1)',
            color: '#FF0000',
            border: '2px solid #FF0000',
            borderRadius: '50px',
            padding: '5px 15px',
            fontSize: '16px',
            fontWeight: 'bold',
            display: 'inline-flex',
            alignItems: 'center',
          }}
        >
          <i className="fas fa-arrow-left" style={{ marginRight: '8px', color: '#FF0000' }}></i> Anterior Pokemon
        </button>
        <button
          onClick={handlePrevEvolution}
          className="btn"
          style={{
            backgroundColor: 'rgba(255, 0, 0, 0.1)',
            color: '#FF0000',
            border: '2px solid #FF0000',
            borderRadius: '50px',
            padding: '5px 15px',
            fontSize: '16px',
            fontWeight: 'bold',
            display: 'inline-flex',
            alignItems: 'center',
          }}
        >
          <i className="fas fa-arrow-left" style={{ marginRight: '8px', color: '#FF0000' }}></i> Anterior 
        </button>
        <button
          onClick={handleNextEvolution}
          className="btn"
          style={{
            backgroundColor: 'rgba(255, 0, 0, 0.1)',
            color: '#FF0000',
            border: '2px solid #FF0000',
            borderRadius: '50px',
            padding: '5px 15px',
            fontSize: '16px',
            fontWeight: 'bold',
            display: 'inline-flex',
            alignItems: 'center',
          }}
        >
          Siguiente <i className="fas fa-arrow-right" style={{ marginLeft: '8px', color: '#FF0000' }}></i>
        </button>
        <button
          onClick={handleNextPokemon}
          className="btn"
          style={{
            backgroundColor: 'rgba(255, 0, 0, 0.1)',
            color: '#FF0000',
            border: '2px solid #FF0000',
            borderRadius: '50px',
            padding: '5px 15px',
            fontSize: '16px',
            fontWeight: 'bold',
            display: 'inline-flex',
            alignItems: 'center',
          }}
        >
          Siguiente Pokemon<i className="fas fa-arrow-right" style={{ marginLeft: '8px', color: '#FF0000' }}></i>
        </button>
      </section>
    </div>
  </div>
);

Navegacion.propTypes = {
  handleBackList: PropTypes.func.isRequired,
  handleNextPokemon: PropTypes.func.isRequired,
  handlePrevPokemon: PropTypes.func.isRequired,
  handleNextEvolution: PropTypes.func.isRequired,
  handlePrevEvolution: PropTypes.func.isRequired
};

export default Navegacion;
