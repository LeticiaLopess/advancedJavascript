'use strict' // aceita alguns erros equívocos/bobos

// principal motivo pelo qual existe o escopo: evitar conflitos de nome


// ESCOPO DE FUNÇÃO

// variáveis criadas dentro de funções não são acessadas fora das mesmas
var ferrari = 'SF1000'; // nome do carro da Ferrari da F1 de 2020

function mostrarCarro() {
  var carro = 'Fusca';
  console.log(carro)
  console.log(ferrari)
}

mostrarCarro(); // Fusca no console
// console.log(carro) // Erro: carro is not defined
console.log(ferrari)


// ESCOPO DE BLOCO

// variáveis criadas com var vazam o bloco, por isso, após a introdução do ES6 a melhor forma de declararmos uma variável é utilizando const e let, pois estas respeitam o escopo de bloco

{
  var mes = 'Dezembro';
  console.log(mes)
}

console.log(mes) // Carro, usando let não conseguimos acessar

if(true) {
  const carro = 'Fusca';
  console.log(carro)
}

// console.log(carro) -> erro

{} // -> criam um bloco



// ao utilizar var dentro de um for, o valor da variável var vai vazar e existirá fora do bloco

var i = 50;

for(let i = 0; i < 10; i++) { // usar sempre o let
  console.log(`Número ${i}`);
}

console.log(i * 10) // sendo var = 100


// const mantém o escopo de bloco e impede a redeclaração e modificação de valor

const semana = 'Sexta';
// semana = 'Quinta' // erro novo valor
// const semana = 'Quinta' // erro hosting
console.log(semana);

  // sendo objeto:
const data = {
  ano: 2018,
  mes: 'dezembro',
}

data.ano = 2019; // consigo mudar 
data.ano = 'Isso' // não consigo mudar de number para string


// let - mantém o escopo no bloco, impede a redeclaração, mas permite a modificação do valor da variável
// é diferente de const pois podemos modificar o valor e é diferente de var pois os bugs de var foram corrigidos e não tem em let

let ano;
ano = 2018;
ano++;
console.log(ano);

// let ano = 2020; // dá erro pois estamos redeclarando

// USAREMOS MUITO MAIS O 1) CONST; 2) LET; 3) VAR.



// EXERCÍCIOS

// Por qual motivo o código abaixo retorna com erros?
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
  console.log(cor, marca, portas); 
}
//console.log(var, marca, portas); 

// primeiro que pedimos pra mostrar 'var' e devemos chamar o nome da var, que é cor. Segundo: const e let não podem ser chamadas no console log assim após o escopo de bloco, deve ser dentro dele.


// Como corrigir o erro abaixo? 
const dois = 2;
function somarDois(x) {
  // const dois = 2;
  return x + dois;
}
function dividirDois(x) {
  //return x + dois;
  return x + dois;
}
console.log(somarDois(4));
console.log(dividirDois(6));
// Devemos dar o console.log dentro do escopo da função somarDois, pois chamando dessa forma, o erro que dará é que const não está definida, ou podemos fazer a melhor opção, que é definir a const fora da função, dessa forma podemos chamar ela em qualquer função
// Também há um erro na segunda função pois há um sinal de soma onde era pra ser um sinal de divisão

// O que fazer para total retornar 500?
//var numero = 50;
const numero = 50;

for(let numero = 0; numero < 10; numero++) { // não tem problema usarmos o mesmo nome, aqui, vai ser priorizado o let numero ao invés do const número
  console.log(numero);
}

const total = 10 * numero;
console.log(total);

// como var numero foi definida antes e depois temos um for, vimos que usar var dentro de um for faz com que seu valor vaze para todo o código, então devemos usar sempre let nesse caso. Colocando let ali, a var definida anteriormente vai valer e o retorno será 500.
// também podemos trocar de var pra const














