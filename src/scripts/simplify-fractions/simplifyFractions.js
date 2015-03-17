import gcd from './gcd.js';

export default class Fraction {

    constructor(numerator, denominator) {
        this.numerator = numerator;
        this.denominator = denominator;
    }

    simplify() {
        let divisor = gcd(this.numerator, this.denominator);
        return new Fraction(this.numerator / divisor, this.denominator / divisor);
    }

}

