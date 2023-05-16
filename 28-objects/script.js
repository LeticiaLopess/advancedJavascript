// const pessoa = new Object({
//   nome: 'Leticia',
//   idade: 22
// })


// //Object.create() -> criamos um objeto baseado nas propriedades de outro objetp. É como se fosse uma função construtora

// const carro = {
//   marca: 'Marca',
//   rodas: 4,
//   init(valor) {
//     this.marca = valor;
//     return this;
//   },
//   acelerar() {
//     return this.marca + ' acelerou';
//   },
//   buzinar() {
//     return this.marca + ' buzinou'
//   }
// }

// const honda = Object.create(carro); // agora o protótipo de carro faz parte de honda
// honda.init('Honda')

// console.log(honda.acelerar());

// const ferrari = Object.create(carro).init('Ferrari');
// console.log(ferrari.acelerar())


// // Object.assign() -> temos um objeto na qual serve como se fosse um protótipo para a criação de outros objetos, compartilhando métodos e propriedades, sendo que esses métodos e propriedades não vão para o protótipo mas para o objeto em si diretamente

// const funcaoAutomovel = {
//   acelerar() {
//     return 'acelerou';
//   },
//   buzinar() {
//     return 'buzinou';
//   },
// }

// const moto = {
//   rodas: 2,
//   capacete: true,
// }

// // const carro = {
// //   rodas: 4,
// //   mala: true,
// // }

// // Object.assign(moto, funcaoAutomovel, carro); // o objeto moto terá os métodos de funcaoAutomovel -> o rodas de moto sobrescreve o rodas de carro
// // Object.assign(carro, funcaoAutomovel);


// // Object.defineProperties() -> para definirmos propriedades

const moto = {
  capacete: true,
}

console.log(moto)
// moto.rodas = 5; // nesse caso as propriedades são mutáveis, mas podemos torná-las imutáveis

console.log(moto)


Object.defineProperties(moto, {
  rodas: { // como será imutável não passamos direto, abrimos um obj e passamos com o value
    //value: 2,
    //configurable: false,
    //writable: true, // se writable = true eu consigo mudar o valor mas se o configurable estiver falso eu não consigo deletar mesmo assim
    enumerable: true, // torna enumerável, agora quando eu chamar o Object.keys(carro), o rodas vai aparecer no array de retorno
    // get: function() {} or get() {}
    get() {
      return this._rodas;
    },
    set(valor) {
      this._rodas = valor * 4 + ' é o Total de Rodas'
    }
  }
})

// // moto.rodas = 5
// // console.log(moto)

// // delete moto.rodas;
// // delete moto.capacete;
// // console.log(moto)

// console.log(moto.rodas = 2)
// console.log(moto.rodas)


// // Object.getOwnPropertyDescriptors(obj) -> lista os métodos e propriedades do objeto

// console.log(Object.getOwnPropertyDescriptors(Array))
// console.log(Object.getOwnPropertyDescriptors(Array.prototype))
// console.log(Object.getOwnPropertyDescriptors(Window))
// console.log(Object.getOwnPropertyDescriptors(Window.prototype))
// console.log(Object.getOwnPropertyDescriptors(window, 'innerHeight')) // pega de uma única propriedade


// // Object.keys(obj) -> retorna chave     Object.values(obj) -> retorna valores     Object.entries(obj) -> retorna chave + valor

// Object.keys(carro)
// Object.values(carro)
// Object.entries(carro)


// // Object.getOwnPropertyNames(obj) -> retorna um array com todas as propriedades diretas do objeto (não retorna as do protótipo) -> forma de verificar mesmo se estiver numerável(enumerable) ou não

// console.log(Object.getOwnPropertyNames(Array))
// console.log(Object.getOwnPropertyNames(Array.prototype)) // agora sim retorna o de prototypes


// // Object.getProtorypeOf(obj) -> retorna o protótipo do objeto

// const frutas = ['Banana', 'Mamão']

// console.log(Object.getPrototypeOf(frutas))
// console.log(Object.getPrototypeOf('')) // me dá o protótipo de string, que é o que foi usado pra criar essa string
// console.log(Object.getPrototypeOf(Array.prototype))

// const frutas1 = ['Banana', 'Mamão']
// const frutas2 = ['Banana', 'Mamão']

// Object.is(frutas1, frutas2) // false, isso significa que se eu mudar um não vai interferir na outra

// const novaFruta = frutas1;

// Object.is(frutas1, novaFruta) // true

// novaFruta[0] = 'Uva';

// console.log(frutas1)


// // Object.freeze() -> impede mudanças, Object.seal() -> previne adução de props e impede que as atuais sejam deletadas   Object.preventExtensions() -> previne a adição de novas propriedades
// Object.freeze(carro);
// Object.seal(carro); // previne criações de novas propriedades, impede que sejam deletadas as props existentes mas permite a mudança das anteriores
// Object.preventExtensions(carro) // previne adição de novas props, permite que delete as antigas

// console.log(Object.isFrozen(carro)) // true
// console.log(Object.isSealed(carro)) // true
// console.log(Object.isExtensible(carro)) // falso -> pegadinha, já que eu preveni, vai ser falso


// console.log(frutas) // tem o prototipo de array e depois tem o protótipo de objeto


// // {}.constructor

// console.log(''.constructor) // mostra o construtor da string
// console.log([].constructor) // mostra o construtor da array
// console.log({}.constructor) // mostra o construtor do objeto


// {}.hasOwnProperty('prop') -> verifica se tal propriedade é do objeto (não considera as dentro do prototipo)  {}.propertyIsNumerable('prop') -> verifica se a prop é enumerável


// {}.toString()



const frase = 'Oi frase';
const somar = function (a, b) {
  return a + b;
}

const carro = {
  marca: 'Ford'
}

//console.log(frutas.toString());

// se eu for verificar o typeof de alguma coisa vai me retornar objeto pois tudo é objeto em JS, e a solução pra pesquisar corretamente o tipo de alguma coisa em JS é assim:

const frutas = ['Banana', 'Uva']
console.log(typeof frutas) // object
console.log(Object.prototype.toString.call(frutas)) // [object Array] -> objeto do tipo Array
console.log(Object.prototype.toString.call(somar)) // [object Function] -> objeto do tipo Function



// EXERCÍCIOS

// Crie uma função que verifique
// corretamente o tipo de dado
function verifyData(data) {
  return Object.prototype.toString.call(data)
}

console.log(verifyData(frutas))
console.log(verifyData(carro))


// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável
const quadrado = {
  lados: {
    value: 4,
    enumerable: true, // você vai definir outro valor, não dá erro, mas quando você chamar ele de novo, vai ver que não mudou
  }
}


// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: '#333'
}
Object.freeze(configuracao) // não deleta nem adiciona


// Liste o nome de todas
// as propriedades do
// protótipo de String e Array
console.log(Object.getOwnPropertyNames(String.prototype))
console.log(Object.getOwnPropertyNames(Array.prototype))



