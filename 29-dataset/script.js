// const div = document.querySelector('div');

// console.log(Object.prototype.toString.call(div))
// console.log(HTMLHeadingElement.prototype)

// se você analisar a construção do protótipo da linha 4, tem protótipo dentro de protótipo

// console.log(div.dataset)

// dataset é uma propriedade HTMLElement, é um objeto do tipo DOMStringMap, temos a chave / valor com todos os atributos do elemento html que começarem com data-


// const divs = document.querySelector('[data-cor]')
// console.log(divs)

//divs.dataset.height = 1000;

// delete div.dataset.width;

// div.dataset.totalHeight = '2000'



// EXERCÍCIOS

// Adicione um atributo data-anime="show-down" e
// data-anime="show-right" a todos as section's
// com descricão dos animais.

<section data-anime="show-right">
  <h2>Esquilo</h2>
  <p>As raposas são animais mamíferos e onívoros pertencentes à família Canidae. São vulpídeos de porte médio, caracterizados
    por um focinho comprido e uma cauda longa e peluda.</p>
  <p>Também apresentam como particularidade suas pupilas ovais, semelhantes às pupilas verticais dos felídeos.</p>
  <p>De cerca de 40 espécies reconhecidas como raposas, somente 12 pertencem ao gênero Vulpes das "raposas verdadeiras", do
    qual a raposa vermelha é a mais comum.</p>
  <p>Também apresentam como particularidade suas pupilas ovais, semelhantes às pupilas verticais dos felídeos.</p>
  <p>De cerca de 40 espécies reconhecidas como raposas, somente 12 pertencem ao gênero Vulpes das "raposas verdadeiras", do
    qual a raposa vermelha é a mais comum.</p>
  <p>Também apresentam como particularidade suas pupilas ovais, semelhantes às pupilas verticais dos felídeos.</p>
  </section>
  <section data-anime="show-down">
  <h2>Urso</h2>
  <p>As raposas são animais mamíferos e onívoros pertencentes à família Canidae. São vulpídeos de porte médio, caracterizados
    por um focinho comprido e uma cauda longa e peluda.</p>
  <p>Também apresentam como particularidade suas pupilas ovais, semelhantes às pupilas verticais dos felídeos.</p>
  <p>De cerca de 40 espécies reconhecidas como raposas, somente 12 pertencem ao gênero Vulpes das "raposas verdadeiras", do
    qual a raposa vermelha é a mais comum.</p>
  <p>Também apresentam como particularidade suas pupilas ovais, semelhantes às pupilas verticais dos felídeos.</p>
</section>

        // const divSection = document.querySelector('.animais-descricao')
        // const section = divSection.querySelectorAll('section')

        // section.forEach((item) => {
        //   item.dataset.anime = 'show-down'
        //   item.dataset.anime = 'show-right'
        //   console.log(item)
        // })


// Utilizando estes atributos, adicione a classe
// show-down ou show-right a sua respectiva section
// assim que a mesma aparecer na tela (animacao tab)

// em animacoes.js

function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  if(tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('ativo');
      });
      const direcao = tabContent[index].dataset.anime
      tabContent[index].classList.add('ativo', direcao); // adiciona a classe show-right e show-down
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
initTabNav(); 

// No CSS faça com que show-down anime de cima para baixo
// e show-right continue com a mesma animação da esquerda
// para a direita

// no CSS 

.js-tabcontent section.ativo {
  display: block !important;
}

.js-tabcontent section.ativo.show-right {
  animation: show-right .5s forwards;
}

.js-tabcontent section.ativo[data-anime="show-down"] { /* podemos fazer da forma acima ou desse jeito aqui */
  animation: show-down .5s forwards;
}

@keyframes show-right {
  from {
    opacity: 0;
    transform: translate3d(-30px, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes show-down {
  from {
    opacity: 0;
    transform: translate3d(0, -30px, 0); /* de cima pra baixo */
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

// Substitua todas as classes js- por data atributes.

// em css [no html eu tirei a classe js-tabcontent da div que envolve as sections de animais e substitui pelo data-tab]
.js [data-tab="content"] section {
  display: none;
}

[data-tab="content"] section.ativo {
  display: block !important;
}

[data-tab="content"] section.ativo.show-right {
  animation: show-right .5s forwards;
}

[data-tab="content"] section.ativo[data-anime="show-down"] { /* podemos fazer da forma acima ou desse jeito aqui */
  animation: show-down .5s forwards;
}

    // mudei também a do scroll e menu