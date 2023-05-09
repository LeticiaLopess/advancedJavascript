const comida = 'Pizza'
const agua = new String ('Agua');
const linguagem = 'JavaScript'


// Métodos e Propriedades Herdados de String

// str.length
console.log(agua.length) // total de caracteres
console.log(comida[0])
console.log(comida[comida.length - 1]) // o último caracter... comida.length retorna undefined, fazer [comida.length - 1]


// str.charAt(n)
console.log(linguagem.charAt(linguagem.length)) // retorna o caracter de acordo com o index de (n)... linguagem.length retorna vazio, fazer (linguagem.length - 1)


// str.concat(str2, str3...) -> concatena strings
const frase = 'A melhor linguagem é ';

const fraseFinal = frase.concat(linguagem, '!!', 'Oi lelelel')
console.log(fraseFinal)


// str.includes(search, position) -> procura pela string exata dentro de outra string [é case sensitive]
const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

listaFrutas.includes(fruta); // true
fruta.includes(listaFrutas, 14); // false


// str.endsWith(search) e str.startsWith(search)
console.log(fruta.startsWith('ba')) // false
console.log(fruta.startsWith('Ba')) // true


// str.slice(start, end) -> corta a string de acordo com os valores de start e end
const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

transacao1.slice(0, 3) // dep
transacao2.slice(0, 3) // Dep
transacao3.slice(0, 3) // Tax

transacao1.slice(12) // cliente -> pega a partir da posição 12 -> corta os 12 primeiros caracteres e mostra no resultado
transacao1.slice(-4) // ente -> pega a posição 4 de trás pra frente -> corta os últimos 4 caracteres e mostra no resultado
transacao1.slice(3, 6) // ósi


// str.substring(start, end) -> corta a string de acordo com os valores de start e end. Não funciona com valores negativos como o slice.
const linguagemm = 'JavaScript';
linguagemm.substring(3,5) // aS
linguagemm.substring(0,4) // Java
linguagemm.substring(4) // Script
linguagemm.substring(-3) // JavaScript

/*0123456789*/
// str.indexOf(search) e str.lastIndexOf(search) -> retorna o index da string, indexOf pega o primeiro resultado e lastIndexOf pega o último
const instrumento = 'Guitarra';
instrumento.indexOf('r') // 5
instrumento.lastIndexOf('r') // 6 retorna o último r, não o primeiro
instrumento.indexOf('ta') // 3


// str.padStart(n, str) e str.padEnd(n, str) -> aumenta o valor da string para o valor de n. se uma str tiver 8 e passarmos n=10, ela passará a ter 10 caracteres e o preenchimento é feito com espaços
const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPrecos.forEach((preco) => {
  console.log(preco.padStart(10, '.'));
})

listaPrecos[0].padStart(10, '.'); // .....R$ 99 // aumenta pra 10 caracteres e o resto preenche com '.'
listaPrecos[0].padEnd(10, '.'); // R$ 99.....


