
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




