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
        currentIteration += 1;
        if (currentIteration > maxIterations) {
            return false;
        }

        number += this.reverse(number);
        var palindrome = this.isPalindrome(number);

        if (palindrome) {
            return true;
        }
        return this.sumIsPalindrome(number);
    };

};

