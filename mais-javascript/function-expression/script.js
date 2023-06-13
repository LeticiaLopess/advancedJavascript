// normalmente usamos function declaration:

function soma(a,b) {
  return a + b;
}
soma(4,2)

// a function expression é criada a partir da declaração de uma variável, ela pode ser ativada através da variável assinalada

const somar = function(a,b) { // podemos usar let também se quiser
  return a + b;
}
somar(4,2)

// quando declaramos com function declaration o hoisting leva todo o corpo da função lá pra cima 
// quando fazemos com function expression vai dar erro se chamarmos a função em cima do escopo da função criada
/* quando criamos funções, elas vão para o objeto window e isso pode causar interferência 
subescrevendo outros métodos, quando criamos a função expression isso não acontece */


// podemos substituir por arrow function
const subtrair = (a,b) => {
  return a - b;
}

// área do quadrado
const quadrado = a => a * a;


// antes de modules e escopo de bloco, a forma mais comum de isolarmos o escopo de um código JavaScript do escopo global era através das chamadas IIFE's
// Immediately Invoked Function Expression: assim que ela é declarada, ela já é executada

const instrumento = 'Violino'

(function() {
  const instrumento = 'Piano';
  console.log(instrumento)
})() /* abrimos e fechamos esse parêntese para executar a função */ 

// ou com arrow function

(() => {
  const instrumento = 'Piano';
  console.log(instrumento)
})()

console.log(instrumento)



// EXERCÍCIOS
// Remova o erro
const priceNumber = n => +n.replace('R$', '').replace(',', '.');
priceNumber('R$ 99,99');

// Crie uma IIFE e isole o escopo
// de qualquer código JS.
(() => {
  const home = 'apartment'
  console.log(home)
})()

// Como podemos utilizar
// a função abaixo.
const active = callback => callback(); // uma linha: retorno direto

/* or */ 

active(function() {
  console.log('Teste de Active')
})


















