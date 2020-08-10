var sum = function sum(a, b) {
    return a + b;
};

var sub = function sub(a, b) {
    return a - b;
};

var div = function div(a, b) {
    return b === 0 ? 'Cannot divide by Zero' : (a / b);
};

var mult = function mult(a, b) {
    return a * b;
};

module.exports = {
    sum, sub, div, mult
}