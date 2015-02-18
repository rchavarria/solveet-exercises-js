export default class TShirts {

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

