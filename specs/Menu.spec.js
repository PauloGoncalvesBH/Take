// Menu.spec.js
// Paulo Gonçalves

'use strict'

const Menu = require('../page_objects/Menu.po.js');

describe('(Menu) Teste da página de menu', () => {
	const menu = new Menu();

	beforeEach(() => {
		// @Arrange
		menu.Visita();
	});

	it('Teste da opção de "Receitas"', () => {
		// @Arrange
		menu.AbrirMenu();

		// @Act
		menu.AbrirReceitas();

		// @Assert
		const tituloPagina = browser.getTitle();

		expect(tituloPagina).not.toBe('www.erronapagina.com.br');
		/*
		Não consigo realizar um assert melhor do que o acima, pois não tenho informações de
		título esperado ou qualquer outro item.
		*/
	});

});
