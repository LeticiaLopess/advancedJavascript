// HEIGHT E WIDTH -> read Only

// <nav class="menu"> ... ... $0 -> se eu $0 no console, ele vai mostrar esse elemento
// $0.classList

const listaAnimais = document.querySelector('.animais-lista')

console.log(listaAnimais.clientHeight) // retorna height + padding
console.log(listaAnimais.scrollHeight) // retorna height total ignorando o scroll
console.log(listaAnimais.offsetHeight) // retorna height + padding + border


const animaisTop = listaAnimais.offsetTop; // distância entre o elemento e o topo da página
console.log(animaisTop)

const animaisLeft = listaAnimais.offsetLeft // distância do elemento para o canto esquerdo
console.log(animaisLeft)


// getBoundingClientRect() - método que retorna um objeto com valores de distâncias, height, width...

const primeiroh2 = document.querySelector('h2')
const h2left = primeiroh2.offsetLeft

const h2rect = primeiroh2.getBoundingClientRect();
console.log(h2rect)
console.log(h2rect.height)
console.log(h2rect.top)
console.log(h2rect.width)
// etc

if(h2rect.top < 0) {
  console.log('passou do elemento');
}


// WINDOW - p/ pegar tamanho da tela do usuário etc

console.log(
  window.innerWidth, // width da janela
  window.outerWidth, // soma dev tools
  window.innerHeight, // height da janela
  window.outerHeight, // inclui a barra do navegador, não é muito utilizado
  window.pageYOffset, // distância total do scroll horizontal
  window.pageXOffset // distância total do scroll vertical // if(0) -> está no topo
);


// consefrindo se a tela do usuário é menor que 600 [não é muito indicado, usar o matchmedia()]

if(window.innerWidth < 600) [
  console.log('Tela menor que 600px')
]


// matchMedia()

const small = window.matchMedia('(max-width: 600px)') // só vai ocorrer nessa condição

console.log(small)

if(small.matches) {
  console.log('Usuario mobile')
} else {
  console.log('Usuario desktop')
}



// EXERCÍCIOS


// Verifique a distância da primeira imagem em relação ao topo da página
const firstImage = document.querySelector('img')
console.log(firstImage.offsetTop)


// Retorne a soma da largura de todas as imagens

// window.onload = function () {
//   const allImages = document.querySelectorAll('img')

// allImages.forEach(function(item, index, array) { // se eu não setar um valor de largura nas imagens, o JS carrega primeiro e primeiro vem o valor 0, então envolveremos a função com window.onload()
//   console.log(item.offsetWidth)
// })
// }

// or

function somaImagens() {
  const imagens = document.querySelectorAll('img')
  let soma = 0;

  imagens.forEach((imagem) => {
    soma = soma + imagem.offsetWidth
    // soma += item.offsetWidth
  });
  console.log(soma)
}

window.onload = function() {
  somaImagens();
}


// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a')

links.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;

  if(linkWidth > 48 && linkHeight > 48) {
    console.log(link, 'Possui boa acessibilidade')
  } else {
    console.log(link, 'Não possui boa acessibilidade')
  }
});

console.log(links)


// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const browserSmall = window.matchMedia('(max-width: 720px').matches;

if (browserSmall) {
  const menu = document.querySelector('.menu');
  menu.classList.add('menu-mobile')
}


















