
describe('Palindrome Numbers', function() {
    var Palindrome = require('../../../src/scripts/palindromeNumbers/palindromeNumbers.js');

    it('hooks up tests', function() {
        var palindrome = new Palindrome();
        palindrome.foo();
        expect(2 + 2).equals(4);
    });

});
