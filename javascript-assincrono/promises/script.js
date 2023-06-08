const promise = new Promise((resolve, reject) => {
  let condicao = true;

  if(!condicao) {

    setTimeout(() => {
      resolve({nome: 'Andre', idade: 28}); // e se eu colocar variáveis dinâmicas dentro dos resultados dessas variáveis? 
    }, 1000) // depois de resolver vai pro then
    
  } else {
    reject(Error('Um erro ocorreu na promise!'))
  }
  
});

console.log(promise)

// o then só vai ser usado quando a promise for resolvida, fica olhando

promise.then(resolucao => console.log(resolucao)) // o primeiro argumento é o valor retornado do resolve

// as promises só fazem sentido se o código executado dentro da mesma é apenas código assíncrono
// then() retorna outra promise, podemos colocar then() atrás de then() e fazer um encadeamento de promessas e ai o valor do primeiro argumento de cada then será o valor retornado do then anterior.
// o valor da promise se eu tiver só console.log no retorno não vai ser nada, pq o console.log não retorna nada
// .then(resolucao => 'Teste') /*return 'Teste'*/ 

const retorno = promise   
.then(resolucao => {
  console.log(resolucao)
  resolucao.profissao = 'Designer'; 
  return resolucao
}) 
.then(resolucao => {
  console.log(resolucao)
}, rejeitada => { // catch() serve pra quando a promise for rejeitada, posso usar ele normal ou passar como um segundo argumento do then 
  console.log(rejeitada);
})
.finally(() => { // finally() é sempre executado mesmo com o resolve() ou com o reject(), não recebe nada por parâmetro, apenas executa alguma coisa pra indicar a finalização
  console.log('Acabou')
}) 

console.log(retorno);

// promise.all() // consigo passar um array com diversas promessas, só é resolvido quando todas forem resolvidas ou uma rejeitada

const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Usuário Logado')
  }, 1000)
})

const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Dados Carregados')
  }, 1500)
})

const carregouTudo = Promise.all([login, dados]); // retornará os resultados das promises

carregouTudo.then((resolucao => {
  console.log(resolucao) // ["Usuário Logado", "Dados Carregados"]
}))

console.log(carregouTudo)

// promise.race() é similar ao all() mas ele vai percorrer as promisses tipo um array e a primeira que for resolvida ou rejeitada ele já vai retornar, traz a resposta da primeira resolução
// atente-se ao tempo do setTimeout pois quem for executado primeiro será retornado no .race()

const carregouPrimeiro = Promise.race([login, dados]); // retornará os resultados das promises

carregouPrimeiro.then((resolucao => {
  console.log(resolucao) // Usuário Logado
}))
