// Navegação relacionada com uma lista de itens, a primeira lista é normalmente a de navegação, algo em que você vai clicar e ai a outra lista ativar o item
// é sempre uma relação 1 a 1, tem um item pra cada conteúdo dessa lista de conteúdo

/* 
Por exemplo, nesse projeto: temos a lista de animais - cada animal estará 
relacionado com o seu respectivo conteúdo da lista em que há as descrições 
dos mesmos

Ai vai ser tipo: cliquei na raposa, vai adicionar uma classe no texto da raposa,
teremos uma relação entre um e outro
*/
function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li'); // retorna cada li dessa ul
  const tabContent = document.querySelectorAll('.js-tabcontent section') // tem uma section pra cada animal
  
  console.log(tabContent.length) // 0 - por isso
  console.log(tabMenu.length) // 6
  console.log(!!tabMenu.length) // true - lembre que o "!!" antes verifica se é true ou false
  console.log(!!tabMenu.length) // true
  
  if(tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo') // para sempre ter o primeiro elemento com a classe "ativo", ou posso colocar direto no HTML
  
    tabContent[0] // primeira section
    
    function activeTab(index) { // index da tab que eu quero
      tabContent.forEach((section) => {
        section.classList.remove('ativo');
      })
      tabContent[index].classList.add('ativo');
    }
    
    // console.log(activeTab(0))
    
    // (item, index e array)
    tabMenu.forEach((itemMenu, index) => { // index das duas tabelas serão respectivos, devem estar organizadas em ordem certa sempre
      itemMenu.addEventListener('click', () => {
        activeTab(index)
      })
    }) 
  }
}
initTabNav(); // se eu não chamar, não ativa a função


// agora mudaremos o CSS para só apenas quem estiver ativo aparecer

          /*
          .animais-lista li {
            cursor: pointer;
          }

          .js-tabcontent section { // esconde de leitores de tela também ai teríamos que ver outra forma
          display: none;
          }

          .js-tabcontent section.ativo {
            display: block !important;
            animation: show .5s forwards; // o forwards deixará o texto na sua posição final [to] do keyframe show 
          }

          @keyframes show { // animação com CSS 
            from {
              opacity: 0;
              transform: matrix3d();
              transform: translate3d(-30px, 0, 0);
            }
            to {
              opacity: 1;
              transform: translate3d(0,0,0);
            }
          }
          */



// ACORDION LIST

function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt'); // acessando o título dessa lista de perguntas e respostas
  const activeClass = 'ativo';

  if(accordionList.length) { // temos que verificar se existe, se não, dará erro
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);
    
    function activeAccordion() { // ao clicar, adicionar 'ativo' ao próximo elemento da lista
      this.classList.toggle(activeClass); // ao invés do add, colocar toggle para quando clicar duas vezes abrir e fechar
      this.nextElementSibling.classList.toggle(activeClass);
    }
    
    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion)
    })
  }
}
initAccordion();
 











































