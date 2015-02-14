
describe('Palindrome Numbers', function () {
    'use strict';

    var Palindrome = require('../../../src/scripts/palindromeNumbers/palindromeNumbers.js');

    describe('#sumIsPalindrome', function () {

        it('the sum of a number and its reverse is palindrome', function () {
            var palindrome = new Palindrome(11, 1);
            expect(palindrome.sumIsPalindrome()).equals(true);
        });

        it('the sum of a number and its reverse is NOT palindrome at first iteration', function () {
            var palindrome = new Palindrome(48, 1);
            expect(palindrome.sumIsPalindrome()).equals(false);
        });

        it('the sum of a number and its reverse after some iterations', function () {
            var palindrome = new Palindrome(48, 2);
            expect(palindrome.sumIsPalindrome()).equals(true);
        });

    });

});
