import Fraction from '../../../src/scripts/simplify-fractions/simplifyFractions.js';

describe('Fraction', () => {
    var fraction;

    beforeEach(() => {
        fraction = new Fraction();
    });

    describe('#gcd', () => {

        it('is 1 for relative prime numbers', () => {
            expect(fraction.gcd(1, 1)).equal(1);
            expect(fraction.gcd(1, 2)).equal(1);
            expect(fraction.gcd(2, 3)).equal(1);
            expect(fraction.gcd(8, 27)).equal(1);
        });

    });

});
