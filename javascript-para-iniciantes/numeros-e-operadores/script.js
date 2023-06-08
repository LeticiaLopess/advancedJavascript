// numeros não são envolvidos por aspas, se não se torna string

var idade = 22;

console.log(idade);

// EXPONENCIAL

var exp1 = 2e2, // número 2 seguido de 2 números 0 = 200
    exp2 = 3e8, // 300000000
    exp3 = 2e-2 // 0.02
console.log(exp1, exp2, exp3)

var pi = 3.14; // ponto para decimal

// precisão de até 15 números, depois disso ele arredonda


var testeNaN = '100' / 2;
console.log(isNaN(testeNaN));

var x = 5;
console.log(x++); // ainda aparece o 5, pois o incremento é feito dps, no console.log abaixo já aparece o novo valor
console.log(x); // aqui não mostra 5, mostra 6, visto que o valor foi incrementado anteriormente
console.log(++x); // aqui sim já retorna o valor incrementado pois o incremento é feito primeiro
// esse mesmo comportamento serve para o decremento


// lembrando que, nesse caso, não poderíamos usar const pois o valor da const é constante

// colocando o + ou o - na frente tenta passar esse valor pra number

var frase = 'Teste';
+frase; // NaN
-frase; // NaN

var idade = '28';
// or
var idade = +'28' // transforma em number direto

console.log(+idade) // converte pra number


// EXERCÍCIOS

// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20; // 35
console.log(total)

// Crie duas expressões que retornem NaN
var retornaNan1 = 'cem' / 2
var retornaNan2 = +'Jesus é a verdade'
console.log(retornaNan1, retornaNan2)

// Somar a string '200' com o número 50 e retornar 250
var word = '200'
var fifty = 50
console.log(+word + fifty)

// Incremente o número 5 e retorne o seu valor incrementado
var y = 5
y++
console.log(y)

// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero // '80kg'
var pesoPorDois = peso / 2 + unidade; // NaN (Not a Number)
// para dividir o peso por 2, posso alterar a variável peso e deixar apenas numero e adicionar a variável unidade no final da divisão pesoPorDois

// ou

var numero = +'80' / 2; // transformo o 80 em number com o + na frente e divido por 2 direto
var unidade = 'kg';
var peso = numero + unidade  // '80kg'

console.log(peso)

