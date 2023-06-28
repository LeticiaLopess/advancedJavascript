// os padrões devem ser colocados entre //, geralmente vamos utilizá-las nos métodos .replace() e .split()

const padraoRegexp = /a/

const texto = 'JavaScript';
const fraseNova = frase.replace(padraoRegexp, 'b') // pega o primeiro 'a' e substitui por 'b'

console.log(fraseNova)

[/\./gi]

/[A-z]/g // - não pega as letras com acentos, olhe a tabela unicode no google

let regex = /[^.]/g // ^ dentro do [] é negação, ali eu seleciono tudo menos o .    :)

const regexp = /^\w+/g // informa que a busca deve ser iniciada no início da linha, vai buscar o primeiro conjunto de alfanumericos antes de um caracter especial 

const regex2 = /[\wã]+/gi  // -> selecionando cada palavra

const grupoDeCaptura = /(\w+)@([\w.]+)/gi 

const selecionaCadaPalavraSemEspaco = /\w+/gi // (i é o case insensitive)



const validarCep = /\d{5}[\s-]?\d{3}/g

const ceps = [
  '00000-000',
  '00000 000',
  '00000000'
];

for (cep of ceps) {
  console.log(cep, cep.match(validarCep)) // estou vendo se o cep dá match com o regex
}


const validarCPF =  /(?:\d{3}[.-]?){3}\d{2}/g  // colocamos dentro de um grupo e multiplicamos por 3 pois repete, é igual a isso aqui ->  //  /\d{3}[.-]?\d{3}[.-]?\d{3}[.-]?/g 

const cpfs = [
  '000.000.000-00',
  '000-000-000-00',
  '000.000.000.00',
  '000000000-00',
  '00000000000'
];

for (cpf of cpfs) {
  console.log(cpf, cpf.match(validarCPF))
}


const validaCNPJ = /\d{2}[-.]?(?:\d{3}[-.]?){2}\/?\d{4}[-.]?\d{2}/g

const cnpjs = [
  '00.000.000/0000-00',
  '00000000000000',
  '00-000-000-0000-00',
  '00.000.000/000000',
  '00.000.000.000000',
  '00.000.000.0000.00',
];


const validaTel = /(?:\+?55\s?)?(?:\(?\d{2}\)?[\s-]?)?[\s-]?\d{4,5}[-\s]?\d{4}/g

const telefones = [
  '+55 11 98888-8888',
  '+55 11 98888 8888',
  '+55 11 988888888',
  '+55 11988888888',
  '+5511988888888',
  '5511988888888',
  '11 98888-8888',
  '11 98888 8888',
  '(11) 98888 8888',
  '(11) 98888-8888',
  '11-98888-8888',
  '11 98888 8888',
  '11988888888',
  '11988888888',
  '988888888',
  '(11)988888888',
  '98888 8888',
  '8888 8888'
];

for(telefone of telefones) {
  console.log(telefone, telefone.match(validaTel))
}


const validaEmails = /[\w.-]+@[\w-]+\.[\w.-]+/gi   // com o [\w.-] vai pegando todos os pontos que forem fazendo

const emails = [
  'email@email.com',
  'email@email.com.org',
  'email-email@email.com',
  'email_email@email.com',
  'email.email23@email.com.br',
  'email.email23@empresa-sua.com.br',
  'c@contato.cc',
];

for(email of emails) {
  console.log(email, email.match(validaEmails));
}


