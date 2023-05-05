const carro = {
  marca: 'Marca',
  preco: 0,
}


// novo objeto mas com as mesmas características do objeto anterior, então posso igualar e acessar as mesmas propriedades ao invés de criar mais um objeto igual. 
const honda = carro; 
honda.marca = 'Honda';
honda.preco = 2000;
// Porém, o problema é que estaremos modificando o objeto anterior, reescrevendo os valores, e para isso existe as constructor functions <3


function Carro(marcaAtribuida, precoAtribuido) { // pascal case -> toda vez que criarmos funções contrutoras [responsáveis por construir novos objetos sempre que chamamos as mesmas] o nome da função deve ser em maiúsculo e devemos referenciar suas variáveis com o this.
  console.log(this)
  this.marca = marcaAtribuida;
  this.preco = precoAtribuido;
}

const ferrari = new Carro(); // aqui sim, você está criando um NOVO OBJETO BASEADO NAS MESMAS PROPRIEDADES DA FUNÇÃO CONSTRUTORA.
ferrari.marca = 'Ferrari';
ferrari.preco = 20000000;
ferrari.teste = 'oi';
ferrari.andar = function() { 
  console.log('andou')
}

const mercedes = new Carro() 
mercedes.marca = 'Mercedes';
mercedes.preco = 10000000;

// ou por parâmetro

const haas = new Carro('Haas', 30000)

function Carro2(marca, precoInicial) { // podemos criar constantes e td mais dentro dessa função
  const taxa = 1.2;
  console.log(this)
  const precoFinal = precoInicial * taxa;
  this.marca = marca;
  console.log(this)
  this.preco = precoFinal;
  console.log(this)
}

const redbull = new Carro('redbull', 20000) // só terá acesso a marca e preco e não a outras coisas da function




// EXEMPLOS
// muitos exemplos são dados com Pessoa ou Carro mas na prática não usaríamos isso então faremos um exemplo com a Dom

// const Dom = {
//   seletor: 'li',
//   element() { // ou elemento: function() {}
//     return document.querySelector(this.seletor)
//   },
//   ativar() {
//     //const elementoSelecionado = this.element() // document.querySelector(this.seletor);
//     this.element().classList.add('ativar');
//   }
// }
// Dom.ativar(); // ativa a li
 

// Dom.ativar(); // ativa a li

// Dom.seletor = 'ul'; // se eu quiser colocar o ativar na ul [não preciso reescrever tudo]
// Dom.ativar();



// -> transformando em função construtora

function Dom(seletor) {
  this.seletor = 'li',
  this.element = function() { // ou elemento: function() {}
    return document.querySelector(this.seletor)
  }
  this.ativar = function(classe) {
    // const elementoSelecionado = this.element() // document.querySelector(this.seletor);
    this.element().classList.add('ativar');
    // this.element().classList.add(classe) // para escolher o nome da classe a ser colocada
  }
}


const li = new Dom('li');
const ul = new Dom('ul');

const lastLi = new Dom('li:last-child') // seleciona o último li



// EXERCÍCIOS

// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
  nome: 'Nome pessoa',
  idade: 0,
  andar() {
    console.log(this.nome + ' andou');
  }
}

function Pessoa() {
  this.nome = 'Leticinha',
  this.idade = 22,
  this.andar = function() {
    console.log(this.nome + ' andou');
  }
}


// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

const pessoa1 = new Pessoa();
pessoa1.nome = 'João';
pessoa1.idade = 20;

const pessoa2 = new Pessoa();
pessoa2.nome = 'Maria';
pessoa2.idade = 25;

const pessoa3 = new Pessoa();
pessoa3.nome = 'Bruno';
pessoa3.idade = 15;

// também poderia ter passado por parâmetro


// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos


function newDom(el) {
  const lista = document.querySelectorAll(el);
  this.elements = lista;
  this.addClass = function(classe) {
    lista.forEach((element) => {
      element.classList.add(classe);
    })
  }
  
  this.removeClass = function(classe) {
    lista.forEach((element) => {
      element.classList.remove(classe);
    })
  }
}




















































