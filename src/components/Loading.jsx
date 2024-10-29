import loadingPokeball from '../assets/loading-pokeball.gif';

const Loading = () => {
  return (
    <div className="text-center d-flex flex-column align-items-center mt-5">
      <p className="pokemon-font">Cargando detalles del Pokémon...</p>
      <img src={loadingPokeball} alt="Loading..." style={{ width: '150px', height: '150px' }} />
    </div>
  );
};

export default Loading;
