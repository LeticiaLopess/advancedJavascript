export default function initModal() {
  
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]')
    
  if(botaoAbrir && botaoFechar && containerModal) {

    function toggleModal(event) {
      event.preventDefault();
      containerModal.classList.toggle('ativo')
      console.log(event)
    }
     
    function cliqueForaModal(event) { // pro preventDefault funcionar aqui eu tenho que passar o event como parâmetro na função que eu to chamando dentro
      console.log(this)
      if(event.target === this) { // preciso fazer isso pra fechar somente se eu clicar do lado de fora do modal que vai fechá-lo, se não fecha clicando dentro dele também
        toggleModal(event);
      }
    }
    
    botaoAbrir.addEventListener('click', toggleModal);
    botaoFechar.addEventListener('click', toggleModal);
    containerModal.addEventListener('click', cliqueForaModal)
  }
  
}



