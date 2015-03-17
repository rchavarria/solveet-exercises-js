import Fraction from '../../../src/scripts/simplify-fractions/simplifyFractions.js';

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
