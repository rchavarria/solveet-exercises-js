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

    simplify() {
        let gcd = this.gcd(this.numerator, this.denominator);
        return new Fraction(this.numerator / gcd, this.denominator / gcd);
    }

}

