import Fraction from '../../../src/scripts/simplify-fractions/simplifyFractions.js';

describe('Fraction', () => {

    describe('#gcd', () => {

        it('is 1 for relative prime numbers', () => {
            expect(new Fraction(1, 1).gcd(1, 1)).equal(1);
            expect(new Fraction(1, 2).gcd(1, 2)).equal(1);
            expect(new Fraction(2, 3).gcd(2, 3)).equal(1);
            expect(new Fraction(8, 27).gcd(8, 27)).equal(1);
        });

        it('is the common factor', () => {
            expect(new Fraction(4, 6).gcd(4, 6)).equal(2);
            expect(new Fraction(9, 6).gcd(9, 6)).equal(3);
        });

    });

    describe('#simplify', () => {

        it('returns the same fraction if can not be reduced', () => {
            expect(new Fraction(1, 2).simplify()).deep.equal(new Fraction(1, 2));
        });

        it('simplifies by the common factor', () => {
            expect(new Fraction(2, 10).simplify()).deep.equal(new Fraction(1, 5));
        });

        it('does not mofidy already simplified members', () => {
            expect(new Fraction(2, 1).simplify()).deep.equal(new Fraction(2, 1));
        });

        it('reduces members by a common factor', () => {
            expect(new Fraction(3, 6).simplify()).deep.equal(new Fraction(1, 2));
        });

        it('does not reduce a fraction whose members are primes', () => {
            expect(new Fraction(13, 47).simplify()).deep.equal(new Fraction(13, 47));
        });

        it('reduces a fraction by several common factors', () => {
            expect(new Fraction(1848, 990).simplify()).deep.equal(new Fraction(28, 15));
        });

    });

});
