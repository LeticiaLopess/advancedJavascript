// interface que representa documentos HTML e XML através de objetos. 
// Com ela é possível manipular a estrutura, estilo e conteúdo destes documentos.


/* 

window -> objeto global do DOM que vem do browser, possui diferentes métodos e propriedades

como acessamos propriedades e métodos de objetos? com o pontoooo (.)
*/

console.log(window)

window.innerHeight; // retorna a altura do browser

window.location.href

const href = window.location.href;

console.log(href)

if (href === 'http//127.0.0.1:5500/o-que-e-doms/') {
  console.log('É igual');
} 

// window e document são os objetos principais do DOM, boa parte da manipulação é feita através dos seus métodos e propriedades.

document.querySelector('h1'); // selecionei, ok, mas não consigo fazer nada pois não estou armazenando em uma variável, apenas estou selecionando. Posso criar uma const para manipular esse valor.
const h1Selecionado = document.querySelector('h1');

document.body // retorna o body

// como o window é um objeto global, nem sempre precisamos escrevê-lo, para exibir o alerta não tinha necessidade de escrever o window.
// alert('Oi')



// NODE

// A interface Element é a classe base mais geral da qual todos os objetos em um Document herda.
// toda tag html é representada pelo objeto Element e por isso herda os seus métodos e propriedades.
// Element -> é um tipo de objeto Node

h1Selecionado.classList // classList é uma propriedade herdada de element - https://developer.mozilla.org/pt-BR/docs/Web/API/Element
h1Selecionado.classList[0] // retorna a primeira classe - não é um array mas acessamos assim, pois retorna uma lista de classes desse elemento
h1Selecionado.classList[1]




const titulo = document.querySelector('h1');

titulo.innerText; // retorna o texto;
titulo.classList; // retorna as classes;
titulo.id; // retorna o id;
titulo.offsetHeight; // retorna a altura do elemento;


function callback() {
  console.log('Clicou em ', h1Selecionado.innerText);
}

titulo.addEventListener('click', callback);
// ativa a função callback ao click no titulo

// ou

h1Selecionado.addEventListener('click', function() {
  console.log('Clicou em ', h1Selecionado.innerText);
});



// EXERCÍCIOS


// Retorne o url da página atual utilizando o objeto window
const url = window.location.href
console.log(url)

// Seleciona o primeiro elemento da página que possua a classe ativo
const elementoAtivo = document.querySelector('.ativo') // o querySelectorAll retorna todos os elementos de .classe e voce pode acessar cada um como se fosse um array elementoAtivo[i]
console.log(elementoAtivo)

// Retorne a linguagem do navegador
const language = window.navigator.language
console.log(language)

// Retorne a largura da janela 
const largura = window.innerWidth; // nem precisa colocar window
console.log(largura)



