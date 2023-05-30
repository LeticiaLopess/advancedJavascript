// function espera(texto) {
//   console.log(
//     texto
//   );
// }
// setTimeout(espera, 2, 'Passou 1s')


// setTimeout(() => { // entra na fila se não passarmos valor
//   console.log('Após 0s?')
// })

// const btn = document.querySelector('button');
// btn.addEventListener('click', handleClick);

// function handleClick(event) {
//   setTimeout(function() {
//     this.classList.add('active');
//   }, 1000)
// }
// // Erro pois window.classList não existe


// const btnn = document.querySelector('button');
// btnn.addEventListener('click', handleClick);

// // this agora é btnn.
// function handleClick(event) {
//   setTimeout(() => {
//     this.classList.add('active');
//   }, 1000)
// }

// function loop(texto) {
//   console.log(texto);
// }
// setInterval(loop, 1000, 'Passou 1s');

// // loop a cada segundo
// let i = 0;
// setInterval(() => {
//   console.log(i++);
// }, 1000);

// const contarAte10 = setInterval(callback, 1000);

// let y = 0;
// function callback() {
//   console.log(y++);
//   if (y > 10) {
//     clearInterval(contarAte10);
//   }
// }


// Mude a cor da tela para azul e depois para vermelho a cada 2s.
function mudarClasse() {
  document.body.classList.toggle('active');
}

//setInterval(mudarClasse, 2000);

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).

const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const tempo = document.querySelector('.tempo')

iniciar.addEventListener('click', iniciarTempo)
pausar.addEventListener('click', pausarTempo)
pausar.addEventListener('dblclick', resetarTempo) // clicando 2x no pausar, reseta

let i = 0;
let timer;

function iniciarTempo() {
  timer = setInterval(() => {
    tempo.innerText = i++;
  }, 100);
  iniciar.setAttribute('disabled', '');
}

function pausarTempo() {
  clearInterval(timer);
  iniciar.removeAttribute('disabled');
}

function resetarTempo() {
  tempo.innerText = 0;
  i = 0;
}
