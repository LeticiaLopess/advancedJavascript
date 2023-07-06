// export default function initTooltip() {
//   const tooltips = document.querySelectorAll('[data-tooltip');

//   /* para eu chamar a tooltipBox aqui em baixo e funcionar, no caso, no addEventListener eu posso passar a função de callback como um objeto, mas, esse objeto vai ter que ter um método handleEvent, se ele tiver esse método ele vai ativar a ação */ 
  
//   const onMouseMove = {
//     handleEvent(event) {
//     /* mostrando a tooltip de acordo com a posição do mouse */
//     this.tooltipBox.style.top = `${event.pageY + 20}px`; // quando a tooltip aparece, ok, apareceu mas se você mover o mouse tem momentos que a tooltip vai ficar piscando, isso porque aparece uma caixa embaixo dela, assim, tivemos que somar esses 20 pra que essa caixa não apareça embaixo
//     this.tooltipBox.style.left = `${event.pageX + 20}px`;
//     },
//   }

//   const onMouseLeave = {
//     tooltipBox: '',
//     element: '',
//     handleEvent(event) {
//       this.tooltipBox.remove();
//       this.removeEventListener('mouseleave', onMouseLeave); // esse listener fica ativo, dá pra ver pelo inspecionar, assim, é bom tirá-lo dessa forma e otimizamos o código
//     },
//   };
  
//   function criarTooltipBox(element) {
//     const tooltipBox = document.createElement('div');
//     const text = element.getAttribute('aria-label');
//     tooltipBox.classList.add('tooltip');
//     tooltipBox.innerText = text;
//     document.body.appendChild(tooltipBox);
//     console.log(tooltipBox);
//     return tooltipBox;
//   }

//   function onMouseOver() {
//     const tooltipBox = criarTooltipBox(this);
//     onMouseMove.tooltipBox = tooltipBox;
//     this.addEventListener('mousemove', onMouseMove);
  
//     onMouseLeave.tooltipBox = tooltipBox;
//     onMouseLeave.element = this;
//     this.addEventListener('mouseleave', onMouseLeave);
    
//   }

//   tooltips.forEach((item) => {
//     item.addEventListener('mouseover', onMouseOver);
//   });
  
// }

export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);

    this.onMouseLeave = this.onMouseLeave.bind(this)
    this.onMouseMove = this.onMouseMove.bind(this)
    this.onMouseOver = this.onMouseOver.bind(this)
  }
  
  /* para eu chamar a tooltipBox aqui em baixo e funcionar, no caso, no addEventListener eu posso passar a função de callback como um objeto, mas, esse objeto vai ter que ter um método handleEvent, se ele tiver esse método ele vai ativar a ação */ 
    
  // move a tooltip com base em seus estilos de acordo com a posição do mouse
  onMouseMove(event) { /* mostrando a tooltip de acordo com a posição do mouse */
  this.tooltipBox.style.top = `${event.pageY + 20}px`; // quando a tooltip aparece, ok, apareceu mas se você mover o mouse tem momentos que a tooltip vai ficar piscando, isso porque aparece uma caixa embaixo dela, assim, tivemos que somar esses 20 pra que essa caixa não apareça embaixo
  
    if (event.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${event.pageX - 195}px`;
    } else {
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    }

  }

// remove a tooltip e os eventos de mousemove e mouseleave
  onMouseLeave({ currentTarget }) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener('mouseleave', this.onMouseLeave); // esse listener fica ativo, dá pra ver pelo inspecionar, assim, é bom tirá-lo dessa forma e otimizamos o código
    currentTarget.removeEventListener('mouseleave', this.onMouseMove); 
  };
  
  // cria a tooltip box e coloca no body
  criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  // cria a tooltip e adiciona os eventos de mousemove e mouseleave ao target
  onMouseOver({ currentTarget }) { // destructuring o event
    // cria a tooltip box e coloca em uma propriedade
    this.criarTooltipBox(currentTarget);
    currentTarget.addEventListener('mousemove', this.onMouseMove);
    currentTarget.addEventListener('mouseleave', this.onMouseLeave);
  }

  // adiciona os eventos de mouseover a cada tooltip
  addTooltipsEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener('mouseover', this.onMouseOver);
    });
  }

  init() {
    if (this.tooltips.length) {
      this.addTooltipsEvent();
    }
    return this;
  }
}
