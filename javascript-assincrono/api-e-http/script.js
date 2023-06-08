// Exemplo: interajo com a API através de uma URL e tenho uma resposta em JSON;
// API pode ser um objeto: os métodos são as interfaces da API;
// Qualquer coisa que você consegue interagir com comandos;


// HTTP -> protocolo que usamos para enviar/receber arquivos e dados na Web
// HTTPS -> com segurança

fetch('https://pokeapi.co/api/v2/pokemon/')
.then(r => r.json())
.then(pokemon => {
  console.log(pokemon);
});

fetch('https://pokeapi.co/api/v2/pokemon/1/') // retorna o primeiro Pokemon
.then(r => r.json())
.then(pokemon => {
  console.log(pokemon);
});


const url = 'https://jsonplaceholder.typicode.com/posts/2' // API fake para testes
const options = {
  method: 'HEAD',
}
fetch(url, options)
.then(response => response.headers.forEach(console.log)) // preciso fazer isso para conseguir ver os headers
.then(json => console.log(json));


const cors = 'https://www.google.com';

fetch(cors)
.then(response => response.text())
.then(text => console.log(text))

// vai aparecer um warning no console, é uma política do nosso próprio browser, pois quando você está em localhost, ele não permite que você pegue a API de um site que não é liberado;
// não é uma medida total de segurança, pois conseguimos passar por cima do CORS com proxy