// a melhor forma de selecionar elementos da dom e fazer algo com cada um deles é usando forEach

// 1 parâmetro) callback - a função inteira, com seus parâmetros etc
// parâmetros da função (valorAtual - item atual do loop; index - número do index, posição; array - array completo)

const imgs = document.querySelectorAll('img');

let y = 0;
imgs.forEach(function(item, index, array) {
  console.log(item)
  console.log(index)
  console.log(array) == console.log(imgs) // o 3 parâmetro retorna o array que é a mesma coisa que retornar a lista, imgs nesse caso
});


// criei a constante para pegar a lista de imagens
// percorri cada imagem com o forEach e criei a variavel i, iniciando do 0 e concatenei até a última imagem utilizando o foreach e a variável i
// a cada imagem, ele concatena o i, por isso nosso retorno foi 0 1 2 3 4 5 6 


// forEach é um método de array, alguns objetos array-like possuem esse método, caso não, o ideal é transformar em array

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

console.log(titulos)
console.log(titulosArray)

titulosArray.forEach(function(item, index, array){
  console.log(item);
});

// se eu não transformar para array, porque eu usei o getElementsByClassName ele vai me retornar um HTMLCollection, que não tem esse método, diferente do node list, e porque não tem esse método, vai me dar um erro.


// ARROW FUNCTION
// sintaxe curta em relação a function expression. Basta remover a palavra-chave 'function' e adicionar a fat arrow '=>' após os argumentos

  // const imgs = document.querySelectorAll('img');

imgs.forEach((item) => {
  console.log(item);
});


// parâmetro único não precisa de parênteses 
imgs.forEach(item => {
  console.log(item)
})


// multiplos parâmetros precisam de parênteses
imgs.forEach((item, index) => {
  console.log(item, index)
});


// sem parâmetro precisa dos parênteses, mesmo vazio
let x = 0;
imgs.forEach(() => {
  console.log(x++);
});


// podemos omitir as chaves {} para a função que retorna apenas uma linha

imgs.forEach(item => {
  console.log(item)
})

imgs.forEach(item => console.log(item)); // caso façamos dessa forma, não podemos fechar o console.log() com ';'



// EXERCÍCIOS


// Mostre no console cada parágrado do site
const paragrafo = document.querySelectorAll('p')

paragrafo.forEach((item) => {
  console.log(item)
})


// Mostre o texto dos parágrafos no console

paragrafo.forEach((item) => {
  console.log(item.innerText)
})


// Como corrigir os erros abaixo:
// const imgs = document.querySelectorAll('img'); // já está criado lá em cima



// imgs.forEach(item, index => {
//   console.log(item, index);
// });

imgs.forEach((item, index) => { // múltiplos parâmetros precisam de parênteses
  console.log(item, index);
});

// let y = 0;
// imgs.forEach( => {
//   console.log(y++);
// });

let i = 0;
imgs.forEach(() => { // mesmo sem parâmetro, precisa do parênteses 
  console.log(i++);
});

// imgs.forEach(() => i++);
imgs.forEach(() => i++); // não há erro

console.log(i)

