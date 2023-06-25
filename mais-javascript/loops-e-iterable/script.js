// para isso os objetos precisam ter o (Symbol.iterator no _proto_)

const frutas = ['Banana', 'Morango', 'Uva'];
const frase = 'Isso é JavaScript';

fetch('https://pokeapi.co/api/v2/pokemon/')
.then(({headers}) => console.log(headers)); // destructuring o headers e mostrando

// é interessante sabermos se o loop é iterável para usarmos o for...of (string é iterable)

for(const fruta of frutas) { // é como se fosse um forEach, fruta é a variável que vai ficar passando em loop no array frutas
  console.log(fruta)
}

for(const char of frase) { // percorre e retorna cada letra da string
  console.log(char)
}

const buttons = document.querySelectorAll('button');

for (const btn of buttons) {
  btn.style.color = 'blue'
}

console.log(...buttons)


// for...in retorna a chave de todas as propriedades enumeráveis (que não sejam Symbol) de um objeto 

const carro = {
  marca: 'Honda',
  ano: 2018
}

Object.defineProperties(carro, {
  rodas: {
    value: 4,
    enumerable: true
  }
})

for(const key in carro) {
  console.log(key, carro[key]) // tipo carro.marca pode ser carro[marca]
}

for(const f in frutas) {
  // console.log(f) // retorna o index dos elementos
  console.log(frutas[f]) // retorna os elementos
}


const btnUnico = document.querySelector('button');
const btnStyles = getComputedStyle(btnUnico)

for (const style in btnStyles) {
  console.log(`${style}: ${btnStyles[style]}`);
}



// Do / While

let i = 0;
do {
  console.log(i++)
} while (i <=5);


// EXERCÍCIOS

// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li

for(const item of itens) {
  item.classList.add('ativo')
}

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window

// como o window não é iterable, vamos usar o in

for (const windowKey in window) {
  console.log(windowKey + ': ' + window[windowKey]);
}