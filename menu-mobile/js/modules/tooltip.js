export default function initTooltip() {

}

const tooltips = document.querySelectorAll('[data-tooltip');

tooltips.forEach((item) => {
  item.addEventListener('mouseover', onMouseOver);
})

function onMouseOver(event) {
  const tooltipBox = criarTooltipBox(this);
  onMouseMove.tooltipBox = tooltipBox;
  this.addEventListener('mousemove', onMouseMove);

  onMouseLeave.tooltipBox = tooltipBox;
  onMouseLeave.element = this;
  this.addEventListener('mouseleave', onMouseLeave);
  
}

/* para eu chamar a tooltipBox aqui em baixo e funcionar, no caso, no addEventListener eu posso passar a função de callback como um objeto, mas, esse objeto vai ter que ter um método handleEvent, se ele tiver esse método ele vai ativar a ação */ 

const onMouseLeave = {
  tooltipBox: '',
  element: '',
  handleEvent(event) {
    this.tooltipBox.remove();
    this.removeEventListener('mouseleave', onMouseLeave); // esse listener fica ativo, dá pra ver pelo inspecionar, assim, é bom tirá-lo dessa forma e otimizamos o código
  }
}

const onMouseMove = {
  handleEvent(event) {
  /* mostrando a tooltip de acordo com a posição do mouse */
  this.tooltipBox.style.top = event.pageY + 20 + 'px'; // quando a tooltip aparece, ok, apareceu mas se você mover o mouse tem momentos que a tooltip vai ficar piscando, isso porque aparece uma caixa embaixo dela, assim, tivemos que somar esses 20 pra que essa caixa não apareça embaixo
  this.tooltipBox.style.left = event.pageX + 20 + 'px';
  }
}

function criarTooltipBox(element) {
  const tooltipBox = document.createElement('div');
  const text = element.getAttribute('aria-label');
  tooltipBox.classList.add('tooltip');
  tooltipBox.innerText = text;
  document.body.appendChild(tooltipBox);
  console.log(tooltipBox);
  return tooltipBox;
}