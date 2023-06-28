import ValidarCpf from "./validar-cpf.js";

const cpf = document.querySelector('#cpf')
const validarCpf = new ValidarCpf(cpf);

console.log(validarCpf.formatar('1115.21544.44'))
console.log(validarCpf.adicionarEvento())

const validadorCpf = new ValidarCpf();
validadorCpf.formatar('111 111 111 22')