import Fraction from '../../../src/scripts/simplify-fractions/simplifyFractions.js';
import gcd from '../../../src/scripts/simplify-fractions/gcd.js';

describe('Fraction', () => {

    describe('#simplify', () => {

        it('returns the same fraction if can not be reduced', () => {
            expect(new Fraction(1, 2).simplify()).deep.equal(new Fraction(1, 2));
            expect(new Fraction(2, 1).simplify()).deep.equal(new Fraction(2, 1));
        });

        it('simplifies by the common factor', () => {
            expect(new Fraction(2, 10).simplify()).deep.equal(new Fraction(1, 5));
        });

        it('does not reduce a fraction whose members are primes', () => {
            expect(new Fraction(13, 47).simplify()).deep.equal(new Fraction(13, 47));
        });

        it('reduces a fraction by several common factors', () => {
            expect(new Fraction(1848, 990).simplify()).deep.equal(new Fraction(28, 15));
        });

    });

});

describe('gcd', () => {

    it('is 1 for relative prime numbers', () => {
        expect(gcd(1, 1)).equal(1);
        expect(gcd(1, 2)).equal(1);
        expect(gcd(2, 3)).equal(1);
        expect(gcd(8, 27)).equal(1);
    });

    it('is the common factor', () => {
        expect(gcd(4, 6)).equal(2);
        expect(gcd(9, 6)).equal(3);
    });

});

