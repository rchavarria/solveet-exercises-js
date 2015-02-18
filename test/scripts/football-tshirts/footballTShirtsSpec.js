describe('Football t-shirts', () => {

    it('prints out numbers where (X + Y)^2 == XY', () => {
        for(let i = 0; i < 100; i++) {
            for (let j = 0; j < 100; j++) {
                let square = Math.pow(i + j, 2);
                let paddedI = ('00' + i).slice(-2);
                let paddedJ = ('00' + j).slice(-2);

                if (square.toString() === (paddedI + paddedJ)) {
                    console.log('(', paddedI, ' + ', paddedJ, ') == ', square);
                }
            }
        }
    });

});
