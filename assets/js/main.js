// Declarando Variaveis
const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`


// Pegando uma resposta da API
fetch(url).then(function (reponse){
    console.log(reponse)
})