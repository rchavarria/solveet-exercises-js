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

    this.sumIsPalindrome = function () {
        var sum = number + this.reverse(number);
        return this.isPalindrome(sum);
    };

    this.sumIsPalindromeRecursively = function () {
        currentIteration += 1;
        if (currentIteration > maxIterations) {
            return false;
        }

        var sum = number + this.reverse(number),
            palindrome = this.isPalindrome(sum);

        if (palindrome) {
            return true;
        }
        number = sum;
        return this.sumIsPalindromeRecursively(sum);
    };

};

