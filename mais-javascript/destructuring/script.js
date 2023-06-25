const carro = {
  marca: 'Honda',
  ano: 2018
}

const marcaCarro = carro.marca
// com destructuring:
//const {marca} = carro // já estou pegando marca do objeto carro (não pode ter variável com o msm nome)

const {marca, ano} = carro
console.log(marca, ano)


const cliente = {
  nome: 'Andre',
  compras: {
    digitais: {
      livros: ['Livro 1', 'Livro 2'],
      videos: ['Video JS', 'Video HTML']
    },
    fisicas: {
      cadernos: ['Caderno 1']
    }
  }
}

console.log(cliente.compras.digitais.livros)
console.log(cliente.compras.digitais.videos)

// ou, com destructuring:

// const {livros, videos} = cliente.compras.digitais; // basicamente criamos uma variavel que vai puxar esses valores
// console.log(livros)
// console.log(videos)

const {digitais, fisicas, digitais: {livros, videos}} = cliente.compras;
console.log(digitais)

const {nome: nomeAndre, email = 'email@gmail.com'} = cliente // o nome da variável criada que pegará o valor de 'nome' não será nome, mas sim nomeAndre
// atribuindo valor inicial de email já que ele não está dentro do objeto cliente (retornaria undefined mas aqui estamos passando um valor inicial)


const frutas = ['Banana', 'Uva', 'Morango'];

const primeiraFruta = frutas[0]
const segundaFruta = frutas[1]
const terceiraFruta = frutas[2]


// com destructuring podemos criar uma sequência de variáveis também

/* 
const primeiro = 'Item 1';
const segundo = 'Item 2';
const terceiro = 'Item 3';
*/

// ou
const [primeiro, segundo, terceiro] = ['Item 1', 'Item 2', 'Item 3']; 


function handleKeyboard(event) {
  console.log(event.key);
}

// Com Destructuring
function handleKeyboard2({key, keyCode}) {
  console.log(key, keyCode);
}

document.addEventListener('keyup', handleKeyboard);



// Extraia o backgroundColor, color e margin do btn
const btn = document.querySelector('button');
const btnStyles = getComputedStyle(btn); // retorna todo o estilo computado pelo browser com chave e valor, quando damos console.log em btn.style não retornam os valores

console.log(btnStyles.backgroundColor, btnStyles.margin, btnStyles.color)
const {backgroundColor, margin, color} = btnStyles


// Troque os valores das variáveis abaixo
let cursoAtivo = 'JavaScript';
let cursoInativo = 'HTML';

[cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo];

console.log(cursoAtivo, cursoInativo)


// Corrija o erro abaixo
const cachorro = {
  nome: 'Bob',
  raca: 'Labrador',
  cor: 'Amarelo'
}

const {cor: bobCor} = cachorro;
