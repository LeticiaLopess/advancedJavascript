// // retornam objetos sem a necessidade de usarmos a palavra chave 'new'; basicamente a mesma função de constructor functions

// function createButton(text) {
//   return {
//     text: text,
//   }
// }

// function createButton(text) {

//   const obj = {
//     text: text,
//   }

//   return {
//     obj
//   }

// }

// function createButton(text) {

//   return {
//     createElement: function() {

//     }
//   }
  
// }

// function createButton(text) {
//   function element() {
//     const buttonElement = document.createElement('button');
//     buttonElement.innerText = text;
//     return buttonElement;
//   }

//   return {
//     text, // retornando o parâmetro (se a chave for igual a valor podemos colocar uma vez só assim)
//     element // método
//   }
// }

// const btnBlue = createButton('Comprar');
// console.log(btnBlue.text)


// // vantagem de podermos criar variáveis privadas as quais a pessoa não terá acesso (não colocamos no return)

// function criarPessoa(nome, sobrenome) {
//   const nomeCompleto = `${nome} ${sobrenome}`;

//   function andar() {
//     return `${nomeCompleto} andou`;
//   }
//   function nadar() {
//     return `${nomeCompleto} nadou`;
//   }
//   return {
//     nome,
//     sobrenome,
//     andar,
//     nadar,
//   }
// }

// const designer = criarPessoa('André', 'Rafael');

// // Object.freeze() impede a modificação de métodos e propriedades por reescrição

// 'use strict';

// function criarPessoa(nome, sobrenome) {
//   const nomeCompleto = `${nome} ${sobrenome}`;
//   function andar() {
//     return `${nomeCompleto} andou`;
//   }
//   return Object.freeze({
//     nome,
//     sobrenome,
//     andar,
//   });
// }

// const designerr = criarPessoa('André', 'Rafael');


// // constructor function sem precisar referenciar o new

// function Pessoa(nome) {
//   if (!(this instanceof Pessoa)) // ou (!new.target) target é Pessoa | this é window | se this não é uma instancia de Pessoa
//     return new Pessoa(nome); // já retorno a criação do objeto com new normal, e ai quando eu chamar não preciso botar
//   this.nome = nome;
// }

// Pessoa.prototype.andar = function() {
//   return `${this.nome} andou`;
// }

// const designerrr = Pessoa('André'); 




// ESTAMOS FAZENDO AQUI TIPO UMA BIBLIOTECA JQUERY :D

function $$(selectedElements) {

  const elements = document.querySelectorAll(selectedElements);

  function hide() {
    elements.forEach(element => {
      element.style.display = 'none';
    })
    return $$(selectedElements); // esconde mas continuo tendo acesso aos elementos do return
  }

  function show() {
    elements.forEach(element => {
      element.style.display = 'initial';
    });
    return $$(selectedElements); // ou this
  }

  function on(onEvent, callback) {
    elements.forEach(element => {
      element.addEventListener(onEvent, callback);
    });
    return this;
  }

  function addClass(className) {
    elements.forEach(element => {
      element.classList.add(className)
    })
    return this;
  }

  return {
    elements,
    hide,
    show,
    on,
    addClass,
  }
}


const btns = $$('button').elements;
console.log(btns.elements)
console.log(btns.hide())

function handleClick(event) {
  console.log(event.target)
}

btns.on('click', handleClick);

btns.addClass('active')





















