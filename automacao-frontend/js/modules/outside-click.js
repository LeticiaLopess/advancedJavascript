export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = 'data-outside';

  function handleOutsideClick(event) {
    if(!element.contains(event.target)) { // veja que pega elementos de fora do dropdown, o que eu não quero. Ai eu preciso ver se esse elemento contém o evento de target, se sim...
      element.removeAttribute(outside);
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOutsideClick);
      })
      // html.removeEventListener('click', handleOutsideClick); // ficam vários eventos repetidos no event listeners do console, é necessário tirar para bom desempenho
      callback();
    }  
  }

  if(!element.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      setTimeout(() => { // o problema no menu-mobile era que aqui, o bubble ativa instantaneamente o addEventListener e a solução é usar o setTimeout, que é assíncrono, então a fase de bubble ocorre primeiro e não vai ter o addEventListener 
        html.addEventListener(userEvent, handleOutsideClick);
      })
    })
    // html.addEventListener('click', handleOutsideClick);
    element.setAttribute(outside, '');
  }
}
