// API - interface de aplicação que interagimos por código
// Fetch é a nova forma de fazer Ajax na web
// Fetch me retorna uma promise, nem vamos usar muito as promisses padrão em si, mas usaremos muito o fetch
// Retorna sempre um objeto response


const doc = fetch('https://viacep.com.br/ws/01001000/json/')
console.log(doc) // veja que é uma promise

doc.then(r => r.json()) // quando o retorno é uma linha, não precisa de return
.then((body) => {
  console.log(body.bairro)
  console.log(body.cep)
  console.log(body.logradouro)
  const conteudo = document.querySelector('.conteudo');
  conteudo.innerText = body.logradouro
  conteudo.innerText += ' ' + body.localidade
})

// json - JavaScipt Object Notation

const css = fetch('./style.css');

css.then( r => r.text())
.then(body => {
  const conteudo = document.querySelector('.conteudo');
  const style = document.createElement('style');
  style.innerHTML = body;
  conteudo.appendChild(style) // colocamos a tag style dentro do body e ai o estilo foi aplicado

  // criamos a tag style e colocamos esse texto dentro da tag style.

})


const div = document.createElement('div');

const sobre = fetch('./sobre.html');
sobre.then(r => r.text())
.then(body => {
  console.log(body);
  div.innerHTML = body; // inseri todo o HTML em uma div
  const titulo = div.querySelector('h1');
  //document.querySelector('h1').innerText = titulo.innerText;
  console.log(div);
})



const imagem = fetch('./imagem.png'); // lembrando que eu sempre tenho que transformar esse retorno de fetch

imagem.then(r => r.blob())
.then(body => {
  const blobUrl = URL.createObjectURL(body); // cria uma URL unica na qual terá a imagem
  const imagemDom = document.querySelector('img');
  imagemDom.src = blobUrl;
  console.log(body)
})


const clonando = fetch('https://viacep.com.br/ws/01001000/json/')

clonando.then( r => {
  const r2 = r.clone;
  r.text().then(text => { // quando eu transformo o body em text, se você tentar mudar ele de novo depois para json(), você não consegue pois ele já foi modificado, por isso usamos o clone
    console.log(text)
  }) 
  // r2.json().then(json => { // conseguimos transformar o body em duas coisas agora
  //   console.log(json)
  // })
})
.then(body => {
  console.log(body)
})


const headers = fetch('https://viacep.com.br/ws/01001000/json/');
headers.then(r => {
  console.log(r.type) // 
  if (r.type == basic) {
    console.log('Estou fazendo uma requisição no meu próprio servidor')
  } else if (r.type == cors) {
    console.log('Requisição fora, para outro servidor, mas que é permitida')
  } else {
    console.log('Dará um erro caso não seja permitido acessar tal requisição')
  }
})



// EXERCÍCIOS

// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const inputCep = document.getElementById('cep');
const btnCep = document.getElementById('btnCep');
const resultadoCep = document.querySelector('.resultadoCep');

inputCep.addEventListener('keyup', handleClick);

function handleClick(event) {
  event.preventDefault();
  const cep = inputCep.value;
  buscaCep(cep);
  console.log(event)
}

function buscaCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
  .then(response => response.text()) 
  .then(body => {
    resultadoCep.innerText = body;
  })
}



// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s
const btcDisplay = document.querySelector('.btc')

function fetchBtc() {
  fetch('https://blockchain.info/ticker')
  .then(r => r.json())
  .then(btcJson => {
    btcDisplay.innerText = ('R$ ' + btcJson.BRL.buy).replace('.', ',');
  })
}

setInterval(fetchBtc, 1000 * 30); // vai chamar essa função a cada 30s, vai fazer uma requisição no site dos caras a cada 30s, tem que ver com a API se isso é permitido

// normalmente acessos gratuitos limitam a quantidade de requisições

fetchBtc();



// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
const btnProxima = document.querySelector('.proxima');
const paragrafoPiada = document.querySelector('.piada');

function puxarPiada() {
  fetch('https://api.chucknorris.io/jokes/random')
  .then(r => r.json())
  .then(piada => {
    paragrafoPiada.innerText = piada.value;
  })
}

btnProxima.addEventListener('click', puxarPiada);








