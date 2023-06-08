import initScrollSuave from './modules/scroll-suave.js'
import initAnimacaoScroll from './modules/scroll-animacao.js'
import initAccordion from './modules/accordion.js';
import initTabNav from './modules/tab-nav.js' // poderia ser import init e chamaríamos init() ali em baixo
import initModal from './modules/modal.js'
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';


initScrollSuave();
initAnimacaoScroll();
initAccordion();
initTabNav();
initModal();
initTooltip();
initDropdownMenu();

// named exports -> quando você for exportar mais de uma função de um arquivo, não usaremos o default e o import será por chaves, no import acima poderiamos escolher qualquer nome pro import (usamos o nome da função mas poderia ser outro), nesse caso de mais de um arquivo deve ser exatamente o nome das funções

// import { testando, teste2 } from './modules/teste.js' // -> nome da função é testando;
// import { testando as novoNome } from './modules/teste.js' // -> nome da função é testando -> se eu quiser mudar o nome, ai chamo: novoNome();
// import * as teste from './modules/teste.js' // -> importa tudo (todas as funções exportadas) como teste de teste.js

// o ideal é exportar só um pois indica que o módulo é específico e fica mais organizado














