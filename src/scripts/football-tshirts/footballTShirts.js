export default class TShirts {

    constructor() {
        this.tshirtNumberGenerator = {
            [Symbol.iterator]: function*() {
                var pre = 0, cur = 1;
                for (;cur < 100;) {
                    [pre, cur] = [cur, cur + pre];
                    yield cur;
                }
            }
        };
    }

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

    getNumbersGenerator() {
        var generator = function*(tshirt) {
            for(let i = 0; i < 100; i++) {
                for (let j = 0; j < 100; j++) {
                    let square = Math.pow(i + j, 2).toString();
                    let paddedI = tshirt.pad(i);
                    let paddedJ = tshirt.pad(j);

                    if (square === (paddedI + paddedJ)) {
                        yield {
                            left: paddedI,
                                right: paddedJ,
                                square: square
                        };
                    }
                }
            }
            };

        return generator(this);
    }

    pad(n) {
        return ('00' + n).slice(-2);
    }

}

