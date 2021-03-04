module.exports = function toReadable(number) {
    let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    let hundreds = ones[Math.floor(number / 100)] + ' hundred'

    function getTens(number) {
        if (number < 10) {
            return ones[number];
        } else if (number >= 10 && number < 20) {
            return teens[number - 10];
        } else {
            if (number % 10 !== 0) {
                return tens[Math.floor(number / 10)] + ' ' + ones[number % 10];
            } else {
                return tens[Math.floor(number / 10)];
            }
        }
    }

    function getHundreds(number) {
        if (number > 99) {
            if (number % 100 !== 0) {
                return hundreds + ' ' + getTens(number % 100);
            } else {
                return hundreds;
            }
        } else {
            return getTens(number);
        }
    }

    function getResult(number) {
        if (number === 0) return 'zero';
        else return getHundreds(number);
    }

    return getResult(number);

}
