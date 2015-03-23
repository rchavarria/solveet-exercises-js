export default class Palindrome {

    constructor(candidateNumber, maxNumberOfIterations) {
        this.number = candidateNumber;
        this.maxIterations = maxNumberOfIterations;
        this.currentIteration = 0;
    }

    reverse(n) {
        return parseInt(n.toString().split('').reverse().join(''), 10);
    }

    isPalindrome(n) {
        return n.toString() === this.reverse(n).toString();
    }

    sumIsPalindrome() {
        this.currentIteration += 1;
        if (this.currentIteration > this.maxIterations) {
            return false;
        }

        this.number += this.reverse(this.number);
        if (this.isPalindrome(this.number)) {
            return true;
        }
        return this.sumIsPalindrome();
    };
}

