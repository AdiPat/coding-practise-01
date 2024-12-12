

const MAX_VALUES = 15;

const checkDivisibility = (val: number, divisor: number): boolean => val % divisor === 0;


function fizzbuzz(val: number): void {
    if (checkDivisibility(val, 3) && checkDivisibility(val, 5)) {
        console.log("FizzBuzz");
    }
    else if (checkDivisibility(val, 3)) {
        console.log("Fizz");
    } else if (checkDivisibility(val, 5)) {
        console.log("Buzz");
    } else {
        console.log(val);
    }
}


function main() {
    const values = new Array(MAX_VALUES).fill(0).map((_, i) => i + 1);

    for (const value of values) {
        fizzbuzz(value);
    }
}

main();