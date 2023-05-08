console.log(typeof Array.fromakfkjdsj !== "undefined")

if(typeof Array.fromakfkjdsj !== "undefined") {
  console.log('Existe')
} else {
  console.log('Não existe')
}


// Liste 5 objetos nativos
Object
String
Array
Function
Number
Image
Date
Math


// Liste 5 objetos do browser
NodeList
HTMLCollection
Element
window
history
Document


// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox

if(typeof document.webkitHidden !== "undefined") { // tem no chrome e não tem no firefox
  console.log('Existe')
} else {
  console.log('Não existe')
}

if(typeof document.webkitVisibilityState !== "undefined") { // tem no chrome e não tem no firefox
  console.log('Existe')
} else {
  console.log('Não existe')
}