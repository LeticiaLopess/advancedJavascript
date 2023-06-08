export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = 'data-outside';

  if(element.hasAttribute(outside)) {
    events.forEach(userEvent => {
      html.addEventListener(userEvent, handleOutsideClick);
    })
    html.addEventListener('click', handleOutsideClick);
    element.setAttribute(outside, '');
  }
  
  function handleOutsideClick(event) {
    if(!element.contains(event.target)) { // veja que pega elementos de fora do dropdown, o que eu não quero. Ai eu preciso ver se esse elemento contém o evento de target, se sim...
      element.removeAttribute(outside);
      events.forEach(userEvent => {
        html.removeEventListener(userEvent, handleOutsideClick);
      })
      // html.removeEventListener('click', handleOutsideClick); // ficam vários eventos repetidos no event listeners do console, é necessário tirar para bom desempenho
      callback();
    } 
    
  }
}