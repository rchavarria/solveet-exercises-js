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

});
