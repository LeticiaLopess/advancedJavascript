// Rest

function perimetroForma(lado, totalLados = 4, ...listaArgumentos) { // totalLados vai ser igual a 4 caso não seja passado parâmetro
  console.log(listaArgumentos) // todo argumento que entrar depois de totalLados virá dentro de um array-like em listaArgumentos
  console.log(arguments)
  return lado * totalLados;
  
}

console.log(perimetroForma(10, 4, 'Maria', 'Pedrinho', 'Julian')) // 40
console.log(perimetroForma(10)) // NaN

function anunciarGanhadores (premio, ...ganhadores) {
  ganhadores.forEach(ganhador => {
    console.log(ganhador + ' ganhou um ' + premio)
  });
}

const ganhadores = ['Pedrinho', 'Marta', 'Maria', 'Beto']
anunciarGanhadores('Carro', ...ganhadores)


// Spread

// o spread pode ser útil para funções que recebem uma lista de argumentos

const frutas = ['Banana', 'Uva', 'Morango'];
const legumes = ['Cenoura', 'Batata'];

const comidas = [...frutas, 'Maca', ...legumes] // adiciono todos os elementos de frutas e de legumes dentro de comidas
const comidas2 = [frutas] // aqui eu adiciono o array frutas dentro da posição 0 do array comidas2

console.log(comidas)

const todosOsNumeros = [3,4,5,12,3,3,24,2,3,4]
const numeroMaximo = Math.max(...todosOsNumeros)

console.log(numeroMaximo)


// podemos criar arrays com o spread
const btn = document.querySelectorAll('button')
//const btnsArray = Array.from(btn)
// or

const btnsArray = [...btn]
console.log(btnsArray)



// ECERCÍCIOS

// Reescreva a função utilizando
// valores iniciais de parâmetros com ES6
function createButton(background = 'blue', color = 'red') {

  // background = background || 'blue';
  // if(color === undefined) {
  //   color = 'red';
  // }

  const buttonElement = document.createElement('button');
  buttonElement.style.background = background;
  buttonElement.style.color = color;

  return buttonElement;
} 

const redButton = createButton('black', 'tomato');

// Utilize o método push para inserir as frutas ao final de comidas.
const frutass = ['Banana', 'Uva', 'Morango'];
const comidass = ['Pizza', 'Batata'];

comidass.push('Cenoura', 'Pimenta')
comidass.push(...frutass) // joga cada um dentro de comidass

console.log(comidas)