const regexpTag = /<\/?[\w\s="']+\/?>/gi

const tags = [
  '<div>Isso é uma div</div>',
  '<div class="ativa">Essa está ativa</div>',
  '<img src="imagem" />',
  '<img src="imagem">',
  '<ul class="ativa">',
  '<li>Essa está ativa</li>',
  '</ul>'
];

for(tag of tags) {
  console.log(tag, tag.match(regexpTag));
}



const regexpNomeTag = /(?<=<\/?)[\w]+/gi;

const tags2 = [
  '<div>Isso é uma div</div>',
  '<div class="ativa">Essa está ativa</div>',
  '<img src="imagem" />',
  '<img src="imagem">',
  '<ul class="ativa">',
  '<li>Essa está ativa</li>',
  '</ul>'
];

for(tag of tags) {
  console.log(tag, tag.match(regexpNomeTag));
}



const regexp2 = /\w+/gi

const newRegexp2 = new RegExp('\\w', 'gi');

const frase = 'JavaScript Linguagem 101'; 
console.log(frase.replace(regex2, 'X'));


const regexp3 = /\w+/gi;

regexp3.flags; // 'gi'
regexp3.global; // true
regexp3.ignoreCase; // true
regexp3.multiline; // false
regexp3.source; // '\w+'




const regexp4 = /Java/g;
const frase2 = 'JavaScript e Java';

// primeiro retorna true (Java de JavaScript), a próxima vez que ativo ele, ele continua de onde parou e retorna true Java, dps retorna false

regexp4.lastIndex; // 0
regexp4.test(frase2); // true
regexp4.lastIndex; // 4 -> último índice onde achou o que queria achar
regexp4.test(frase2); // true
regexp4.lastIndex; // 17
regexp4.test(frase2); // false
regexp4.lastIndex; // 0
regexp4.test(frase2); // true (Reinicia
regexp4.lastIndex;  // 4

let i = 1
while(regexp4.test(frase2)) {
  console.log(i++, regexp4.lastIndex)
}



const frase3 = 'JavaScript, TypeScript, CoffeeScript, Java'; 
const regexp5 = /\w+/g

let regexpResult;
while(regexpResult = regexp5.exec(frase3) !== null) {
  console.log(regexp5.exec(frase3))
}


// se eu executar diretamente o console.log e não tivesse a variável pra armazenar o resultado e não tivesse o Java por exemplo, eu teria número ímpar e o loop travaria o browser




// str.match()

const regexp = /\w{2,}/g;
const regexpSemG = /\w{2,}/;
const frase = 'JavaScript, TypeScript e CoffeeScript';

frase.match(regexp);
// ['JavaScript', 'TypeScript', 'CoffeeScript']

frase.match(regexpSemG);
// ["JavaScript", index: 0, input: "JavaScript,
// TypeScript e CoffeeScript", groups: undefined]




// str.split()

const frase = 'JavaScript, TypeScript, CoffeeScript';

frase.split(', ');
// ["JavaScript", "TypeScript", "CoffeeScript"]
frase.split(/Script/g);
// ["Java", ", Type", ", Coffee", ""]

const tags = `
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
`;

tags.split(/(?<=<\/?)\w+/g).join('div');
// <div>
//   <div>Item 1</div>
//   <div>Item 2</div>
// <div>




// str.replace()

const tags = `
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
`;

tags.replace(/(?<=<\/?)\w+/g, 'div'); // seleciona o nome de todas as tags pra mudar todas ao mesmo tempo
tags.replace(/ul/g, 'div'); // pega todas as ul e muda pra div
// <div>
//   <div>Item 1</div>
//   <div>Item 2</div>
// <div>


const tags = `
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
`;

tags.replace(/<li/g, '$& class="ativo"');
// <ul>
//   <li class="ativo">Item 1</li>
//   <li class="ativo">Item 2</li>
// </ul>



const emails = `
empresa@email.com
contato@email.com
suporte@email.com
`;

emails.replace(/(\w+@)[\w.]+/g, '$1gmail.com');
// empresa@gmail.com
// contato@gmail.com
// suporte@gmail.com



const regexp = /(\w+)(@[\w]+)/g;
const emails = `joao@homail.com.br
marta@ggmail.com.br
bruna@oulook.com.br`

emails.replace(regexp, function(...args) {
  console.log(args);
  if(args[2] === '@homail') {
    return `${args[1]}@hotmail`;
  } else if(args[2] === '@ggmail') {
    return `${args[1]}@gmail`;
  } else if(args[2] === '@oulook') {
    return `${args[1]}@outlook`;
  } else {
    return 'x';
  }
});

// joao@hotmail.com.br
// marta@gmail.com.br
// bruna@outlook.com.br








