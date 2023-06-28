const cpfsList = document.querySelectorAll('.cpf li')

const arrayCpfs = [...cpfsList] // desestruturando assim é a mesma coisa que fazer Array.from

// posso passar direto no parâmetro
const  elementsInnerText = ([...elements]) => {
  //const arrayElements = Array.from(elements);
  return elements.map(element => element.innerText);
}


const limparCPF = (cpf) => {
  // return cpf.replace(/[ .-]/g, ''); // substitui espaço, ponto e traço
  return cpf.replace(/\D/g, ''); // limpa tudo que não for dígito (número), melhor
}


const construirCPF = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4') // referências dos 4 grupos de captura criados
}


const formatarCPFS = (cpfsList) => {
  return cpfsList.map(limparCPF).map(construirCPF) // retornamos a chamada da função dentro do parâmetro e já funciona, não precisamos fazer todo aquele negócio de loop
}


const substituiCPFS = (cpfsElements) => {
  const cpfs = elementsInnerText(cpfsElements)
  const cpfsFormatados = formatarCPFS(cpfs)
  console.log(cpfsFormatados)

  cpfsElements.forEach((element, index) => {
    element.innerText = cpfsFormatados[index];
  });

}

substituiCPFS(cpfsList)

console.log(limparCPF('121.121.222-83'))
console.log(construirCPF('121.121.222-83'))


console.log(elementsInnerText(cpfsList))