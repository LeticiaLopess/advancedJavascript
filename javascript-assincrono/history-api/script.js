// // se eu segurar a setinha de voltar do browser eu consigo ver o histórico e clicar el algo para voltar;

// console.log(window.history);
// // console.log(window.history.back()); // volta tudo
// // console.log(window.history.forward()); // vai pra frente tudo

// window.history.pushState(null, null, 'teste.html') // podemos alterar o histórico; null pois é restrito, o segundo null é o título da página tbm não é muito suportado por isso usamos null, o terceiro é a url;

// // o pushState sozinho não faz muito sentido, usaremos com o fetch;


// // popstate fica de olho caso o usuario clique em voltar ou ir pra frente, quando clicamos em um deles esse evento é executado;
// // só funciona se eu mesma setar uma URL com pushState, como fiz ali em cima;

// window.addEventListener('popstate', () => {
//   console.log('Teste');
// })

const links = document.querySelectorAll('a');

function handleClick(event) {
  event.preventDefault();
  fetchPage(event.target.href);
  window.history.pushState(null, null, event.target.href); // aqui a url muda;

  // agora o problema é quando eu clico em voltar: eu clico em voltar, volta a url mas o conteúdo permanece o mesmo: ai teríamos que usar o popState, quando clicar, faremos um outro fetch da página;

}

async function fetchPage(url) {
  document.querySelector('.content').innerHTML = 'Carrecando';
  const pageResponse = await fetch(url);
  const pageText = await pageResponse.text();
  replaceContent(pageText)
}

function replaceContent(newText) {
  const newHtml = document.createElement('div');
  newHtml.innerHTML = newText;

  const oldContent = document.querySelector('.content');
  const newContent = newHtml.querySelector('.content');

  oldContent.innerHTML = newContent.innerHTML;
  document.title = newHtml.querySelector('title').innerText;

  // fizemos a mudança do conteúdo e do título mas não mudou a url, o que é um problema, vamos resolver isso na função handleClick

  console.log(newHtml);
}

window.addEventListener('popstate', () => {
  console.log(window.location.href);
  fetchPage(window.location.href)
})

links.forEach(link => {
  link.addEventListener('click', handleClick);
})


