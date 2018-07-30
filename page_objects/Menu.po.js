// Menu.po.js
// Paulo Gonçalves

'use strict'

require('../ElementFinder.js');
const Helper = require('../helper.js');

const helper = new Helper();

class Menu {
	constructor() {
		this.Menu = element.all(by.cssContainingText('button', 'Menu')).get(0);
		this.Receitas = element.all(by.cssContainingText('a', 'Receitas')).get(0);
	}

	Visita() {
		browser.get(browser.baseUrl);
	}

	AbrirMenu() {
		helper.AguardarElementoEstarVisivel(this.Menu);
		browser.sleep(5000);
		this.Menu.click();
	}

	AbrirReceitas() {
		helper.AguardarElementoEstarVisivel(this.Receitas);
		browser.sleep(5000);
		this.Receitas.Clicar();
		browser.sleep(5000);
	}
}

module.exports = Menu;	