import Palindrome from '../../../src/scripts/palindromeNumbers/palindromeNumbers.js';

describe('Palindrome Numbers', () => {

    describe('#sumIsPalindrome', () => {

        it('the sum of a number and its reverse is palindrome', () => {
            expect(new Palindrome(11, 1).sumIsPalindrome()).equals(true);
        });

        it('the sum of a number and its reverse is NOT palindrome at first iteration', () => {
            expect(new Palindrome(48, 1).sumIsPalindrome()).equals(false);
        });

        it('the sum of a number and its reverse after some iterations', () => {
            expect(new Palindrome(48, 2).sumIsPalindrome()).equals(true);
        });

    });

    describe('Specific examples', () => {

        it('187 needs at least 23 iterations', () => {
            expect(new Palindrome(187, 22).sumIsPalindrome()).equals(false);
            expect(new Palindrome(187, 23).sumIsPalindrome()).equals(true);
        });

    });

});
