// relembrando o que é uma constructor function: são responsáveis pela criação de objetos:

// function Button(text, background) {
//   console.log(this) // Button {} com: background: blue e text: comprar pois já foi modificado ali em baixo
//   console.log(typeof this)
//   this.text = text;
//   this.background = background;
// }

// Button.prototype.element = function() { // element é o nome do método | adicionando métodos ao protótipo de Button
//   const buttonElement = document.createElement('button');
//   buttonElement.innerText = this.text;
//   buttonElement.style.background = this.background;
//   return buttonElement;
// }

// const blueButton = new Button('Comprar', 'blue');

// console.log(blueButton.element())


// class faz a mesma coisa que uma função construtora, mas com sintaxe diferente e mais sintática


class Button {

  constructor(text, background, color) { 
    this.text = text;
    this.background = background;
    this.color = color;
    return this;
  }
  element() {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = this.text;
    buttonElement.style.background = this.background;
    buttonElement.style.color = this.color;
    return buttonElement
  }
  appendTo(target) {
    const targetElement = document.querySelector(target);
    targetElement.appendChild(this.element())
    return targetElement
  }
  static blueButton(text) {
    return new Button(text, 'blue', 'white')
  }
  
}

const botaoAzul = Button.blueButton('Clique')

botaoAzul.appendTo('body')









// const blueButton = new Button('Comprar', 'blue', 'white');

// console.log(blueButton)
// console.log(blueButton.appendTo('body'))


// class Button {
//   constructor(options) {
//     this.options;
//   }
//   static createButton(text, background) { // não aparecerá no prototype, pois foi criado de forma static
//     const buttonElement = document.createElement('button');
//     buttonElement.innerText = text;
//     buttonElement.style.background = background;
//     return buttonElement;
//   }
// }

// const optionsBlue = {
//   backgroundColor: 'blue',
//   text: 'Comprar',
//   color: 'white',
// }

// const blueButton = new Button (optionsBlue);

// const blueButtonStatic = Button.createButton('Clique', 'blue');

// console.log(blueButtonStatic);

// or

// const blueButton = new Button ({
//   backgroundColor: 'blue',
//   text: 'Comprar',
//   color: 'white',
// })






































