// async - assíncrona
// await - aguardam

// pausa no await, espera a resposta da promise, arquiva na variável e continua;

// mas sempre a mesma história: a gente não quer o Response, queremos converter o body dele com algum método que aprendemos do protpótipo

async function puxarDados() {
  const responseDados = await fetch('./dados.json');
  const jsonDados = await responseDados.json();

  document.body.innerText = jsonDados.nome;
}

puxarDados();


async function getDados() {
  try {
    const responseDados = await fetch('./dados.json');
    const jsonDados = await responseDados.json();
  
    document.body.innerText = jsonDados.nome;
  } catch (erro) {
    console.log(erro)
    console.log('Um erro ocorreu');
  }
}

// tenta executar tudo o que deve executar e pega (catch) caso ocorra algum erro durante o processo
// qualquer erro o catch pega, erro de sintaxe, escrita...

getDados();


async function initFetchSimultaneously() {

  const promiseDados = await fetch('./dados.json');
  const responseClientes = await fetch('./clientes.json');

  const jsonDados = await (await promiseDados).json(); // primeiro o promiseDados vai ser resolvido e ai ele será convertido na Resposta que tem o .json()
  const jsonClientes = await (await responseClientes).json();
  console.log(jsonDados)
  console.log(jsonClientes)

}
initFetchSimultaneously();


// o await fala o seguinte: espera o resultado dessa promise ocorrer, à frente do await, tem que ser uma promise


async function asyncPromise() {
  await new Promise(resolve => {
    setTimeout(() => {
      console.log('Depois de 1s');
      resolve();
    }, 1000);
  })
  console.log('Acabou');
}
asyncPromise();

