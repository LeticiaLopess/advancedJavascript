// os padrões devem ser colocados entre //, geralmente vamos utilizá-las nos métodos .replace() e .split()

const padraoRegexp = /a/

const texto = 'JavaScript';
const fraseNova = frase.replace(padraoRegexp, 'b') // pega o primeiro 'a' e substitui por 'b'

console.log(fraseNova)

[/\./gi]

/[A-z]/g // - não pega as letras com acentos, olhe a tabela unicode no google

let regex = /[^.]/g // ^ dentro do [] é negação, ali eu seleciono tudo menos o .    :)