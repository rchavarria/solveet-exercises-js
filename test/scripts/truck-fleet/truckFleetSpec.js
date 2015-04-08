import TruckNumber from '../../../src/scripts/truck-fleet/truckFleet.js';

describe('Truck Fleet', () => {

    describe('#isAllowed', () => {

        it('is not allowed when it is greater than 500', () => {
            expect(new TruckNumber(501).isAllowed()).equal(false);
            expect(new TruckNumber(625).isAllowed()).equal(false);
        });

        it('is allowed when the square of the number ends with the number itself', () => {
            expect(new TruckNumber(5).isAllowed()).equal(true);
            expect(new TruckNumber(25).isAllowed()).equal(true);
        });

        it('is not allowed when the square does not end with the number itself', () => {
            expect(new TruckNumber(51).isAllowed()).equal(false);
            expect(new TruckNumber(101).isAllowed()).equal(false);
        });

    });

    describe('Find truck numbers', () => {

        it('iterates from 1 to 500', () => {
            let allowedNumbers = [];
            for (let i = 1; i <= 500; i++) {
                let allowed = new TruckNumber(i).isAllowed();
                if (allowed) {
                    allowedNumbers.push(i);
                }
            }

            console.log('Allowed numbers for trucks:', allowedNumbers);
        });

    });

});


