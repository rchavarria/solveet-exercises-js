
describe('Palindrome Numbers', function() {
    var Palindrome = require('../../../src/scripts/palindromeNumbers/palindromeNumbers.js');

    describe('#reverse', function () {
        var palindrome = new Palindrome();

        it('reverses digits', function () {
            expect(palindrome.reverse(11)).equals(11);
            expect(palindrome.reverse(123)).equals(321);
            expect(palindrome.reverse(10134)).equals(43101);
        });

    });

    describe('#isPalindrome', function () {
        var palindrome = new Palindrome();

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
        var palindrome = new Palindrome();

        it('the sum of a number and its reverse is palindrome', function () {
            expect(palindrome.sumIsPalindrome(11)).equals(true);
        });

        it('the sum of a number and its reverse is NOT palindrome', function () {
            expect(palindrome.sumIsPalindrome(48)).equals(false);
        });

    });

});
