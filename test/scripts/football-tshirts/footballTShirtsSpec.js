import TShirts from '../../../src/scripts/football-tshirts/footballTShirts.js';

describe('Football t-shirts', () => {

    describe('#getJoinedSquares', () => {

        it('returns a list of lists with (X + Y)^2 == XY', () => {
            var tshirts = new TShirts(),
                joined = tshirts.getJoinedSquares();

            expect(joined.length).equal(3);
            expect(joined[ 0 ]).deep.equal([ '20', '25', '2025' ]);
            expect(joined[ 1 ]).deep.equal([ '30', '25', '3025' ]);
            expect(joined[ 2 ]).deep.equal([ '98', '01', '9801' ]);
        });

    });

    describe('#getNumbersGenerator', () => {

        it('generates the first number', () => {
            var first,
                tshirts = new TShirts(),
                generator = tshirts.getNumbersGenerator();

            first = generator.next().value;
            expect(first.left).equal('20');
            expect(first.right).equal('25');
            expect(first.square).equal('2025');
        });

        it('generates the second number', () => {
            var second,
                tshirts = new TShirts(),
                generator = tshirts.getNumbersGenerator();

            generator.next();

            second = generator.next().value;
            expect(second.left).equal('30');
            expect(second.right).equal('25');
            expect(second.square).equal('3025');
        });

        it('generates the third number', () => {
            var third,
                tshirts = new TShirts(),
                generator = tshirts.getNumbersGenerator();

            generator.next();
            generator.next();

            third = generator.next().value;
            expect(third.left).equal('98');
            expect(third.right).equal('01');
            expect(third.square).equal('9801');
        });

        it('after the third, it is done', () => {
            var itIsDone,
                tshirts = new TShirts(),
                generator = tshirts.getNumbersGenerator();

            generator.next();
            generator.next();
            generator.next();

            itIsDone = generator.next();
            expect(itIsDone.value).equal(undefined);
            expect(itIsDone.done).equal(true);
        });

    });

});
