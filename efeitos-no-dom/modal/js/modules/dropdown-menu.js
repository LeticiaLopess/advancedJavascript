import outsideClick from "./outside-click.js";

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');

  dropdownMenus.forEach(menu => {
    // menu.addEventListener('touchstart', handleClick); /* ao invés de clique, para mobile é melhor touchstart */ 
    // menu.addEventListener('click', handleClick); /* ao invés de clique, para mobile é melhor touchstart */ 
    ['touchstart', 'click'].forEach(userEvent => { // array - macete para fazer com que mais de um evento aconteça 
      menu.addEventListener(userEvent, handleClick) 
    })
  })
  
  function handleClick(event) {
    event.preventDefault();
    this.classList.add('active');
    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('active')
    });
  }
}




















