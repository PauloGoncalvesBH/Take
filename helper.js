//	helper.js
// Paulo Gonçalves

'use strict'

class Helper {

	AguardarElementoEstarVisivel(elemento) {
		browser.wait(protractor.ExpectedConditions.elementToBeClickable(elemento), browser.params.TempoEmMilissegundosTimeout)
	}

}

module.exports = Helper;