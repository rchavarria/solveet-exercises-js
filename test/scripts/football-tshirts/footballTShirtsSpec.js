import TShirts from '../../../src/scripts/football-tshirts/footballTShirts.js';

describe('Football t-shirts', () => {

    describe('#getJoinedSquares', () => {

        it('returns a list of lists with (X + Y)^2 == XY', () => {
            var tshirts = new TShirts(),
                joined = tshirts.getJoinedSquares();

            expect(joined.length).equal(3);
            expect(joined[0]).deep.equal(['20', '25', '2025']);
            expect(joined[1]).deep.equal(['30', '25', '3025']);
            expect(joined[2]).deep.equal(['98', '01', '9801']);
        });

    });

    describe('spike a generator', () => {

        it('runs', () => {
            var tshirts = new TShirts();

            for(var n of tshirts.tshirtNumberGenerator) {
                console.log('fibo', n);
            }
        });

    });

});
