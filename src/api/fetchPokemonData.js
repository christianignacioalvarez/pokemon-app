import axios from 'axios';

export const fetchPokemonData = async (id) => {
  const pokemonData = {};
  
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    pokemonData.pokemon = response.data;

    const speciesResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
    const evolutionChainUrl = speciesResponse.data.evolution_chain.url;
    const evolutionResponse = await axios.get(evolutionChainUrl);

    let chain = evolutionResponse.data.chain;
    const evolutionData = [];

    while (chain) {
      const speciesName = chain.species.name;
      const pokemonResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${speciesName}`);
      evolutionData.push({
        name: speciesName,
        image: pokemonResponse.data.sprites.other['official-artwork'].front_default,
      });
      chain = chain.evolves_to[0];
    }
    pokemonData.evolutions = evolutionData;
  } catch (error) {
    console.error('Error fetching the Pokémon details or evolutions:', error);
    throw error;
  }
  
  return pokemonData;
};
