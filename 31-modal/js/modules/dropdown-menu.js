export default function initDropdownMenu() {

}

const dropdownMenus = document.querySelectorAll('[data-dropdown]');

dropdownMenus.forEach(menu => {
  // menu.addEventListener('touchstart', handleClick); /* ao invés de clique, para mobile é melhor touchstart */ 
  // menu.addEventListener('click', handleClick); /* ao invés de clique, para mobile é melhor touchstart */ 
  ['touchstart', 'click'].forEach(userEvent => {
    menu.addEventListener(userEvent, handleClick) // macete para fazer com que mais de um evento aconteça 
  })
})

function handleClick(event) {
  event.preventDefault();
  this.classList.toggle('active')
}