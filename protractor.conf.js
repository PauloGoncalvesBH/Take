// protractor.conf.js
// Paulo Gonçalves

'use strict'

const SpecReporter = require('jasmine-spec-reporter').SpecReporter;

module.exports.config =
	{
		directConnect: true,

		capabilities: {
			browserName: 'chrome'
		},

		specs: ['specs/*'],

		baseUrl: 'https://qadatake.wordpress.com',

		params:
		{
			TempoEmMilissegundosTimeout: 10000,
		},


		onPrepare: function () {
			browser.waitForAngularEnabled(false);

			// Organiza os resultados no Prompt de Comando.
			jasmine.getEnv().addReporter(new SpecReporter(
				{
					displayFailuresSummary: true,
					displayFailedSpec: true,
					displaySuiteNumber: true,
					displaySpecDuration: true
				}));

			browser.manage().timeouts().implicitlyWait(browser.params.TempoEmMilissegundosTimeout)
			browser.driver.manage().window().maximize();
		},
	};
