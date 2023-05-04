const carro = {
  marca: 'Marca',
  preco: 0,
}


// novo objeto mas com as mesmas características do objeto anterior, então posso igualar e acessar as mesmas propriedades ao invés de criar mais um objeto igual. 
const honda = carro; 
honda.marca = 'Honda';
honda.preco = 2000;
// Porém, o problema é que estaremos modificando o objeto anterior, reescrevendo os valores, e para isso existe as constructor functions <3


function Carro(marcaAtribuida, precoAtribuido) { // pascal case -> toda vez que criarmos funções contrutoras [responsáveis por construir novos objetos sempre que chamamos as mesmas] o nome da função deve ser em maiúsculo e devemos referenciar suas variáveis com o this.
  console.log(this)
  this.marca = marcaAtribuida;
  this.preco = precoAtribuido;
}

const ferrari = new Carro(); // aqui sim, você está criando um NOVO OBJETO BASEADO NAS MESMAS PROPRIEDADES DA FUNÇÃO CONSTRUTORA.
ferrari.marca = 'Ferrari';
ferrari.preco = 20000000;
ferrari.teste = 'oi';
ferrari.andar = function() { 
  console.log('andou')
}

const mercedes = new Carro() 
mercedes.marca = 'Mercedes';
mercedes.preco = 10000000;

// ou por parâmetro

const haas = new Carro ('Haas', 30000)






