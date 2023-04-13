// Já que em objetos não conseguimos guardar mais de um valor em uma variável, nós temos o array

// console.log(videoGames[2]); // retornará o último elemento [lembre-se que inicia a contagem no índice 0]

/* videoGames.pop(); */ // Remove o último item e retorna esse último item
/* videoGames.push('3DS'); */ // Adiciona ao final do array
// videoGames.length; // 3

// var ultimoItem = videoGames.pop();



// LOOP FOR

// faz algo repetidamente

// evita isso:
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)

// e otimiza pra isso:
for (let numero = 0; numero < 10; numero++) { // início, condição, incremento
  console.log(numero)
}


// LOOP WHILE

var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
// Retorna de 0 a 9 no console


var videoGames = ['Switch', 'PS4', 'XBOX'];

for(var item = 0; item < 4; item++) {
  console.log(videoGames[item]) // mostra o array
  if (videoGames[item] === 'PS4') {
    break; // o loop para caso encontremos a palavra break
  }
}
videoGames[item] // só mostra dessa forma aqui fora se usarmos a var, se usarmos let dá erro
videoGames[0]; // motrará o primeiro elemento


videoGames.forEach(function(item) { // esse item vira, dinamicamente, o valor desse array
  console.log(item)
})

var fruits = ['banana', 'pera', 'maçã', 'uva'];

fruits.forEach(function(fruta, index, array){ // chamando o index como 2 parâmetro e o 3 passa o array inteiro (independente do nome)
  console.log(fruta, index, array)
})




// EXERCÍCIOS


// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var copaDoMundo = [1959, 1962, 1970, 1994, 2002];


// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

for(var i = 0; i < copaDoMundo.length; i++) { // se for <=, retorna um com undefined
  console.log(`O Brasil ganhou a copa de ${copaDoMundo[i]}`);
}

    // ou

copaDoMundo.forEach(function(copa) {
  console.log(`O Brasil ganhou a copa de ${copa}`)
})


// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for(let i = 0; i < frutas.length; i++) {
  console.log(frutas[i])
  if (frutas[i] == 'Pera' ) {
    break;
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

let watermelon = frutas.pop() // retorna o último, porém deleta do array
let watermelon2 = frutas[4] // a primeira opção é a melhor para casos em que há muitos índices
let melhorForma = frutas[frutas.length - 1] // vai dar 4 (índice 4) pois tenho 5 de comprimento
console.log(watermelon)



















