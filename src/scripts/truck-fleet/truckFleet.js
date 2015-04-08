
function numberEndsWith(number, suffix) {
    return number.toString().endsWith(suffix.toString());
}

export default class TruckNumber {

    constructor(number) {
        this.number = number;
    }

    endsWith(suffix) {
        return numberEndsWith(this.number, suffix);
    }

    isAllowed() {
        return false;
    }

}

