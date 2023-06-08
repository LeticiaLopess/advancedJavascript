// const aulas = [
//   {
//     nome: 'HTML 1',
//     min: 15
//   },
//   {
//     nome: 'HTML 2',
//     min: 10
//   },
//   {
//     nome: 'CSS 1',
//     min: 20
//   },
//   {
//     nome: 'JS 1',
//     min: 25
//   },
// ]

// const tempoAulas = aulas.map(aula => aula.min);
// // [15, 10, 20, 25];

// const puxarNomes = aula => aula.nome;
// const nomesAulas = aulas.map(puxarNomes);
// // ['HTML 1', 'HTML 2', 'CSS 1', 'JS 1']


// const carros = ['Ford', 'Fiat', 'Honda'];
// const newCarros = carros.map((item) => {
//   const novoValor = 'Carro ' + item;
// });

// newCarros; // [undefined, undefined, undefined];


// const numeros0 = [2, 4, 6, 8, 10, 12, 14];
// const numerosX3 = numeros.map(n => n * 3);

// numerosX3; // [6, 12, 18, 24, 30, 36, 42];


// const frutas = ['Banana', 'Pêra', 'Uva'];

// const frutasRight = frutas.reduceRight((acc, fruta) => acc + ' ' + fruta);
// const frutasLeft = frutas.reduce((acc, fruta) => acc + ' ' + fruta);

// frutasRight; // Uva Pêra Banana
// frutasLeft; // Banana Pêra Uva


// const frutas2 = ['Banana', 'Pêra', 'Uva'];
// const temUva = frutas.some((fruta) => {
//   return fruta === 'Uva';
// }); // true

// function maiorQue100(numero) {
//   return numero > 100;
// }
// const numeros2 = [0, 43, 22, 88, 101, 2];
// const temMaior = numeros.some(maiorQue100); // true


// const frutas3 = ['Banana', 'Pêra', 'Uva', ''];
// // False pois pelo menos uma fruta
// // está vazia '', o que é um valor falsy
// const arraysCheias = frutas.every((fruta) => {
//   return fruta; // false
// });

// const numeros3 = [6, 43, 22, 88, 101, 29];
// const maiorQue3 = numeros.every(x => x > 3); // true


// const frutas4 = ['Banana', 'Pêra', 'Uva', 'Maçã'];
// const buscaUva = frutas.findIndex((fruta) => {
//   return fruta === 'Uva'; 
// }); // 2

// const numeros4 = [6, 43, 22, 88, 101, 29];
// const buscaMaior45 = numeros.find(x => x > 45); // 88


// const frutas5 = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];
// const arrayLimpa = frutas.filter((fruta) => {
//   return fruta; 
// }); // ['Banana', 'Uva', 'Maçã']

// const numeros5 = [6, 43, 22, 88, 101, 29];
// const buscarMaior45 = numeros.filter(x => x > 45); // [88, 101]




// EXERCÍCIOS

/* <section class="curso">
  <h1>Web Design Completo</h1>
  <p>Este curso é para quem deseja entrar ou já está no mercado de criação de websites.</p>
  <span class="aulas">80</span>
  <span class="horas">22</span>
</section>
<section class="curso">
  <h1>WordPress Como CMS</h1>
  <p>No curso de WordPress Como CMS, você aprende do zero como pegar qualquer site em HTML e torná-lo totalmente gerenciável com a plataforma do WordPress.</p>
  <span class="aulas">46</span>
  <span class="horas">9</span>
</section>
<section class="curso">
  <h1>UI Design Avançado</h1>
  <p>Este é um curso avançado de User Interface Design.</p>
  <span class="aulas">55</span>
  <span class="horas">15</span>
</section> */


// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursos = document.querySelectorAll('.curso');
const arrayCursos = Array.from(cursos)

const objetosCurso = arrayCursos.map((curso) => {
  const titulo = curso.querySelector('h1').innerText;
  const descricao = curso.querySelector('p').innerText;
  const aulas = curso.querySelector('.aulas').innerText;
  const horas = curso.querySelector('.horas').innerText;

  return {
    titulo, // quando o nome da chave e valor são iguais eu não preciso repetir assim: "titulo: titulo," eu passo direto
    descricao,
    aulas,
    horas
  }
})

console.log(objetosCurso)
console.log(arrayCursos)


// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const maiorQue100 = numeros.filter((n) => n > 100) // filter é diferente de map, some, etc, preste atenção
console.log(maiorQue100)



// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
console.log(instrumentos.some(item => item === 'Baixo'))


// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

const soma = compras.reduce((acumulador, item) => {
  const precoLimpo = +item.preco.replace('R$ ', '').replace(',', '.') // o + na frente muda para number e o replace vai remover o R$ e em number não podemos usar ",", devemos usar "."
  return acumulador + precoLimpo
}, 0) // coloque o 0 para que o acumulador pegue a primeira posição certinho, se não ele pula o primeiro retorno

console.log(soma)


