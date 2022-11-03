export const getPokemons = async (limit = 30, offset = 0) => {
  // TODO: TRANFORMAR FETCH EN AXIOS
  // axios
  //   .get(`https://pokeapi.co/api/v2/pokemon?limit=30`)
  //   .then(response => {
  //     console.log(response);
  //     return response;
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getPokemonsData = async url => {
  // axios
  //   .get(url)
  //   .then(response => {
  //     return response;
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const searchPokemon = async pokemon => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
