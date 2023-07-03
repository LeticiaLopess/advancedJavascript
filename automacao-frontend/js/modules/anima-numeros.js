export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll('[data-numero]');
    console.log(numeros)
  
      numeros.forEach(numero => {
        const total = +numero.innerText; // o + transforma pra número
  
        const incremento = Math.floor(total / 100); // Math.floor() arredonda os números
        
        let start = 0;
        const timer = setInterval(() => {
          start += incremento
  
          numero.innerText = start;
  
          if (start > total) {
            numero.innerText = total
            clearInterval(timer)
          }
        }, 25 * Math.random()) // com o random() sempre vai ser de uma forma diferente, um completa primeiro, depois o outro...
        console.log(total)
      })
  }

  let observer;
  
  // vamos observar a seção e somente quando ela tiver com a classe ativo a contagem vai iniciar, se não, quando carregarmos a tela essa contagem já terá sido feita quando chegarmos nela
  function handleMutation(mutation) { // é tipo o event, vai retornar um array-like [MutationRecord] que observa a mutação de atributo, nesse caso, o único que muda é o class, ai lá diz o que mudou em attributeName etc
    if (mutation[0].target.classList.contains('ativo')) {
      observer.disconnect(); // viu que está ativo, para de observar e então anima os números apenas uma vez
      animaNumeros();
    }
  }
  
  observer = new MutationObserver(handleMutation); // recebe o argumento callback, o callback é a função que vai ser ativada toda vez que mudar
  
  const observerTarget = document.querySelector('.numeros');
 
  
  // agora vamos dizer ao observer o que ele tem que observar:
  observer.observe(observerTarget, {attributes: true}); // attributes true pois vamos observar os atributos desse target  
}





