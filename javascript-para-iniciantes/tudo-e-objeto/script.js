var nome = 'André';
// no console, você vai ver que é um objeto colocando nome. e já vai aparecer muitos métodos e propriedades

var nomeMinusculo = nome.toLowerCase();


var altura = 1.8;

altura.toString(); // '1.8'
altura.toFixed(); // '2' - arredonda o número (pra + e -)

// funções também possui propriedades e métodos, portanto, é um objeto

function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado.toString(); // fica toda entre aspas = string
//"function areaQuadrado(lado) { 
//  return lado * lado;
//}"

areaQuadrado.length; // 1

// no console: addEventListener.length // 2 -> são 2 argumentos que eu posso passar nela

// no console: Document -> objeto, document -> retorna o documento html

var btn = document.querySelector('.btn')


// EXERCÍCIOS

// nomeie 3 propriedades ou métodos de strings

// propriedades
nome.length // quantidade de caracteres

// métodos
var array = [1, 2, 3, 'foo'];
nome.toLowerCase() // deixa tudo minúsculo
nome.indexOf('foo') // utilizado para encontrar um valor dentro de uma string ou array, caso o valor não seja encontrado, ele retorna -1
                    // retorna o índice da primeira ocorrência de uma substring em uma string. Por exemplo, "Olá mundo".indexOf("mundo") retornará 4, já que a substring "mundo" começa no índice 4 da string

// concat(): Concatena duas ou mais strings
// indexOf(): Retorna o índice da primeira ocorrência de uma substring na string
// lastIndexOf(): Retorna o índice da última ocorrência de uma substring na string
// slice(): Retorna uma parte da string, definida pelos índices de início e fim
// substring(): Retorna uma parte da string, definida pelos índices de início e fim, sem incluir o caractere no índice final
// replace(): Substitui uma substring por outra
// trim(): Remove espaços em branco do início e fim da string
// toLowerCase(): Converte a string para letras minúsculas
// toUpperCase(): Converte a string para letras maiúsculas
// split(): Divide a string em um array de substrings, com base em um separador especificado



// nomeie 5 propriedades ou métodos de elementos do DOM

// Propriedades:

// innerHtml
// outerHtml
// id: pega o id
// nodeName: Retorna o nome do nó do elemento (tag HTML)
// nodeType: Retorna o tipo de nó do elemento (1 para elemento, 2 para atributo, 3 para texto, etc.)
// parentNode: Retorna o nó pai do elemento
// childNodes: Retorna uma NodeList contendo os nós filhos do elemento
// firstChild: Retorna o primeiro nó filho do elemento
// lastChild: Retorna o último nó filho do elemento
// classList: Retorna uma lista dos nomes de classe do elemento
// style: Retorna um objeto CSSStyleDeclaration contendo as propriedades de estilo do elemento


// Métodos:

// getAttribute('data-value'): Retorna o valor de um atributo do elemento 
// setAttribute('data-value'): Define o valor de um atributo do elemento
// removeAttribute(): Remove um atributo do elemento
// appendChild(): Adiciona um nó filho ao final da lista de filhos do elemento
// removeChild(): Remove um nó filho do elemento
// replaceChild(): Substitui um nó filho por outro nó
// cloneNode(): Cria uma cópia do elemento
// addEventListener(): Adiciona um evento ao elemento / atribui uma função a um evento ('evento', function() {})
// removeEventListener(): Remove um evento do elemento
// querySelector(): Retorna o primeiro elemento que corresponde a um seletor CSS especificado
// querySelectorAll(): Retorna uma NodeList contendo todos os elementos que correspondem a um seletor CSS especificado


// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

// no site abaixo explica o passo a passo em como fazer com que ao clicar em um botão copiemos o texto para o clipboard.
// https://clipboardjs.com/


// coment: CTRL + "k" + "c"