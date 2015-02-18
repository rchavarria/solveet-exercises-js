class TShirts {
    getJoinedSquares() {
        var joined = [];

        for(let i = 0; i < 100; i++) {
            for (let j = 0; j < 100; j++) {
                let square = Math.pow(i + j, 2).toString();
                let paddedI = this.pad(i);
                let paddedJ = this.pad(j);

                if (square === (paddedI + paddedJ)) {
                    joined.push([paddedI, paddedJ, square]);
                }
            }
        }

        return joined;
    }

    pad(n) {
        return ('00' + n).slice(-2);
    }

}

describe('Football t-shirts', () => {

    var pad = (n) => ('00' + n).slice(-2);

    it('prints out numbers where (X + Y)^2 == XY', () => {
        for(let i = 0; i < 100; i++) {
            for (let j = 0; j < 100; j++) {
                let square = Math.pow(i + j, 2);
                let paddedI = pad(i);
                let paddedJ = pad(j);

                if (square.toString() === (paddedI + paddedJ)) {
                    console.log('(', paddedI, ' + ', paddedJ, ') == ', square);
                }
            }
        }
    });

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

});
