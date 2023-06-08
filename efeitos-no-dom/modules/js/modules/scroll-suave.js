// SCROLL SUAVE PARA LINKS INTERNOS - esse scroll suave não funciona além de firefox e chrome, mais pra frente faremos uma função nativa
// ao invés de você clicar no link interno e ele pular, de forma dura, pro local da tela que nos leva esse link interno, faremos um scroll suave

export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]'); // links que começam com #

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