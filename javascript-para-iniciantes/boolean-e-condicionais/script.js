var possuiGraduacao = false;
var possuiDoutorado = true;

if(possuiGraduacao) { // se possuiGraduacao = false, não apareceria o x
  console.log('É verdadeiro');
  var x = 10;
} else if(possuiDoutorado){
  console.log('Possui Doutorado');
} else {
  console.log('Não possui nada')
}

console.log(x)

// o console.log aqui, mostra meu resultado por conta do hoisting relacionado a uma particularidade da var, pois se eu usasse let eu teria um retorno de que x não não foi definido, ai eu teria que dar o console.log dentro da condição/função

// valores que retornam false [Falsy]:

if(false)
if(0) // ou -0
if(NaN)
if(null)
if(undefined)
if(''); // ou "" ou ``

// o resto é truthy
if(true)
if(1)
if(' ') // um espaço já é um caracter
if('andre')
if(-5)
if({});

var x = 10;

console.log(x !== 11)

if((5-5) && (5+5)) { // 0 - false
  console.log('Verdadeiro')
} else {
  console.log('False')
}


var condicional = (5-10) && (5+5);

if(condicional) { // 10 - verdadeiro
  console.log('Verdadeiro')
} else {
  console.log('False')
}

var condicional2 = (5 - 5) || (5 + 5) && (10 - 2); // retorna o último verdadeiro -> 8
console.log(condicional2);


// SWITCH

var corFavorita = 'Azul'

switch (corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu');
    break; // quebra caso seja true
  case 'Amarelo':
    console.log('Olhe para o sol');
    break
  case 'Vermelho':
    console.log('Olhe para as rosas');
    break
  case 'Verde':
    console.log('Olhe para a floresta');
    break
  default:
    console.log('Feche os olhos')
}


// EXERCÍCIOS

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
let ageLet = 22;
let ageJaque = 31;

if (ageLet > ageJaque) {
  console.log('Leticia é mais velha que Jaqueline')
} else if (ageLet == ageJaque) {
  console.log('As duas tem a mesma idade')
} else {
  console.log('Leticia é a mais nova')
}



// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2); 
  // retorna 3 (o último 5 - 2, pois 5 - ' ' não é falsy, sai 5)
   // se fosse 5 - 's', me retornaria NaN
  console.log(expressao)

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; // truthy
var idade = 28; // truthy
var possuiDoutorado = false; // falsy
var empregoFuturo; // falsy (undefined)
var dinheiroNaConta = 0; // falsy

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log('Brasil tem mais habitantes')
} else {
  console.log('China tem mais habitantes')
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) { // falso pois 'Gato' não é idêntico a 'gato'
  console.log('Verdadeiro'); 
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) { // 5
  console.log('Gato' && 'Cão'); // irá imprimir 'Cão'
} else {
  console.log('Falso');
}