// const h1 = document.querySelector('h1')

// console.log(h1.innerHTML) // Animais Fantásticos, não tem children então vem só o texto
// console.log(h1.innerText) // Animais Fantásticos
// console.log(h1.outerHTML) // <h1 class="titulo">Animais Fantásticos</h1> -> veio o elemento todo [aqui inclui o próprio elemento + children]


// const animaisLista = document.querySelector('.animais-lista')

// // console.log(animaisLista.innerHTML) 
// /*
//       <li>
//         <img src="img/imagem1.jpg" alt="Raposa">
//       </li>
//       <li>
//         <img src="img/imagem2.jpg">
//       </li>
//       <li>
//         <img src="img/imagem3.jpg">
//       </li>
//       <li>
//         <img src="img/imagem4.jpg">
//       </li>
//       <li>
//         <img src="img/imagem5.jpg">
//       </li>
//       <li>
//         <img src="img/imagem6.jpg">
//       </li>
// */ 
// //console.log(animaisLista.innerText) // nada
// //console.log(animaisLista.outerHTML) 
// /*
//       <ul class="animais-lista">
//       <li>
//         <img src="img/imagem1.jpg" alt="Raposa">
//       </li>
//       <li>
//         <img src="img/imagem2.jpg">
//       </li>
//       <li>
//         <img src="img/imagem3.jpg">
//       </li>
//       <li>
//         <img src="img/imagem4.jpg">
//       </li>
//       <li>
//         <img src="img/imagem5.jpg">
//       </li>
//       <li>
//         <img src="img/imagem6.jpg">
//       </li>
//     </ul>
// */ 


// // h1.innerHTML = '<p>Novo Título</p>' // insere dentro de h1
// // h1.outerHTML = '<p>Novo Título</p>' // substitui o h1


// // Transversing - navegar pelo DOM utilizando propriedades e métodos, tipo acessar um elemento pai usando uma propriedade

// const lista = document.querySelector('.animais-lista')
// console.log(lista.parentElement.parentElement) // 1) retorna a section dessa lista, 2) retorna o body, 3) retorna o html
// console.log(lista.nextElementSibling) // pega a div, que é o próximo elemento depois da ul dessa lista
// console.log(lista.previousElementSibling) // pega o elemento anterior a essa ul

// console.log(lista.children) // traz um HTMLCollection com os children dessa lista
// console.log(lista.children[0]);
// console.log(lista.children[lista.children.length - 1]); // retorna o último elemento

// lista.querySelectorAll('li') // todas as li's
// lista.querySelector('li:last-child') // retorna o último filho

// // ELEMENT VS NODE
// // ELEMENT - toda tag html é um elemento
// // NODE - pode ser qualquer coisa: um texto, comentário, um espaço

// console.log(lista.childNodes) // retorna todos os elementos NODE em uma NodeList
// console.log(lista.previousSibling) // retorna o elemento node anterior, se for um espaço, retornará só um espaço, etc...

// const mapa = document.querySelector('.mapa')

// // MANIPULANDO ELEMENTOS

// const animais = document.querySelector('.animais')
// const contato = document.querySelector('.contato')
// const titulo = contato.querySelector('.titulo')

// //animais.appendChild(titulo) // move o titulo de contato pra cima da lista
// contato.insertBefore(animais, titulo) // 1) o que quero mover, 2) elemento que eu quero que fique depois do elemento do primeiro parâmetro -> lista depois de titulo
// contato.insertBefore(animais, mapa) // mapa deve ser filho de contato, e, animais será colocado antes de mapa

// contato.removeChild(titulo) // remove o titulo de dentro do contato
// //contato.replaceChild(mapa, titulo) // substitui o mapa por titulo

// // NOVOS ELEMENTOS - criar novos elementos pelo JS com a tag createElement

// const novoh1 = document.createElement('h1')

// novoh1.innerText = 'Novo Título';
// novoh1.classList.add('titulo');

// // mapa.appendChild('novoh1') // aparece logo após o primeiro children de mapa

// console.log(novoh1)


// // CLONAR ELEMENTOS

// // todo elemento selecionado é único. Para criarmos um novo baseado no anterior, precisamos clonar com o cloneNode()

// const cloneTitulo = titulo.cloneNode(true) // esse true significa que os children desse elemento serão clonados também
// const faq = document.querySelector('.faq');

// const cloneH1 = h1.cloneNode(true);

// faq.appendChild(cloneH1);


// Duplique o menu e adicione ele em copy

const menu = document.querySelector('.menu')
const copy = document.querySelector('.copy')
const menuDuplicado = menu.cloneNode(true);

copy.appendChild(menuDuplicado) // menu duplicado aparecerá em copy

// Selecione o primeiro DT da dl de Faq

const faq = document.querySelector('.faq')
const primeiroDt = faq.querySelector('dt')

// Selecione o DD referente ao primeiro DT

const proximoDD = primeiroDt.nextElementSibling;
console.log(proximoDD)

// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector('.animais')

faq.innerHTML = animais.innerHTML; 
// faq.innerHTML = '' // some