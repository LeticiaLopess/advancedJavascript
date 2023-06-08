function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado(2);
console.log(areaQuadrado(2))


function pi() {
  return 3.14;
}

var total = 5 * pi();
console.log(pi());
console.log(total);


function imc(peso, altura) { // peso e altura são parâmetros
  const imc = peso / (altura ** 2); // altura ** 2 = altura * altura
  return imc;
}

imc(80, 1.80) // 80 e 1.80 são argumentos
imc(60, 1.70) // 60 e 1.70 são argumentos


function corFavorita(cor) {
  if(cor == 'azul') {
    return 'Eu gosto do céu';
  } else if (cor == 'Verde') {
    return 'Eu gosto de mato';
  } else {
    return 'Eu não gosto de cores'
  }
}

console.log(corFavorita()) // eu não gosto de cores
// corFavorita(Verde)


// argumentos podem ser funções

addEventListener('click', function(){ // tem dois argumentos: click (tipo de evento) e uma função anônima
  console.log('Oi')
});


function mostraConsole() {
  console.log('Console')
}

addEventListener('click', mostraConsole) // aqui não precisa de () ao chamar a função pois ele entende que nesse campo recebemos uma função


// pode ou não retornar um valor
function imc2(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc)
}

imc2(20, 1.8); // aqui retorna dessa forma pois o console.log já está dentro da função
// agora, se eu chamar essa função com esses valores no console direto no navegador, ele vai me retornar o resultado mas também me retorna undefined


// uma função pode retornar qualquer tipo de dado e até outras funções
function terceiraIdade(idade) {
  if(typeof idade !== 'number') {
    return 'Informe a sua idade!';
  } else if(idade >= 60) {
    return true;
  } else {
    return false;
  }
}

// retornar diferentes tipos de dados na real não é uma boa prática, o ideal é apenas um

function terceiraIdade(idade) {
  console.log(typeof idade)
  if(typeof idade !== 'number') {
    return 'Por favor, preencha um número.' // return quando retorna cancela todo o restante da função e já retorna o valor
  } else {
    return false;
  }
}

console.log(terceiraIdade('oi'))

// escopo - variáveis e funções definidas dentro de um escopo não são visíveis fora ele

function faltaVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Falta visitar ${totalPaises - paisesVisitados} países`
}

console.log(faltaVisitar(20))
// var totalPaises não é acessível fora da função faltaVisitar
var profissao = 'full stack'

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados()
}

console.log(dados()); // retorna 'André, 29, Rio de Janeiro, Designer'
// console.log(outrosDados()) // retorna um erro

// EXERCÍCIOS

// Crie uma função para verificar se um valor é Truthy

function seForTrue(dado) {
  return !!dado; // verifica e é true
}
console.log(seForTrue('Oi'))

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetroSquare(lado) {
  var perimetro = lado * 4 // ou lado + lado + lado + lado
  return perimetro
}

console.log(perimetroSquare(4))

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`
}
console.log(nomeCompleto('Leticia', 'Lopes'))

// Crie uma função que verifica se um número é par

function sePar(number) {
  if(number % 2 == 0) { // módulo de 2
    return 'É par'
  } else {
    return 'É impar'
  }
}
console.log(sePar(2))
console.log(sePar(5))
console.log(sePar(8))

// Crie uma função que retorne o tipo de dado do argumento passado nela (typeof)
function tipo(elemento) {
  return typeof elemento
}

console.log(tipo(5))
console.log(tipo('Leticia'))

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.

addEventListener('click', function(){
  console.log('Leticia Lopes')
}) 

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));

