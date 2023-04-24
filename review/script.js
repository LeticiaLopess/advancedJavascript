// Crie uma função para verificar se um valor é Truthy
function isTruthy(dado) { 
  return !!dado // retorna o tipo de dado
}


// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(lado) {
  return lado * 4;
}
console.log(perimetro(4))


// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function fullName(nome, sobrenome) {
  return `Full Name: ${nome} ${sobrenome}`
}
console.log(fullName('Leticia', 'Lopes')) // ATENÇÃO TÁ: se eu tentar usar como variável não funciona, use striiiiiiiiiing mulher


// Crie uma função que verifica se um número é par
function isEvenNumber(number) {
  if(number/2 % 0) {
    console.log('É par!')
  } else {
    console.log('Não é par!')
  }
}


// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function type(elemento) {
  console.log(typeof elemento)
}
type('Oi')
type(5)

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
function nameLeticia() { // função callback já existe, cuidado para não duplicar
  console.log('Leticia Lopes')
}
window.addEventListener('click', nameLeticia);


// Corrija o erro abaixo
// a var estava dentro da função precisoVoltar e não podia ser acessada por jaVisitei
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);


// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

let dadosLeticia = {
  nome: 'Leticia',
  sobrenome: 'Lopes',
  idade: 22,
  nomeCompleto: function () {
    return `Nome: ${this.nome} ${this.sobrenome}`
  }
}


// Crie um método no objeto anterior, que mostre o seu nome completo
dadosLeticia.nomeCompleto()


// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}
carro.preco = 3000
console.log(carro.preco)


// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
let labrador = {
  raca: 'Labrador',
  cor: 'preto',
  idade: '10 anos',
  latir: function(pessoa) {
    if(pessoa == 'homem') {
      return 'latiu'
    } else {
      return 'não latiu'
    }
  }
}


// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
copaBrasil = [1959, 1962, 1970, 1994, 2002]


// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
copaBrasil.forEach((ano) => {
  console.log(`O Brasil ganhou a copa de ${ano}`)
})


// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i])
  if (frutas[i] == 'Pera') {
    break;
  }
}


// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
let lastFruit = frutas[frutas.length - 1]
console.log(lastFruit)


// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500
console.log(scroll)

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;

// if (possuiCarro && possuiCasa) {
//   darCredito = true
// } else {
//   darCredito = false
// }

// or

darCredito = (possuiCarro && possuiCasa) ? true : false
console.log(darCredito)


// Por qual motivo o código abaixo retorna com erros? // o console.log estava fora do bloco
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
  console.log(cor, marca, portas);
}


// Como corrigir o erro abaixo? // a variável estava dentro de somarDois e também é usada dentro de dividirDois
const dois = 2;
function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x + dois;
}
somarDois(4);
dividirDois(6);


// O que fazer para total retornar 500?
var numero = 50;

for(let numero = 0; numero < 10; numero++) { // devemos usar o let em um for e não o var, pois o var vaza para fora
  console.log(numero);
}

const total = 10 * numero;
console.log(total);





// Retorne o url da página atual utilizando o objeto window

// Seleciona o primeiro elemento da página que
// possua a classe ativo

// Retorne a linguagem do navegador

// Retorne a largura da janela 





// Retorne no console todas as imagens do site

// Retorne no console apenas as imagens que começaram com a palavra imagem

// Selecione todos os links internos (onde o href começa com #)

// Selecione o primeiro h2 dentro de .animais-descricao

// Selecione o último p do site





// Mostre no console cada parágrado do site

// Mostre o texto dos parágrafos no console

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(i => {
  console.log(i++);
});

imgs.forEach(() => i++);





// Adicione a classe ativo a todos os itens do menu

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

// Verifique se as imagens possuem o atributo alt

// Modifique o href do link externo no menu





// Verifique a distância da primeira imagem
// em relação ao topo da página

// Retorne a soma da largura de todas as imagens

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu





const img = document.querySelector('img');
function callback() {
  console.log('Clicou');
}

img.addEventListener('click', callback); // 🚀
img.addEventListener('click', callback()); // undefined
img.addEventListener('click', function() {
  console.log('Clicou');
})
img.addEventListener('click', () => {
  console.log('Clicou');
})






// Duplique o menu e adicione ele em copy

// Selecione o primeiro DT da dl de Faq

// Selecione o DD referente ao primeiro DT

// Substitua o conteúdo html de .faq pelo de .animais







