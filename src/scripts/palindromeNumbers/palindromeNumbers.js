
function reverse(n) {
    return parseInt(n.toString().split('').reverse().join(''), 10);
}

export default class Palindrome {

    constructor(candidateNumber, maxNumberOfIterations) {
        this.number = candidateNumber;
        this.maxIterations = maxNumberOfIterations;
        this.currentIteration = 0;
    }

    isPalindrome(n) {
        return n.toString() === reverse(n).toString();
    }

    sumIsPalindrome() {
        this.currentIteration += 1;
        if (this.currentIteration > this.maxIterations) {
            return false;
        }

        this.number += reverse(this.number);
        if (this.isPalindrome(this.number)) {
            return true;
        }
        return this.sumIsPalindrome();
    };
}

