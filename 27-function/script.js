function areaQuadrado(lado) {
  return lado * lado;
}


const perimetroQuadrado = new Function('lado', 'return lado * 4');

function somar(n1, n2) {
  return n1 + n2;
}

somar.length; // 2
somar.name; // 'somar'


const carro = {
  marca: 'Ford',
  ano: 2018
}

function descricaoCarro() {
  console.log(this.marca + ' ' + this.ano);
}

descricaoCarro() // undefined undefined
descricaoCarro.call() // undefined undefined
descricaoCarro.call(carro) // Ford 2018


const carros = ['Ford', 'Fiat', 'VW'];

carros.forEach((item) => {
  console.log(item);
}); // Log de cada Carro

carros.forEach.call(carros, (item) => {
  console.log(item);
}); // Log de cada Carro

const frutas = ['Banana', 'Pêra', 'Uva'];

carros.forEach.call(frutas, (item) => {
  console.log(item);
}); // Log de cada Fruta


function Dom(seletor) {
  this.element = document.querySelector(seletor);
};

Dom.prototype.ativo = function(classe) {
  this.element.classList.add(classe);
};

const lista = new Dom('ul');
lista.ativo('ativar');
console.log(lista);


const novoSeletor = {
  element: document.querySelector('li')
}

Dom.prototype.ativo.call(novoSeletor, 'ativar');


Array.prototype.mostreThis = function() {
  console.log(this);
}

const frutass = ['Uva', 'Maçã', 'Banana'];
frutass.mostreThis(); // ['Uva', 'Maçã', 'Banana']

Array.prototype.pop.call(frutass); // Remove Banana
frutass.pop(); // Mesma coisa que a função acima


const li = document.querySelectorAll('li');

const filtro = Array.prototype.filter.call(li, function(item) {
  return item.classList.contains('ativo');
});

filtro; // Retorna os itens que possuem ativo


const numeros = [3,4,6,1,34,44,32];
Math.max.apply(null, numeros);
Math.max.call(null, 3, 4, 5, 6, 7, 20);

// Podemos passar null para o valor
// de this, caso a função não utilize
// o objeto principal para funcionar


const lii = document.querySelectorAll('li');

const filtrarLi = Array.prototype.filter.bind(lii, function(item) {
  return item.classList.contains('ativo');
});

filtrarLi();


const carrow = {
  marca: 'Ford',
  ano: 2018,
  acelerar: function(aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
  }
}
carrow.acelerar(100, 20);
// Ford acelerou 100 em 20

const honda = {
  marca: 'Honda',
};
const acelerarHonda = carrow.acelerar.bind(honda);
acelerarHonda(200, 10);
// Honda acelerou 200 em 10


function imc(altura, peso) {
  return peso / (altura * altura);
}

const imc180 = imc.bind(null, 1.80);

imc(1.80, 70); // 21.6
imc180(70); // 21.6



// EXERCÍCIOS

/* <section>
  <p>Lobo-cinzento (nome científico:Canis lupus) é uma espécie de mamífero canídeo do gênero Canis. É um sobrevivente da Era do Gelo, originário do Pleistoceno Superior, cerca de 300 mil anos atrás. É o maior membro remanescente selvagem da família canidae.</p>
  <p>Os lobos-cinzentos são tipicamente predadores ápice nos ecossistemas que ocupam. Embora não sejam tão adaptáveis à presença humana como geralmente ocorre com as demais.</p>
  <p>O peso e tamanho dos lobos variam muito em todo o mundo, tendendo a aumentar proporcionalmente com a latitude.</p>
  <p>Os lobos são capazes de percorrer longas distâncias com uma velocidade média de 10 quilômetros por hora e são conhecidos por.</p>
</section> */


// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce


// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.


// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
