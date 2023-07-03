export default function initFuncionamento() {
  const funcionamento = document.querySelector('[data-semana]');
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number) // dataset pois é um data-dado, estamos pegando os valores que estão dentro de data-semana
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number) // dataset pois é um data-dado, estamos pegando os valores que estão dentro de data-semana
  
  // retorno de array, transformamos o retorno que foi em string em um array
  // aí pelo fato de retornar os números no array como strings, usamos o map, o macete é: se você só colocar 'Number' como parâmetro, já será retornado um array transformado pra Number
  console.log(diasSemana)

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay(); // 3
  const horarioAgora = dataAgora.getHours(); // 15

  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1 // quando eu comparo se a loja está aberta e é um dia que está aberto, o retorno será o index desse dia no array, se não estiver aberto, o dia não está no array e ai me retorna um valor -1 (negação)

  const horarioAberto = horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]

  if(semanaAberto && horarioAberto) { // horário semana tem que ser só o 18 pois se fosse 18:30 contaria como aberto
    funcionamento.classList.add('aberto');
  }

  console.log(horarioAberto);
}
