function espera(texto) {
  console.log(texto);
}
setTimeout(espera, 2, 'Passou 1s')


setTimeout(() => { // entra na fila se não passarmos valor
  console.log('Após 0s?')
})

const btn = document.querySelector('button');
btn.addEventListener('click', handleClick);

function handleClick(event) {
  setTimeout(function() {
    this.classList.add('active');
  }, 1000)
}
// Erro pois window.classList não existe


const btnn = document.querySelector('button');
btnn.addEventListener('click', handleClick);

// this agora é btnn.
function handleClick(event) {
  setTimeout(() => {
    this.classList.add('active');
  }, 1000)
}

function loop(texto) {
  console.log(texto);
}
setInterval(loop, 1000, 'Passou 1s');

// loop a cada segundo
let i = 0;
setInterval(() => {
  console.log(i++);
}, 1000);

const contarAte10 = setInterval(callback, 1000);

let y = 0;
function callback() {
  console.log(y++);
  if (y > 10) {
    clearInterval(contarAte10);
  }
}
