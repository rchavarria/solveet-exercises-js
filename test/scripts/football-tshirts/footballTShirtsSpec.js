describe('Football t-shirts', function () {

    it('prints out numbers where (X + Y)^2 == XY', function () {
        var i, j, square, paddedI, paddedJ;

        for(i = 0; i < 100; i++) {
            for (j = 0; j < 100; j++) {
                square = Math.pow(i + j, 2);
                paddedI = ('00' + i).slice(-2);
                paddedJ = ('00' + j).slice(-2);
                if (square.toString() === paddedI + paddedJ) {
                    console.log('(', paddedI, ' + ', paddedJ, ') == ', square);
                }
            }
        }
    });

});
