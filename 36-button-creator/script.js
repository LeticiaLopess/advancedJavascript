const controles = document.getElementById('controles');
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');

controles.addEventListener('change', handleChange);

const handleStyle = {
  element: btn,
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  height(value) {
    this.element.style.height = value + 'px';
  },
  width(value) {
    this.element.style.width = value + 'px';
  },
  texto(value) {
    this.element.innerText = value;
  },
  color(value) {
    this.element.style.color = value;
  },
  border(value) {
    this.element.style.border = value;
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + 'px';
  },
  fontFamily(value) {
    this.element.style.fontFamily = value;
  },
  fontSize(value) {
    this.element.style.fontSize = value + 'rem';
  },
}

function handleChange(event) {
  const name = event.target.name;
  const value = event.target.value;

  handleStyle[name](value) // () para ativar // é igual a eu fazer handleStyle.height() pra acessar uma propriedade ou método
  saveValues(name, value);
  showCss();
}

function saveValues(name, value) { // salvando valores
  localStorage[name] = value; // = localStorage.nome = 'Andre'; // key + value, se eu clicar naquele proibido no inspecionar eu limpo o cache
}

function setValues() { // setando valores
  const properties = Object.keys(localStorage); // retorna array com todas as chaves
  properties.forEach(property => {
    handleStyle[property](localStorage[property]);
    controles.elements[property].value = localStorage[property];
  })
  showCss();
}

setValues();

function showCss() {
  cssText.innerHTML = '<span>' + btn.style.cssText.split('; ').join(';</span><span>'); // split: corta o array onde tem o '; '  |  join: junta os elementos do array like e retorna uma string
  
  // começa abrindo a span, depois, pra casa elemento splitado ele vai adicionar o ';', fechar o span e depois abrir span, como o primeiro elemento não vai ter a abertura do span, precisamos colocar ali somando

}
