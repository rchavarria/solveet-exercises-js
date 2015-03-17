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

function gcd(a, b) {
    while (b !== 0) {
        let t = b;
        b = a % b;
        a = t;
    }

    return a;
}

