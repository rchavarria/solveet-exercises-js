module.exports = function Palindrome(candidateNumber, maxNumberOfIterations) {
    'use strict';

    var number = candidateNumber,
        maxIterations = maxNumberOfIterations,
        currentIteration = 0;

    function reverse(n) {
        return parseInt(n.toString().split('').reverse().join(''), 10);
    }

    function isPalindrome(n) {
        return n.toString() === reverse(n).toString();
    }

    this.sumIsPalindrome = function () {
        currentIteration += 1;
        if (currentIteration > maxIterations) {
            return false;
        }

        number += reverse(number);
        var palindrome = isPalindrome(number);

        if (palindrome) {
            return true;
        }
        return this.sumIsPalindrome(number);
    };

};

