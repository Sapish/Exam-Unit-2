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
    const MM_PR_INCH = 25.4;
    return inches * MM_PR_INCH;
}

test("A function that converts inches to MM: ").isEqual(inchesToMillimeter(1), 25.4, "1 Inches should be 25.4 mm");
test("A function that converts inches to MM: ").isEqual(inchesToMillimeter(0.5), 12.7, "0.5 Inches should be 12.7 mm");
test("A function that converts inches to MM: ").isEqual(inchesToMillimeter(-1), -25.4, "-1 Inches should be -25.4 mm");

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

test("A function that returns the root of a number: ").isNotANumber(calcSquareRoot(-6), "Root of -6 should be NaN");
test("A function that returns the root of a number: ").isEqual(calcSquareRoot(25), 5.000000000016778, "Root of 25 should be 5");
test("A function that returns the root of a number: ").isEqual(calcSquareRoot(1000000), 1000, "Root of 1000000 should be 1000");

function cube(number) {
    return number * number * number;
}

function cubeUsingExponent(number) {
    return number ** 3;
}

test("A function that returns the cube of the number: ").isEqual(cube(0), 0, "Cube of 0 should be 0");
test("A function that returns the cube of the number: ").isEqual(cube(5), 125, "Cube of 5 should be 125");
test("A function that returns the cube of the number: ").isEqual(cube(17), 4913, "Cube of 17 should be 4913");
test("A function that returns the cube of the number: ").isEqual(cube(30), 27000, "Cube of 30 should be 27000");
test("A function that returns the cube of the number: ").isEqual(cube(-20), -8000, "Cube of -20 should be -8000");


function circleArea(radius) {
    if (radius < 0) {
        return NaN;
    }

    const PI = 3.14159265359;

    return PI * radius * radius;
}

test("A function that returns the area of a circle given the radius: ").isEqual(circleArea(0), 0, "Circle area with radius 0 should be 0");
test("A function that returns the area of a circle given the radius: ").isEqual(circleArea(5), 78.53975, "Circle area with radius 5 should be 78.53975");
test("A function that returns the area of a circle given the radius: ").isNotANumber(circleArea(-7), "Circle area with radius -7 should be NaN");
test("A function that returns the area of a circle given the radius: ").isEqual(circleArea(1000), 3141590, "Circle area with radius 1000 should be 3141590");

function greet(name) {
    return "Hello, " + name + "!";
}

test(greet("Oskar")).isEqual(greet("Oskar"), "Hello, Oskar!", "Greeting should be 'Hello, Oskar!'");
test(greet("Oskar123")).isEqual(greet("Oskar123"), "Hello, Oskar123!", "Greeting should be 'Hello, Oskar123!'");
test(greet("Oskar!!")).isEqual(greet("Oskar!!"), "Hello, Oskar!!!", "Greeting should be 'Hello, Oskar!!!'");