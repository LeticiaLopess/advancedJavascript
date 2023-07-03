// ANIMAÇÃO AO SCROLL

export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]')
  const windowSessenta = window.innerHeight * 0.6;

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top; // se não vai ficar um espação grandão branco na tela
      const isSectionVisible = sectionTop - windowSessenta
      if(isSectionVisible < 0) { // se passar do topo
        section.classList.add('ativo')
      } else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo')
      }
    })
  }

  if (sections.length) {
    animaScroll() // ativa pelo menos uma vez, se não os itens só vão aparecer quando eu der o primeiro scroll
    window.addEventListener('scroll', animaScroll)  
  }
}

