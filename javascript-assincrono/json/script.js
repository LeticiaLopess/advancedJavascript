fetch('./dados.json')
.then(r => r.json()) // transformando para JSON aqui
.then(json => {
  console.log(json[0].aula);
  json.forEach(materia => {
    console.log(materia.aula);
    console.log(materia.id);
    console.log(materia.tempo);
  })
})

// Existe o objeto JSON do próprio JavaScript e ele tem dois métodos: JSON.parse() e JSON.stringify()

// se não tivéssemos o .json() que já nos dá um objeto e só tivéssemos o text(), usariamos o parse() para transformá-lo para objeto

fetch('./dados.json')
.then(r => r.text())
.then(jsonText => {
  const jsonFinal = JSON.parse(jsonText);
  console.log(jsonFinal);
})


const configuracoes = { // mesmo que eu coloque aspas simples, serão adicionados aspas duplas na conversão
  player: "Google",
  tempo: 25.5,
  aula: "2.1 JavaScript",
}

// no lovalStorage você pode alocar chave e valor, mas imagina ter várias configurações e ter que colocar cada uma...
// podemos fazer de forma mais fácil: apenas uma chave que receberá  valor de uma string com um objeto

localStorage.config = JSON.stringify(configuracoes)

console.log(localStorage.config)
console.log(JSON.parse(localStorage.config))





















