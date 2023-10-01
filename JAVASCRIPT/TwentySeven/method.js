const myMath = {
    multiply: function (x, y) {
        return x * y;
    },
    divide: function (x, y) {
        return x / y;
    },
    square: function (x) {
        return x * x;
    }
};
myMath.multiply(5, 4);
//if i called math.multiply only then it says multiply is a function and we have to pass an argument

//--------------------------------------------------------------------------------------------------------------------------

//shortened property
const yourMath = {
    multiply(x, y) {
        return x * y;
    },
    divide(x, y) {
        return x / y;
    },
    square(x) {
        return x * x;
    }
};
yourMath.square(7);

//--------------------------------------------------------------------------------------------------------------------------------
const square = {
    area: function (length) {
        return length * length;
    },
    perimeter: function (length) {
        return length * 4;
    }
};
square.area(10);
square.perimeter(10);

//shortened :only remove function key word ----------------------------------------------------------------------------------------------------------------
const squarecal = {
    area(length) {
        return length * length;
    },
    perimeter(length) {
        return length * 4;
    }
};
square.area(10);
square.perimeter(10);









