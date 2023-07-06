// SCROLL SUAVE PARA LINKS INTERNOS - esse scroll suave não funciona além de firefox e chrome, mais pra frente faremos uma função nativa
// ao invés de você clicar no link interno e ele pular, de forma dura, pro local da tela que nos leva esse link interno, faremos um scroll suave

// export default function initScrollSuave() {
//   const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]'); // links que começam com #

//   function scrollToSection(event) {
//     event.preventDefault();
//     const href = event.currentTarget.getAttribute('href');
//     const section = document.querySelector(href); // href é igual ao id das section 
//     section.scrollIntoView({
//       behavior: 'smooth',
//       block: 'start',
//     });

//     // forma alternativa
//     // const topo = section.offsetTop;
//     // window.scrollTo(0,topo);
//     // window.scrollTo({
//     //   top: topo,
//     //   behavior: 'smooth',
//     // });
//   }

//   linksInternos.forEach((link) => {
//     link.addEventListener('click', scrollToSection);
//   });
//   // a relação que temos com href do link e do elemento, é o id do elemento, deve ser o mesmo do href #idDoElemento
//   // o .scrollIntoView() está relacionado ao elemento em si
// }





export default class ScrollSuave {
  constructor(links, options) { // or this.links = links
    this.linksInternos = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = {
        behavior: 'smooth',
        block: 'start',
      }
    } else {
      this.options = options
    }

    this.scrollToSection = this.scrollToSection.bind(this)
  }
  
  scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href); 
    section.scrollIntoView(this.options);
  }

  addLinkEvent() {
    this.linksInternos.forEach((link) => {
      link.addEventListener('click',this.scrollToSection); 
      // todo this que eu usar dentro de scrollToSection fará referência a 'link', por isso não funcionou de primeira
      // pra consertar esse bug acima, chamamos this.scrollToSection dentro de uma arrow function, pois ai a arrow function vai se referir ao elemento anterior a ela e colocamos o parâmetro event, sendo que, assim a gente perde a referência da função e se quisermos remover o addEventListener não vai dar... então faremos de outra forma
      // pra consertar de uma forma melhor, referenciamos a função no constructor e utilizamos o .bind(this), e ai, não precisamos colocar uma arrow function
    });
  }

  init() {
    if (this.linksInternos.length) {
      this.addLinkEvent()
    }
    return this; // se eu não retornar this, retornará undefined quando eu der o init  
  }

}

// se fizermos um método dentro da classe que não usa nada do construtor, devemos usar static antes do nome do método
