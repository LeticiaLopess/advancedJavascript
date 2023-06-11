const button = {
  get tamanho() { 
    return this._numero || 100; // se for undefined será 100, 100 será o padrão
    //return 200 // fazendo dessa forma, se eu tentar mudar eu não consigo a não ser que eu tenha o método set
  },
  set tamanho(numero) {
    this._numero = numero * 200;
  }
}

const frutas = {
  lista: [],
  set nova(fruta) {
    this.lista.push(fruta);
  }
}

frutas.nova = 'Banana';
frutas.nova = 'Morango';

console.log(frutas)


class Button {
  constructor (text, color) {
    this.text = text;
    this.color = color;
  }
  get element() {
    const type = this._elementType || 'button'
    const buttonElement = document.createElement(type);
    buttonElement.innerText = this.text;
    buttonElement.style.colot = this.color;
    return buttonElement;
  }
  set element(type) {
    this._elementType = type;
  }
}

const blueButton = new Button('Comprar', 'blue');

console.log(blueButton.element = 'a'); // como temos o set, podemos definir agora
console.log(blueButton.element); // retorna o elemento a, adiciona ao blueButton a propriedade _elementType, a qual teremos acesso
console.log(blueButton._elementType = 'div'); // mudando _elementType direto
console.log(blueButton.element); // retorna o elemento div