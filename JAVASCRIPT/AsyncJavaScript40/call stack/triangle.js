
const multiply = function (x, y) {
    return x * y;
}

const square = function (x) {
    return multiply(x, x);
}

const isTriangle = function (a, b, c) {
    return square(a) + square(b) === square(c);
}

