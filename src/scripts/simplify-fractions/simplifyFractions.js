export default class Fraction {

    constructor(numerator, denominator) {
        this.numerator = numerator;
        this.denominator = denominator;
    }

    gcd(a, b) {
        while (b !== 0) {
            let t = b;
            b = a % b;
            a = t;
        }

        return a;
    }

}

