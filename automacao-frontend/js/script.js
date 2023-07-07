import ScrollSuave from './modules/scroll-suave.js'
import ScrollAnima from './modules/scroll-anima.js'
import Accordion from './modules/accordion.js';
import TabNav from './modules/tab-nav.js' // poderia ser import init e chamaríamos init() ali em baixo
import Modal from './modules/modal.js'
import Tooltip from './modules/tooltip.js';
import DropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import fetchAnimais from './modules/fetch-animais.js';
import fetchBitcoin from './modules/fetch-bitcoin.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]')
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

const dropdownMenu = new DropdownMenu('[data-dropdown]')
dropdownMenu.init()

fetchAnimais("../../animaisapi.json", ".numeros-grid");
fetchBitcoin('https://blockchain.info/ticker', '.btc-preco')

initMenuMobile();
initFuncionamento();


// named exports -> quando você for exportar mais de uma função de um arquivo, não usaremos o default e o import será por chaves, no import acima poderiamos escolher qualquer nome pro import (usamos o nome da função mas poderia ser outro), nesse caso de mais de um arquivo deve ser exatamente o nome das funções

// import { testando, teste2 } from './modules/teste.js' // -> nome da função é testando;
// import { testando as novoNome } from './modules/teste.js' // -> nome da função é testando -> se eu quiser mudar o nome, ai chamo: novoNome();
// import * as teste from './modules/teste.js' // -> importa tudo (todas as funções exportadas) como teste de teste.js

// o ideal é exportar só um pois indica que o módulo é específico e fica mais organizado














