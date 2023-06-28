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





























