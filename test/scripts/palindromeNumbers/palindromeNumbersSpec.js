
describe('Palindrome Numbers', function () {
    'use strict';

    var Palindrome = require('../../../src/scripts/palindromeNumbers/palindromeNumbers.js'),
        palindrome = new Palindrome(1, 1);

    describe('#isPalindrome', function () {

        it('if it is equally read from left to right that right to left', function () {
            expect(palindrome.isPalindrome(11)).equals(true);
            expect(palindrome.isPalindrome(101)).equals(true);
            expect(palindrome.isPalindrome(123454321)).equals(true);
        });

        it('not if it is read differently from left to right that right to left', function () {
            expect(palindrome.isPalindrome(12)).equals(false);
            expect(palindrome.isPalindrome(123)).equals(false);
            expect(palindrome.isPalindrome(9876543)).equals(false);
        });

    });

    describe('#sumIsPalindrome', function () {

        it('the sum of a number and its reverse is palindrome', function () {
            var p = new Palindrome(11, 1);
            expect(p.sumIsPalindrome()).equals(true);
        });

        it('the sum of a number and its reverse is NOT palindrome at first iteration', function () {
            var p = new Palindrome(48, 1);
            expect(p.sumIsPalindrome()).equals(false);
        });

        it('the sum of a number and its reverse after some iterations', function () {
            var p = new Palindrome(48, 2);
            expect(p.sumIsPalindrome()).equals(true);
        });

    });

});
