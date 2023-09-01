


const pokeApi = {}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
    return fetch(url)
        .then((reponse) => reponse.json())  // Metodo then -- Pega a resposta da requisicao e response.json converte a resposta para um json
        .then((jsonBody) => jsonBody.results)
        .catch((error) => console.error(error))
}

Promise.all([
    
])