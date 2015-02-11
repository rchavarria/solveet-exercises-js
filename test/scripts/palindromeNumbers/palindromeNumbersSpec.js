
describe('Palindrome Numbers', function() {
    var Palindrome = require('../../../src/scripts/palindromeNumbers/palindromeNumbers.js');

    describe('#reverse', function () {
        var palindrome = new Palindrome();

        it('reverses digits', function () {
            expect(palindrome.reverse(11)).equals(11);
        });

    });

});
