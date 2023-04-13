// classList - retorna uma lista com as classes do elemento. permite adicionar, remover e verificar se contém

// className retorna uma classe
// classList retorna lista de classes

// const menu = document.querySelector('.menu');

// console.log(menu.classList);

// menu.classList.add('ativo');
// menu.classList.remove('azul');
// menu.classList.toggle('teste'); // adiciona
// menu.classList.toggle('teste'); // remove kk

// if(menu.classList.contains('azul')) {
//   menu.classList.add('possui-azul')
// } else {
//   menu.classList.add('nao-possui-azul')
// }

// console.log(menu.className) // retorna as classes em uma string, não em uma lista, diferente de classList

// // podemos escrever acima dessa string

// menu.className = 'ativo teste azul'

// // ah, como eu posso apenas acrescentar mais classes sem tirar as que já estavam? usando o add, ou:

// menu.className = menu.className + ' ' + 'vermelho' // para dar espaço entre as classes

// também podemos concatenar strings, que seria a mesma coisa quando fazemos com os números:

// menu.className += ' vermelho'


// menu.className; // string
// menu.classList; // lista de classes
// menu.classList.add('ativo');
// menu.classList.add('ativo', 'mobile'); // duas classes
// menu.classList.remove('ativo');
// menu.classList.toggle('ativo'); // adiciona/remove a classe - se tiver, remove, se não tiver, adiciona
// menu.classList.contains('ativo'); // true ou false - se contém ou não
// menu.classList.replace('ativo', 'inativo'); // substitui ativo por inativo


// const animais = document.querySelector('.animais'); // NamedNodeMap é um array-like

// animais.attributes // retorna todos os atributos
// console.log(animais.attributes[0]) // retorna o primeiro atributo -> class="grid-section animais"
// console.log(animais.attributes.id)


// // como pegar um data-value?
// console.log(animais.attributes['data-texto']) // por padrão, ele não recebe atributos que possuem hífen, nesse caso temos que fazer assim como fazemos pra selecionar o index do elemento de um array, passe o nome como strig entre colchetes


// // apesar de pegarmos valores dessa forma também temos o getAttribute:

// const img = document.querySelector('img');

// console.log(img.getAttribute('alt'))

// const srcImg = img.getAttribute('alt');

// img.setAttribute('alt', 'É uma raposa') // atualiza o alt

// const possuiAlt = img.hasAttribute('alt'); // true


// READONLY 

// nem todas propriedades você pode atribuir um valor, são apenas de leitura/retorno

// const animais = document.querySelector('.animais');

// animais.className; // string com o nome das classes
// animais.className = 'azul'; // substitui completamente a string
// animais.className += ' vermelho'; // adiciona vermelho à string

// animais.attributes = 'class="ativo"'; // não funciona, read-only




// EXERCICIOS

// Adicione a classe ativo a todos os itens do menu

const itensMenu = document.querySelectorAll('.menu a')

console.log(itensMenu)

itensMenu.forEach(element => {
  element.classList.add('ativo')
});



// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

itensMenu.forEach(element => {
  element.classList.remove('ativo')
})

itensMenu[0].classList.add('ativo')



// Verifique se as imagens possuem o atributo alt

const imagens = document.querySelectorAll('img')
console.log(imagens)

imagens.forEach(element => {
  const hasAttr = element.hasAttribute('alt')
  console.log(element, hasAttr)
})



// Modifique o href do link externo no menu

const linkExterno = document.querySelector('a[href^="http"]') // links que começam com http [externos]
linkExterno.setAttribute('href', 'JesusIsKing')

