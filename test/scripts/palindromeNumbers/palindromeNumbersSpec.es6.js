import Palindrome from '../../../src/scripts/palindromeNumbers/palindromeNumbers.es6.js';

describe('Palindrome Numbers', function () {

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

    describe('Specific examples', function () {

        it('187 needs at least 23 iterations', function () {
            var palindrome = new Palindrome(187, 22);
            expect(palindrome.sumIsPalindrome()).equals(false);
            palindrome = new Palindrome(187, 23);
            expect(palindrome.sumIsPalindrome()).equals(true);
        });

    });

});
