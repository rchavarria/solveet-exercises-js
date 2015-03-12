export default class Fraction {

    gcd(a, b) {
        while (b != 0) {
            let t = b;
            b = a % b;
            a = t;
        }

        return a;
    }

}

