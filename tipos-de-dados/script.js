var nome = 'Leticia';
var idade = 22;
var time; // undefined
var time = null; // retorna como objeto [é um bug do JS]

console.log(typeof nome);

var name = 'Leticia';
var lastName = 'Lopes';

console.log(name + lastName) // vai mostrar mas com os nomes tudo junto;
// pra solucionar, ou eu dou um espaço no final de Leticia, ou eu concateno um espaço junto;

var fullName = name + ' ' + lastName

console.log(fullName)

// mesmo que eu concatene um número em uma frase na var, o tipo dessa var seria uma string;

var gols = 1000;
var frase = 'Romário fez ' + gols + ' gols';

console.log(typeof frase) // string

var ano = '2018'; // ano como string e não number, se eu somar com um number, vai concatenar e não somar

// Aspas

'JavaScript é "super" fácil'; // aspas simples fora e duplas dentro, ok
"JavaScript é 'super' fácil"; // asmas duplas fora e simples dentro, whatever
"JavaScript é \"super\" fácil"; // essas aspas tira a funcionalidade das aspas, ela aparece no console dessa forma e não serve apenas pra marcar algo
`JavaScript é "super" fácil"`; // template string
// "JavaScript é "super" fácil"; // Inválido


// template string - posso passar variáveis e outras coisas sem quebrar a string
var gols = 1000;
var frase1 = 'Romário fez ' + gols + ' gols';
var frase2 = `Romário fez ${gols} gols`; // Utilizando Template String


// EXERCISES:

// Declare uma variável contendo uma string
let noun = 'clouds';

// Declare uma variável contendo um número dentro de uma string
let count = '5'; // número sendo string
let sky = `I see ${count} ${noun}` // quando uso template string, não preciso usar o + nem dar espaço [o espaço conta]. Lembrando que é necessário utilizar entre crase, se não, não funciona;
console.log(sky)

// Declare uma variável com a sua idade
let age = 22;

// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
let yourName = 'Leticia';
let familyName = 'Lopes';
let sumName = yourName + ' ' + familyName
console.log(sumName)

// Coloque a seguinte frase em uma variável: It's time
let phrase = "It's time";
// ou
let anotherPhrase = 'It\'s time';
//ou
let otherPhrase = `It's time`
console.log(phrase)
console.log(anotherPhrase)
console.log(otherPhrase)

// Verifique o tipo da variável que contém o seu nome
console.log(typeof yourName)
