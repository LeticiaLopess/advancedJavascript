class Veiculo {
  constructor(rodas, combustivel) {
    this.rodas = rodas;
    this.combustivel = combustivel;
  }
  acelerar() {
    console.log('Acelerou');
  }
}

class Moto extends Veiculo {
  constructor(rodas, combustivel, capacete) { // pra usar o construtor numa subclasse, precisamos chamar o super e ele recebe como parâmetro as propriedades que estão na classe pai
    super(rodas, combustivel)
    this.capacete = capacete;
  }
  acelerar() {
    super.acelerar(); // aqui chama o método acelerar pai e também vai chamar esse próprio, vai mostrar os dois
    console.log('Acelerou rápido')
  }
  empinar() {
    console.log('Moto empinou com ' + this.rodas + ' rodas');
  }
}

const honda = new Moto(2, 'Gasolina', true);
console.log(honda)
console.log(honda.acelerou()) // vai retornar um undefined só porque eu não tenho nenhum return lá
console.log(honda.empinar()) // Moto empinou com 2 rodas

const civic = new Veiculo(4) // não terá empinar, só terá em moto
console.log(civic)

console.log(honda.acelerar()) // vai mostrar primeiro o método da class Moto, mas não some com o método de Veiculo lá no prototype dele









