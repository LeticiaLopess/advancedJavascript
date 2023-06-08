function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  if(tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('ativo');
      });
      tabContent[index].classList.add('ativo');
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const activeClass = 'ativo';
  
  if(accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}
initAccordion();

// SCROLL SUAVE PARA LINKS INTERNOS - esse scroll suave não funciona além de firefox e chrome, mais pra frente faremos uma função nativa
// ao invés de você clicar no link interno e ele pular, de forma dura, pro local da tela que nos leva esse link interno, faremos um scroll suave

function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]'); // links que começam com #

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href); // href é igual ao id das section 
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    // forma alternativa
    // const topo = section.offsetTop;
    // window.scrollTo(0,topo);
    // window.scrollTo({
    //   top: topo,
    //   behavior: 'smooth',
    // });
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
  // a relação que temos com href do link e do elemento, é o id do elemento, deve ser o mesmo do href #idDoElemento
  // o .scrollIntoView() está relacionado ao elemento em si
}
initScrollSuave();
















// ANIMAÇÃO AO SCROLL

function initAnimacaoScroll() {
  const sections = document.querySelectorAll('.js-scroll')

  if(sections.length) {
    const windowSessenta = window.innerHeight * 0.6;
  
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top; // se não vai ficar um espação grandão branco na tela
        const isSectionVisible = sectionTop - windowSessenta
        if(isSectionVisible < 0) { // se passar do topo
          section.classList.add('ativo')
        } else {
          section.classList.remove('ativo')
        }
      })
    }
    
    animaScroll() // ativa pelo menos uma vez, se não os itens só vão aparecer quando eu der o primeiro scroll
    
    window.addEventListener('scroll', animaScroll)  
  }
}

initAnimacaoScroll();



















