module.exports = function Palindrome() {

    this.reverse = function (n) {
        return parseInt(n.toString().split('').reverse().join(''), 10);
    };

}

