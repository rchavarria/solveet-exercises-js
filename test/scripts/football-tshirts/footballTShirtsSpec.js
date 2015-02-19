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
            var gen = {
                [Symbol.iterator]: function*() {
                    var pre = 0, cur = 1;
                    for (;;) {
                        [pre, cur] = [cur, cur + pre];
                        yield cur;
                    }
                }
            };

            for(var n of gen) {
                if (n > 10) break;
                console.log('fibo', n);
            }
        });

    });

});
