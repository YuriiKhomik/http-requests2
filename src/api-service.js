const BASE_URL = 'https://pokeapi.co/api/v2'

function fetchPokemonById(pokemonId){
    // return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    // .then(response=>{ 
    // return response.json();
    // or:
    const url = `${BASE_URL}/pokemon/${pokemonId}`;

    return fetch(url).then(response=>response.json());
};

export default {fetchPokemonById}