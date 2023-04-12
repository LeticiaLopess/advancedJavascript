const animaisSection = document.getElementById('animais');
const contatoSection = document.getElementById('contato');

console.log(animaisSection)

// retorna null caso não exista
const naoExiste = document.getElementById('teste');


// RETORNOS DE LISTA QUE PODEM SER ACESSADOS COMO SE FOSSE ARRAY

// Seleciona pela classe, retorna uma HTMLCollection -> retorna todos que tiverem tais classes
const gridSection = document.getElementsByClassName('grid-section');
const contato = document.getElementsByClassName('grid-section contato'); // retorna o elemento que tiver essas duas classes

// Retorna o primeiro elemento, como se fosse um array
console.log(gridSection[0]);
console.log(gridSection.length);

// Seleciona todas as UL's, retorna uma HTMLCollection
const ul = document.getElementsByTagName('ul');


// SELETOR GERAL ÚNICO

const animais = document.querySelector('.animais');
const contact = document.querySelector('#contato');
const ultimoItem = document.querySelector('.animais-lista li:last-child');
const linkCSS = document.querySelector('[href^="https://"]');
const primeiraUl = document.querySelector('ul'); // se tiver mais de uma ul, pega a primeira

// Busca dentro do Ul apenas
const navItem = primeiraUl.querySelector('li');


const linkInterno = document.querySelector('[href^="#"]'); // se eu não colocar o ^ ele vai selecionar apenas o que tiver com tal nome, o ^ significa "começa com", então: "começa com #"
// querySelector seleciona apenas o primeiro, um, ele não retorna uma lista
console.log(linkInterno);

const animaisImg = document.querySelectorAll('.animais img') // retorna uma lista, todos os img's que estão dentro do elemento de classe animais
// essa nodeLista possui alguns metodos e propriedades que o HTMLCollection não possui
console.log(animaisImg[2])


// HTMLCollection: https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCollection
// NodeList: https://developer.mozilla.org/pt-BR/docs/Web/API/NodeList


const gridSectionHTML = document.getElementsByClassName('grid-section')
const gridSectionNode = document.querySelectorAll('.grid-section')

primeiraUl.classList.add('grid-section'); // apos adicionar mais um elemento com essa classe, a HTMLColletion adiciona no console.log automaticamente

console.log(gridSectionHTML) // atualiza automaticamente, ao vivo
console.log(gridSectionNode) // estático

// preste atenção pois HTMLCollection e NodeList me retornam em posições diferentes por conta dessa diferença

// ARRAY-LIKE

// parecem array mas não são. Por exemplo, o forEach() só existe em NodeList

gridSectionNode.forEach(function(item, index) {
  console.log(item);
  console.log(index);
})

const arrayGrid = Array.from(gridSectionHTML) // transforma qualquer array-like em array de fato
console.log(arrayGrid)
arrayGrid.pop() // retorna o último elemento do array e exclui o mesmo
console.log(arrayGrid)

// AGORA EU POSSO USAR O FOREACH

arrayGrid.forEach(function(item) {
  console.log(item);
})

// retorna lista HTMLCollection: getElementByClassName
// retorna NodeList: querySelectorAll



// Retorne no console todas as imagens do site
const imagens = document.querySelectorAll('img');
console.log(imagens)

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagens2 = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagens2)

// Selecione todos os links internos (onde o href começa com #)
const links = document.querySelectorAll('[href^="#"]')
console.log(links)

// Selecione o primeiro h2 dentro de .animais-descricao
//const firstH2 = document.querySelector('.animais-descricao h2')
const animals = document.querySelector('.animais-descricao')
const firstH2 = animals.querySelector('h2')

console.log(firstH2)

// Selecione o último p do site
const paragrafos = document.querySelectorAll('p')
console.log(paragrafos[paragrafos.length - 1]) // último parágrafo do site











