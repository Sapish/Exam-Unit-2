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
    for (let i = 0; i < number; i++) {
        result += number;
    }
    return result;
}