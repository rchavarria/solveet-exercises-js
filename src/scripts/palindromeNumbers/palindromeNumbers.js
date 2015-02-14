module.exports = function Palindrome(candidateNumber, maxNumberOfIterations) {
    'use strict';

    var number = candidateNumber,
        maxIterations = maxNumberOfIterations,
        currentIteration = 0;

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
        console.log(number);

        currentIteration += 1;
        if (currentIteration > maxIterations) {
            return false;
        }

        var sum = n + this.reverse(n),
            palindrome = this.isPalindrome(sum);

        if (palindrome) {
            return true;
        }
        return this.sumIsPalindromeRecursively(sum);
    };

};

