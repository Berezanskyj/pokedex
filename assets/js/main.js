// Declarando Variaveis
const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`



fetch(url)
    .then((reponse) => reponse.json())  // Metodo then -- Pega a resposta da requisicao
    .then((jsonBody) => console.log(jsonBody))  // Recebendo o body convertido em JSON  printando ele 
    .catch((error) => console.error(error))  // Metodo catch -- Pega o erro da requisica