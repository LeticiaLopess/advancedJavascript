// Conjunto de variáveis e funções, que são chamadas de propriedades e métodos

var pessoa = {
  nome: 'Leticia',
  idade: 22
}

var quadrado = {
  lados: 4,
  area: function(lado) {
    return lado * lado;
  },
  perimetro: function(lado) {
    console.log(this) // retorna o objeto 'quadrado'
    return lado * this.lados
  }
}

console.log(quadrado.area(5))
console.log(quadrado.perimetro(5))


// outra forma de escrever as funções dentro de objetos é colocando o parênteses após o nome da função, sem o function
// a partir da atualização do ES6:
var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    console.log(this) // retorna o objeto 'quadrado'
    return lado * this.lados
  }
}


// objeto serve para organizar o código em pequenas partes que serão reutilizáveis, ao invés de criar uma variável pra cada eu crio um objeto

Math.PI // 3.14
Math.random() // gera um número aleatório. Se eu não colocar o '()', eu não executo a função, vai chamar o nome dela no console mas não vai executar

// se você colocar Math no console, você vai ver que ele é um objeto com MUITAS propriedades, nesse caso eu estou acessando a "variável" PI e o método random()
// no console: método - cubinho roxo / propriedade: paralelepípedo azul

// ''alguma coisa' seguida de ponto e mais alguma coisa - é um objeto e estamos acessando uma propriedade desse objeto

console.table(quadrado) // organiza o objeto quadrado em uma tabela -> no console <-


// acessamos as propriedades utilizando o ponto e eu posso atribuir essa propriedade dentro de uma outra variável se eu quiser

var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84e',
  metadeHeight() { // a variável height foi criada fora dessa função, se eu não usar o this, dá erro
    return this.height / 2;
  }
}

menu.backgroundColor = '#73b504'; // se eu alterar o valor dessa propriedade (chamando a propriedade/método), agora quando eu armazenar essa propriedade em uma variável ela estará alterada
menu.color = 'black'; // adicionando a propriedade/variável color
var bg = menu.backgroundColor

menu.esconder = function() { // adicionando o método/função esconder
  console.log('Escondi')
}

// todo objeto que criamos, é criado a partir do método/função Object() embutido, que, dentro dele há muitos métodos/propriedades
// dentro desse objeto virá as propriedades/métodos que eu criei + constructor + toString + valueOf...
// .hasOwnProperty('propriedade/método') é um método que verifica se tal propriedade/método foi criada dentro desse objeto (não são consideradas o que vem junto com Object()), retorna boolean
// . length conta a quantidade de caracteres
// no console: 'Andre'.length // 5


// EXERCÍCIOS

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var dadosLet = {
  nome: 'Leticia',
  sobrenome: 'Lopes',
  idade: 22,
  faculdade: 'Análise e Desenvolvimento de Sistemas',
  idiomas: 'Inglês e Português',
  cidade: 'Rio de Janeiro',
  nomeCompleto: function () {
    return `${this.nome} ${this.sobrenome}`
  }
}
// Crie um método no objeto anterior, que mostre o seu nome completo
console.log(dadosLet.nomeCompleto())

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;
console.log(carro.preco)

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: 'Labrador',
  cor: 'Preto',
  idade: 10,
  caracteristicas: 'Inteligente, vivo e obediente, com muita vontade de agradar',
  // verHomem: true,
  latir(pessoa) {
    if (pessoa == 'Homem') {
      return 'Latir'
    } else {
      return 'Nada'
    }
  }
}

// console.log(cachorro.latir(homem)) // 'Latir'



