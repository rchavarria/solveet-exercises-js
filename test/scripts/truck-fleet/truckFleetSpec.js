import TruckNumber from '../../../src/scripts/truck-fleet/truckFleet.js';

function endsWith(number, suffix) {
    return number.toString().endsWith(suffix.toString());
}

describe('Truck Fleet', () => {

    describe('#endsWith', () => {

        it('returns false when a number does not end with a one digit suffix', () => {
            expect(endsWith(10, 1)).equal(false);
        });

        it('returns true when a number ends with a one digit suffix', () => {
            expect(endsWith(10, 0)).equal(true);
        });

        it('returns false when Number does not end with a several digits suffix', () => {
            expect(endsWith(12345, 10)).equal(false);
            expect(endsWith(12345, 123)).equal(false);
            expect(endsWith(12345, 1234)).equal(false);
        });

        it('returns true when Number ends with a several digits suffix', () => {
            expect(endsWith(12345, 45)).equal(true);
            expect(endsWith(12345, 345)).equal(true);
            expect(endsWith(12345, 2345)).equal(true);
        });

    });

});


