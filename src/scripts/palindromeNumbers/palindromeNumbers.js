
function reverse(n) {
    return parseInt(n.toString().split('').reverse().join(''), 10);
}

function isPalindrome(n) {
    return n.toString() === reverse(n).toString();
}

export default class Palindrome {

    constructor(candidateNumber, maxNumberOfIterations) {
        this.number = candidateNumber;
        this.maxIterations = maxNumberOfIterations;
        this.currentIteration = 0;
    }

    sumIsPalindrome() {
        this.currentIteration += 1;
        if (this.currentIteration > this.maxIterations) {
            return false;
        }

        this.number += reverse(this.number);
        if (isPalindrome(this.number)) {
            return true;
        }
        return this.sumIsPalindrome();
    };
}

