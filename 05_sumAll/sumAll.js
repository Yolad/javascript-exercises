const sumAll = function (num1, num2) {
    let min, max;
    let sum = 0;
    if (typeof (num1) != 'number' || typeof (num2) != 'number' || num1 < 0 || num2 < 0) {
        return 'ERROR';
    }

    if (num1 < num2) {
        min = num1;
        max = num2;
    } else {
        min = num2;
        max = num1;
    }

    for (let i = min; i < max+1; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
