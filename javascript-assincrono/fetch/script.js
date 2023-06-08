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
  document.querySelector('h1').innerText = titulo.innerText;
  console.log(div);
})










