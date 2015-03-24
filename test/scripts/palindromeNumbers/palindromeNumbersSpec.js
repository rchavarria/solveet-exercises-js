import Palindrome from '../../../src/scripts/palindromeNumbers/palindromeNumbers.js';

describe('Palindrome Numbers', () => {

    describe('#sumIsPalindrome', () => {

        it('the sum of a number and its reverse is palindrome', () => {
            var palindrome = new Palindrome(11, 1);
            expect(palindrome.sumIsPalindrome()).equals(true);
        });

        it('the sum of a number and its reverse is NOT palindrome at first iteration', () => {
            var palindrome = new Palindrome(48, 1);
            expect(palindrome.sumIsPalindrome()).equals(false);
        });

        it('the sum of a number and its reverse after some iterations', () => {
            var palindrome = new Palindrome(48, 2);
            expect(palindrome.sumIsPalindrome()).equals(true);
        });

    });

    describe('Specific examples', () => {

        it('187 needs at least 23 iterations', () => {
            var palindrome = new Palindrome(187, 22);
            expect(palindrome.sumIsPalindrome()).equals(false);
            palindrome = new Palindrome(187, 23);
            expect(palindrome.sumIsPalindrome()).equals(true);
        });

    });

});
