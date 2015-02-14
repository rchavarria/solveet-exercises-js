module.exports = function Palindrome() {
    'use strict';

    this.reverse = function (n) {
        return parseInt(n.toString().split('').reverse().join(''), 10);
    };

    this.isPalindrome = function (n) {
        return n.toString() === this.reverse(n).toString();
    };

    this.sumIsPalindrome = function (n) {
        var sum = n + this.reverse(n);
        return this.isPalindrome(sum);
    };

    this.sumIsPalindromeRecursively = function (n) {
        var palindrome = this.sumIsPalindrome(n);

        if (palindrome) {
            return true;
        }
        return this.sumIsPalindromeRecursively(n + this.reverse(n));
    };

};

