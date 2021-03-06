
function numberEndsWith(number, suffix) {
    return number.toString().endsWith(suffix.toString());
}

export default class TruckNumber {

    constructor(number) {
        this.maxAllowedNumber = 500;
        this.number = number;
    }

    isAllowed() {
        if (this.number > this.maxAllowedNumber) {
            return false;
        }

        let square = this.number * this.number;
        return numberEndsWith(square, this.number);
    }

}

