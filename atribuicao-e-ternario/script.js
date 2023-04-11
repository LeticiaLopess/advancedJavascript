// Operadores de Atribuição - podem funcionar como formas abreviadas

var x = 5;
var y = 10;
x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y (9765625)


var numero = 20;
var numero2 = 10;

numero /= numero2;

console.log(numero)



// Operador Ternário - condição ? true : false -> usamos quando queremos atribuir um valor a uma variável dependendo de alguma condição, por exemplo

var idade = 20;
var naoPossuiDiabetes = true;

var podeBeber;

podeBeber = (idade >= 18 && naoPossuiDiabetes) ? 'Permitido' : 'Não permitido';

console.log(podeBeber)


// Outra forma de escrever if/else - não é necessário abrir e fechar as chaves {} quando retornamos apenas UMA linha de código

var possuiFaculdade = true;
if(possuiFaculdade) console.log('Possui faculdade');
else console.log('Não possui faculdade')

// ou, melhor:

if(possuiFaculdade) 
  console.log('Possui faculdade');
else 
  console.log('Não possui faculdade');




// EXERCÍCIOS

// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500

console.log(scroll)

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;


darCredito = (possuiCarro && possuiCasa) ? true : false;

console.log(darCredito)