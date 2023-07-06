export default class AnimaNumeros {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(observerTarget)
    this.observerClass = observerClass
    this.handleMutation = this.handleMutation.bind(this)
  }

  // recebe um elemento do dom com número e ai pegamos o texto e mudamos pra number com o '+'
  static incrementaNumero(numero) { // static pois não precisa de algo do construtor
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
  }

  // ativa incrementar número para cada número selecionado do dom
  animaNumeros() {
    this.numeros.forEach(numero => {
      this.constructor.incrementaNumero(numero) // chamamos o construtor porque a função é static
    })
  }

  // vamos observar a seção e somente quando ela tiver com a classe ativo a contagem vai iniciar, se não, quando carregarmos a tela essa contagem já terá sido feita quando chegarmos nela
  handleMutation(mutation) { // é tipo o event, vai retornar um array-like [MutationRecord] que observa a mutação de atributo, nesse caso, o único que muda é o class, ai lá diz o que mudou em attributeName etc
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect(); // viu que está ativo, para de observar e então anima os números apenas uma vez
      this.animaNumeros();
    }
  }

  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation); // recebe o argumento callback, o callback é a função que vai ser ativada toda vez que mudar
    this.observer.observe(this.observerTarget, {attributes: true}); // attributes true pois vamos observar os atributos desse target    
  }

  init() {
    if (this.numeros.length && this.observerTarget) {
      this.addMutationObserver()
    }

    return this;
  }

}





