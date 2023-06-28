export default class ValidarCpf {
  constructor(element) {
    this.element = element
  }
  limpar(cpf) {
    return cpf.replace(/\D/g, '');
  }
  construir(cpf) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
  }
  formatar(cpf) {
    const cpfLimpo = this.limpar(cpf)
    return this.construir(cpfLimpo);
  }
  validar(cpf) {
    const matchCpf = cpf.match(/(?:\d{3}[-.\s]?){3}\d{2}/g)
    // console.log(cpf)
    // console.log(matchCpf)
    return (matchCpf && matchCpf[0] === cpf) // se matchCpf for verdadeiro e o primeiro elemento (que é o cpf digitado for igual a cpf)
  }
  validarNaMudanca(cpfElement) {
    if(this.validar(cpfElement.value)) {
      cpfElement.value = this.formatar(cpfElement.value)
      cpfElement.classList.add('valido')
      cpfElement.classList.remove('erro')
      cpfElement.nextElementSibling.classList.remove('ativar')
    } else {
      cpfElement.classList.add('erro')
      cpfElement.classList.remove('valido')
      cpfElement.nextElementSibling.classList.add('ativar')
    }

  }
  adicionarEvento() {
    this.element.addEventListener('change', () => { // se fosse function() a referência do this seria outra, seria uma referência ao this.element inteiro (tag), e daria erro até mesmo na chamada dos outros métodos
      this.validarNaMudanca(this.element)
    })
  }
  adicionarErroSpan() {
    const erroElement = document.createElement('span');
    erroElement.classList.add('erro-text');
    erroElement.innerText = 'CPF Inválido'
    this.element.parentElement.insertBefore(erroElement, this.element.nextElementSibling); // 1 parâmetro) o elemento em si, 2 parâmetro) elemento que ficará logo depois do elemento em si
  }
  iniciar() { // inicia a classe
    this.adicionarEvento();
    this.adicionarErroSpan();
    return this; // se eu não tivesse o this aqui não retornaria a classe e daria undefined
  }
}

console.log('teste')