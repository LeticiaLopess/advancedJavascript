// export default function initModal() {
  
//   const botaoAbrir = document.querySelector('[data-modal="abrir"]');
//   const botaoFechar = document.querySelector('[data-modal="fechar"]');
//   const containerModal = document.querySelector('[data-modal="container"]')
    
//   function toggleModal(event) {
//     event.preventDefault();
//     containerModal.classList.toggle('ativo')
//     console.log(event)
//   }
   
//   function cliqueForaModal(event) { // pro preventDefault funcionar aqui eu tenho que passar o event como parâmetro na função que eu to chamando dentro
//     console.log(this)
//     if (event.target === this) { // preciso fazer isso pra fechar somente se eu clicar do lado de fora do modal que vai fechá-lo, se não fecha clicando dentro dele também
//       toggleModal(event);
//     }
//   }

//   if (botaoAbrir && botaoFechar && containerModal) {
//     botaoAbrir.addEventListener('click', toggleModal);
//     botaoFechar.addEventListener('click', toggleModal);
//     containerModal.addEventListener('click', cliqueForaModal)
//   }
  
// }


export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal)

    // bind this ao callback para fazer referência ao objeto da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  toggleModal(event) {
    this.containerModal.classList.toggle('ativo')
    console.log(event)
  }
   
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  // fecha o modal ao clicar do lado de fora
  cliqueForaModal(event) { // pro preventDefault funcionar aqui eu tenho que passar o event como parâmetro na função que eu to chamando dentro
    if (event.target === this.containerModal) { // preciso fazer isso pra fechar somente se eu clicar do lado de fora do modal que vai fechá-lo, se não fecha clicando dentro dele também
      this.toggleModal(event);
    }
  }

  // adiciona os eventos aos elementos do modal
  addModalEvent() {
    this.botaoAbrir.addEventListener('click', this.eventToggleModal);
    this.botaoFechar.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.cliqueForaModal)
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEvent()
    }
    return this;
  }
}


