import test from "../test.mjs";

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

test("A function that returns the square of a number: ").isEqual(square(10), 100, "Square of 10 should be 100");
test("A function that returns the square of a number: ").isEqual(square(-12), 144, "Square of -12 should be 144");
test("A function that returns the square of a number: ").isEqual(square(55), 3025, "Square of 55 should be 3025");

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

console.log("A function that converts inches to MM:");
console.log("1 Inch:", inchesToMillimeter(1)); //Expected outcome 25.4
console.log("0.5 Inches:", inchesToMillimeter(0.5)); //Expected outcome 12.7
console.log("-1 to Inches:", inchesToMillimeter(-1)); //Expected outcome -25.4

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

console.log("A function that returns the root of a number:");
console.log("Root of -6:",calcSquareRoot(-6)); //Expected output should be NaN
console.log("Root of 25:",calcSquareRoot(25)); //expected output is 5
console.log("Root of 1000000:",calcSquareRoot(1000000)); //expected output is 1000

function cube(number) {
    return number * number * number;
}

function cubeUsingExponent(number) {
    return number ** 3;
}

console.log("A function that returns the cube of the number:");
console.log("Cube of 0:",cube(0)); //Expected output 0
console.log("Cube of 5:",cube(5)); //Expected output 125
console.log("Cube of 17:",cube(17)); //Expected output 4913
console.log("Cube of 30:",cube(30)); //Expected output 27000
console.log("Cube of -20:",cube(-20)); //Expected output -8000

function circleArea(radius) {
    if (radius < 0) {
        return NaN;
    }

    const PI = 3.14159;

    return PI * radius * radius;
}

console.log("A function that returns the area of a cirlce given the radius:");
console.log("Circle area with radius 0: " + circleArea(0)); //Expected output is 0
console.log("Circle area with radius 5: " + circleArea(5)); //Expected output is 78.53975
console.log("Circle area with radius -7: " + circleArea(-7)); //Expected output is NaN
console.log("Circle area with radius 1000: " + circleArea(1000)); //Expected output is 3141590

function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("Oskar")); //Expected output: Hello, Oskar!
console.log(greet("Oskar123")); //Expected output: Hello, Oskar123!
console.log(greet("Oskar!!")); //Expected output: Hello, Oskar!!!