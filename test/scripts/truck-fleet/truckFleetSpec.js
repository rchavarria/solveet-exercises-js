import TruckNumber from '../../../src/scripts/truck-fleet/truckFleet.js';

describe('Truck Fleet', () => {

    describe('#endsWith', () => {

        it('returns false when a number does not end with a one digit suffix', () => {
            expect(new TruckNumber(10).endsWith(1)).equal(false);
        });

        it('returns true when a number ends with a one digit suffix', () => {
            expect(new TruckNumber(10).endsWith(0)).equal(true);
        });

        it('returns false when Number does not end with a several digits suffix', () => {
            expect(new TruckNumber(12345).endsWith(10)).equal(false);
            expect(new TruckNumber(12345).endsWith(123)).equal(false);
            expect(new TruckNumber(12345).endsWith(1234)).equal(false);
        });

        it('returns true when Number ends with a several digits suffix', () => {
            expect(new TruckNumber(12345).endsWith(45)).equal(true);
            expect(new TruckNumber(12345).endsWith(345)).equal(true);
            expect(new TruckNumber(12345).endsWith(2345)).equal(true);
        });

    });

});


