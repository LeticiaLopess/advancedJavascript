import ValidarCpf from "./validar-cpf.js";

const cpf = document.querySelector('#cpf')
const validarCpf = new ValidarCpf(cpf);

console.log(validarCpf.formatar('1115.21544.44'))