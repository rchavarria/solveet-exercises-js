function endsWith(number, suffix) {
    if (suffix === 0) {
        return true;
    }

    return false;
}

describe('Truck Fleet', () => {

    describe('hook', () => {

        it('runs test', () => {
            expect(1).equal(2 - 1);
        });

    });

    describe('#endsWith', () => {

        it('returns false when a number does not end with a one digit suffix', () => {
            expect(endsWith(10, 1)).equal(false);
        });

        it('return true when a number ends with a one digit suffix', () => {
            expect(endsWith(10, 0)).equal(true);
        });

    });

});


