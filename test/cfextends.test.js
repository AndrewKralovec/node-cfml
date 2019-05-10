/* globals require, describe, it */
// jshint devel:true, curly: false, asi:true

var expect = require('expect.js')
var cfml = require('../cfml')

describe('The CFEXTENDING tag',() => {

	describe('The extending template', () => {

		it('should output the content of the file', () => {
			var str = '<cfextends template="test/testextends.cfm"> world'
			var vars = {}
			var result = cfml.renderString(str, vars)
			expect(result.trim()).to.be('hello world')
		})

		it('should be passed variables defined in the extended template', () => {
			var str = '<cfextends template="test/testextends.cfm"><cfoutput>#test#</cfoutput>'
			var vars = {}
			var result = cfml.renderString(str, vars)
			expect(result.trim()).to.be('hello world')
		})

    })
    
})
