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


// str.repeat(n) -> repete n vezes

const phrase = 'Ta';

phrase.repeat(5) // TaTaTaTaTa
console.log(phrase.repeat(5))


// str.replace(regexp|substr, newstr|function) -> troca parte da string por outra
let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
// listaItens = listaItens.replace(/[ ]+/g, ', ') -> g busca todos os espaços[nesse caso] globalmente
// listaItens = listaItens.replace('Camisas', 'Shirts');
listaItens = listaItens.replace(' ', ','); // ele substitui apenas do primeiro, por isso, temos que usar a regular expression -ou regex-, caso do primeiro exemplo ali


let preco = 'R$ 1200,43';
preco = preco.replace(',', '.') // 'R$ 1200.43'


// str.split -> separa a string/lista e retorna um array
const arrayLista = listaItens.split('s, '); // quebra nos s e retorna o array 
// se eu passar uma string vazia ele quebra todas as letras e caracteres
console.log(arrayLista)


// str.toLowerCase() e srt.toUpperCase()
// coloca pra tudo minúsculo e o outro pra tudo maiúsculo

const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';

(sexo1.toLowerCase() === 'feminino'); // true
(sexo2.toLowerCase() === 'feminino'); // true
(sexo3.toLowerCase() === 'feminino'); // true


// str.trim(), str.trimStart(), str.trimEnd() -> remove espaço em branco do início ou final de uma string

const valor = '  R$ 23.00   ' 
valor.trim(); // 'R$ 23.00'
valor.trimStart(); // 'R$ 23.00   '
valor.trimEnd(); // '  R$ 23.00'


// EXERCÍCIOS

// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacao = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];


console.log(transacao)
console.log(transacao[0].descricao)
console.log(transacao[0].valor)

let taxaTotal = 0
let recebimentoTotal = 0;
transacao.forEach((item) => {
  const numeroLimpo = +item.valor.replace('R$ ', '');
  console.log(numeroLimpo)
  if(item.descricao.slice(0,4) === 'Taxa') { // ou substr(0,4) // ou slice(0,4) slice pega só o início
  taxaTotal = taxaTotal + numeroLimpo
  } else if (item.descricao.slice(0,4) === 'Rece') {
    recebimentoTotal += numeroLimpo;
  }
})
console.log(taxaTotal)
console.log(recebimentoTotal)



// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

const arrayTransportes = transportes.split(';');
console.log(arrayTransportes)



// Substitua todos os span's por a's
let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;


html = html.split('span').join('a')
console.log(html)


// Retorne o último caracter da frase
const frasee = 'Melhor do ano!';

console.log(frasee[frasee.length - 1]);
console.log(frasee.slice(-1)) // outra opção



// Retorne o total de taxas
const transacoes = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let taxasTotal = 0;
transacoes.forEach((item) => {
  item = item.toLowerCase();
  item = item.trim();
  item = item.slice(0,4);

  if(item === 'taxa') 
  taxasTotal++
})

console.log(taxasTotal)



























































