
describe('Palindrome Numbers', function () {
    'use strict';

    var Palindrome = require('../../../src/scripts/palindromeNumbers/palindromeNumbers.js'),
        palindrome = new Palindrome();

    describe('#reverse', function () {

        it('reverses digits', function () {
            expect(palindrome.reverse(11)).equals(11);
            expect(palindrome.reverse(123)).equals(321);
            expect(palindrome.reverse(10134)).equals(43101);
        });

    });

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
            expect(palindrome.sumIsPalindrome(11)).equals(true);
        });

        it('the sum of a number and its reverse is NOT palindrome at first iteration', function () {
            expect(palindrome.sumIsPalindrome(48)).equals(false);
        });

    });

    describe('#sumIsPalindromeRecursively', function () {

        it('iterates until it founds a palindrome number', function () {
            expect(palindrome.sumIsPalindromeRecursively(48)).equals(true);
        });

        it('limits the number of iterations', function () {
            var limitedPalindrome = new Palindrome(1);
            expect(limitedPalindrome.sumIsPalindromeRecursively(48)).equals(false);
            limitedPalindrome = new Palindrome(2);
            expect(palindrome.sumIsPalindromeRecursively(48)).equals(true);
        });

    });

});
