import Fraction from '../../../src/scripts/simplify-fractions/simplifyFractions.js';

describe('Fraction', () => {
    var fraction;

    beforeEach(() => {
        fraction = new Fraction();
    });

    describe('#gcd', () => {

        it('is 1 for 1 and 1', () => {
            let gcd = fraction.gcd(1, 1);
            expect(gcd).equal(1);
        });

    });

});
