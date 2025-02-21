/*
Task Functions are a popping
1. A function that returns the square of a number
2. A function that returns a length in mm assuming it has been given a length in inches.
3. A function that returns the root of a number
4. A function that returns the cube of a number
5. A function that returns the area of a circle given the radius.
6. A function that returns a greeting, given a name.
*/


function square(number) {
    let result = 0;
    let positiveNumber = number;

    if (number <0) {
        positiveNumber = -number;
    }
    for (let i = 0; i < positiveNumber; i++) {
        result += positiveNumber;
    }
    return result;
}

console.log("Square of 10:", square(10)); //expecting the outcome to be 100
console.log("Square of -12:", square(-12)); //expecting the outcome to be 144
console.log("Square of 55:", square(55)); //expecting the outcome to be 3025


function inchesToMillimeter(inches) {
    let millimeter = 0;
    const mmPrInch = 25.4;
    let positiveInches = inches;

    if (inches < 0) {
        positiveInches = -inches;
    }

    let i = 0;
    while (i < positiveInches) {
        millimeter += mmPrInch * 0.01;
        i += 0.01;
    }

    if (inches < 0) {
        millimeter = -millimeter;
    }

    return millimeter;
}

console.log("1 Inch:", inchesToMillimeter(1)); //Expected outcome 25.4
console.log("0.5 Inches", inchesToMillimeter(0.5)); //Expected outcome 12.7
console.log("-1 to Inches", inchesToMillimeter(-1)); //Expected outcome -25.4

function calcAbsoluteValue(x) {
    return x < 0 ? -x : x;
}

function calcSquareRoot(number, tolerance = 0.0001) {
    if (number < 0) {
        return NaN;
    }

    if (number === 0) {
        return 0;
    }

    let guess = number / 2;
    let previousGuess;

    do {
        previousGuess = guess;
        guess = (guess + number / guess) / 2;
    } while (calcAbsoluteValue(guess - previousGuess) > tolerance);

    return guess;
}