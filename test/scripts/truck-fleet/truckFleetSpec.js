function endsWith(number, suffix) {
    return false;
}

describe('Truck Fleet', () => {

    describe('hook', () => {

        it('runs test', () => {
            expect(1).equal(2 - 1);
        });

    });

    describe('#endsWith', () => {

        it('returns false when a number does not end with the given suffix', () => {
            expect(endsWith(10, 1)).equal(false);
        });

    });

});


