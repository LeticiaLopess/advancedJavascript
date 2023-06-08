function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.abracar = function() {
    return 'Abraçou';
  }
  this.andar = function () { 
    return 'Andou pelo objeto'
  }
}

var obj = {
  nome: 'Andre',
  idade: 33,
}

Pessoa.prototype.andar = function() {
  return this.nome + ' andou'
}

Pessoa.prototype.nadar = function () { 
  return this.nome + ' Pessoa nadou'
}

const andre = new Pessoa ('Andre', 28);

console.log(Pessoa.prototype)
console.log(andre.prototype) // undefined pois não tem
console.log(andre)
console.log(andre.__proto__)

const pais = 'Brasil';
const cidade = new String('Rio');

pais.charAt(0) // B -> char da posição 0
cidade.charAt(0) // R

console.log(String.prototype) // nome da função + '.prototype' -> retorna os métodos que essa função terá acesso






const listaAnimais = ['Cachorro', 'Gato', 'Cavalo']

const lista = document.querySelectorAll('li')

const listaArray1 = Array.prototype.slice.call(lista);
const listaArray2 = Array.from(lista);

console.log(Object.getOwnPropertyNames(Array))
console.log(Object.getOwnPropertyNames(Array.prototype))
console.log(Object.getOwnPropertyNames(andre)) // retorna o nome das propriedades que 'andre' possui


const Carro = {
  marca: 'Ford', 
  preco: 2000,
  andar() {
    return 'Oi';
  }
}

//console.log(Carro.andar().construtor.name)
//console.log(Carro.andar.construtor.name)


// EXERCÍCIOS

// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Person(nome, sobrenome, idade) {
  this.name = nome;
  this.familyName = sobrenome;
  this.age = idade;
}

Pessoa.prototype.fullName = function () {  // é tipo como quando eu adiciono mais alguma informação a um objeto, sendo que aqui eu adiciono esse método dentro do prototype de Pessoa
  return `${this.name} + ${this.familyName}`
}

const leticia = new Pessoa('Leticia', 'Lopes', 22);
console.log(leticia.fullName())


// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document
console.log(NodeList.prototype)
console.log(HTMLCollection.prototype)
console.log(Document.prototype)


// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; 
console.log(li.constructor.name) // HTMLElement

li.click;
console.log(li.click.constructor.name) // Function

li.innerText;
console.log(li.innerText.constructor.name) // String

li.value;
console.log(li.value.constructor.name) // Number

li.hidden;
console.log(li.hidden.constructor.name) // boolean

li.offsetLeft;
console.log(li.offsetLeft.constructor.name) // number

li.click();
console.log(li.click().constructor.name) // undefined -> não é nada e não dá pra continuar pois não tem constructor nenhum


// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // o que importa é o tipo de dao que chega no final, nesse caso me retorna o nome do dado "Boolean", mas esse retorno é em string
li.hidden.constructor.name.constructor.name // String






















































