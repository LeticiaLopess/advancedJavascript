// const img = document.querySelector('img');

// img.addEventListener('click', () => {
//   console.log('Clicou')
// })

// // or

// img.addEventListener('click', function() {
//   console.log('Clicou');
// })


// //É boa prática separar a função de callback do addEventListener, 
// //ou seja, declarar uma função ao invés de passar diretamente 
// //uma função anônima:

// function callback(event) { // event, mas muita gente utiliza somente o "e": retorna um objeto que tem várias propriedades e métodos depois de realizar o evento da função
//   // console.log(event.currentTarget) // this - retorna o elemento
//   // console.log(event.target) // exatamente onde foi clicado
//   // console.log(event.type) // tipo de evento
// }

// img.addEventListener('click', callback); // 🚀
// img.addEventListener('click', callback()); // undefined

// // currentTarget - item que eu adicionei evento


// const animaisLista = document.querySelector('.animais');

// // animaisLista.addEventListener('click', callbackLista)

// console.log(animaisLista)



// const linkExterno = document.querySelector('a[href="http"]');

// function handleLinkExterno(event) { // evito que vá para o site da origamid
//   event.preventDefault(); // acontece o evento, mas evita o padrão, agora retorna um objeto e tal
//   console.log('clicou')
//   console.log(this.getAttribute('href'));
//   console.log(event.currentTarget); // currentTarget = this
// }

// // linkExterno.addEventListener('click', handleLinkExterno);



// const h1 = document.querySelector('h1');

// function handleEvent(event) {
//   console.log(event.type, event)
// }

// // h1.addEventListener('click', handleEvent); // clique
// // h1.addEventListener('mouseenter', handleEvent); // 'quando o mouse tiver por cima'
// // window.addEventListener('scroll', handleEvent); // ao scrollar
// // window.addEventListener('resize', handleEvent); // quando o document view é redimensionado, diminuir ou aumentar o tamanho da tela
// // window.addEventListener('keydown', handleEvent); // quando uma tecla é pressionada

// // mousemove - a cada movimento do mouse, chama a função

// // keyboard - podemos adicionar atalhos para facilitar a navegação do site 

// function handleKeyboard(event) {
//   console.log(event.key) // mostra a tecla que foi clicada
//   if(event.key === 'f') {
//     document.body.classList.toggle('fullscreen');
//   } else if(event.key === 'a') {
//     document.body.classList.toggle('vermelho')
//   }
// }

// window.addEventListener('keydown', callback)


// // o método addEventListener é adicionado à um único elemento, então é necessário um loop entre elementos de uma lista, para adicionarmos à cada um deles.

// const imgs = document.querySelectorAll('img');

// function handleImg(event) {
//   console.log(event.currentTarget.getAttribute('src'));
// }

// imgs.forEach((img) => {
//   img.addEventListener('click', handleImg)
// })


// // Quando o usuário clicar nos links internos do site,
// // adicione a classe ativo ao item clicado e remova dos
// // demais itens caso eles possuam a mesma. Previna
// // o comportamento padrão desses links

// const linksInternos = document.querySelectorAll('a[href^="#"]');

// function handleLink(event) {
//   event.preventDefault();
//   linksInternos.forEach((link) => { // remove de todos os links a classe, depois adiciona somente no que clicou, e fica nesse loop toda vez que clicar
//     link.classList.remove('ativo');
//   });
//   event.currentTarget.classList.add('ativo');

// }

// linksInternos.forEach((link) => { // pula para a parte do link clicado, por isso usaremos o preventDefault
//   link.addEventListener('click', handleLink);
// })


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
 function handleElemento(event) {
    event.currentTarget.remove();
 }

// const todosElementos = document.querySelectorAll('body *'); // => todos os itens dentro de body
// console.log(todosElementos)

todosElementos.forEach((elemento) => {
  elemento.addEventListener('click', handleElemento);
})

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
function handleClickT(event) {
  console.log(event.key)
  if(event.key === 't') {
    document.documentElement.classList.toggle('textomaior'); // documentElement = html
  }
}

window.addEventListener('keydown', handleClickT);



