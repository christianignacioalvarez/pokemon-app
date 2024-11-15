import { useParams } from 'react-router-dom';
import PokemonDetalle from '../components/PokemonDetalle';

function PokemonBusqueda() {
  const { nombre } = useParams();
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${nombre}`;
  if (loading) {
    return <Loading />;
  }
  return <PokemonDetalle url={apiUrl} />;
}

export default PokemonBusqueda;