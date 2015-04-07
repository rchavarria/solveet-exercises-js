
export default class TruckNumber {

    constructor(number) {
        this.number = number;
    }

    endsWith(suffix) {
        return this.number.toString().endsWith(suffix.toString());
    }
}

