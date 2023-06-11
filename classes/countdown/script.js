import Countdown from "./countdown.js"; // tem que colocar o .js, o VSCode completa pra você mas sem colocar o .js, se não colcoar dá erro

const diasParaONatal = new Countdown('24 December 2023 23:59:59 GMT-0300');
const diasParaOAnoNovo = new Countdown('31 December 2023 23:59:59 GMT-0300');

console.log(diasParaONatal._futureDate.getDay());
console.log(diasParaONatal.days) // faltam esses dias para o natal
console.log(diasParaONatal.hours) // faltam essas horas para o natal
console.log(diasParaONatal.total) // {days: x}

setInterval(() => {
  console.log(diasParaOAnoNovo.total)
}, 1000)