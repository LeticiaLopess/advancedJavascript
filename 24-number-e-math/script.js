// Number

// Number.isNaN() e Number.isInteger() -> aquele verifica se é number e este verifica se é uma integral
Number.isNaN(NaN) // true
Number.isNaN(4 + 5) // false

Number.isInteger(20) // true
Number.isInteger(20.6) // false



// Number.parseFloat() e Number.parseInt()
console.log(parseFloat('  32434.343'))
console.log(parseFloat('100.27 reais'))
console.log(parseInt('100.27 reais'))
console.log(parseInt(23.49))



// n.toFixed(nº de casas decimais) -> arredonda o número com base no total de casas decimais do argumento
// const preco = 2.99;
// preco.toFixed() // 3

const carro = 1000.455;
carro.toFixed(2) // 1000.46

const preco2 = 1499.49
preco2.toFixed() // 1499

const preco = 10.32323 // vai sair string, por isso o '+'
console.log(+preco.toFixed() +3232)

console.log(99.99.toFixed())



// n.toString(radix) -> Transforma o número em uma string com base no Radix. Use o 10 para sistema decimal
const preco3 = 2.99;
preco3.toString(10); // '2.99'



// n.toLocalString(lang, options) -> formata o número de acordo com a língua e opções passadas. Posso formatar para moeda
const valor = 59.49;
valor.toLocaleString('en-US', {style: 'currency', currency: 'USD'}); // $59.49
valor.toLocaleString('pt-BR', {style: 'currency', currency: 'brl'}); // R$59.49



// Math -> objeto nativo com métodos e propriedades
console.log(Math)
console.log(Math.PI)



// Math.abs(), Math.ceil(), Math.floor() e Math.round()
Math.abs(-5.5); // 5.5
Math.ceil(4.8334); // 5
Math.ceil(4.3); // 5
Math.floor(4.8334); // 4
Math.floor(4.3); // 4
Math.round(4.8334); // 5
Math.round(4.3); // 4



// Math.max(), Math.min() e Math.random()
Math.max(5,3,10,42,2); // 42
Math.min(5,3,10,42,2); // 2

Math.random(); // 0.XXX
Math.floor(Math.random() * 100); // entre 0 e 100
Math.floor(Math.random() * 500);  // entre 0 e 500

// Número random entre 72 e 32 -> use esta fórmula
Math.floor(Math.random() * (72 - 32 + 1)) + 32; 
// Math.floor(Math.random() * (max - min + 1)) + min;



//EXERCÍCIOS

// Retorne um número aleatório
// entre 1050 e 2000
console.log(Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050) // Math.floor -> arredonda pra baixo e não deixa número quebrado



// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
let array = numeros.split(', '); // me retorna um array
const numeroMaximo = Math.max(...array) // operador novo [dispread -> ...] vai passar em cada argumento, caracter
console.log(numeroMaximo);



// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];


function limparPrecos(preco) {
  preco = +preco.toUpperCase().replace('R$', '').trim().replace(',', '.'); // + transforma em número
  preco = +preco.toFixed(2);
  return preco;
}

let soma = 0;
listaPrecos.forEach((preco) => {
  soma += limparPrecos(preco);
})

console.log(soma.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));

limparPrecos(listaPrecos[0])


