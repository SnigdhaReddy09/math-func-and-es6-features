// round
console.log(Math.round(4.6));
// ceil
console.log(Math.ceil(-4.1));
// floor
console.log(Math.floor(4.9));
// trunc
console.log(Math.trunc(4.9));
// exponent power
console.log(Math.pow(5, 2));
// sqare root
console.log(Math.sqrt(16));
// absolute value
console.log(Math.abs(-5));
// minimum
console.log(Math.min(1, 3, -1, 5));
// maximum
console.log(Math.max(1, 3, -1, 5));
// random
console.log(Math.random());
console.log(Math.random() * 10);

// ------------Es6 features--------------------

let x = 5;
x = 10;            // Allowed
const y = 20;
//  y = 30;        //error

// arrow function
const multiplyArrow = (a, b) => a * b;
console.log(multiplyArrow(2, 3));

// template literals
const name = "Sara";
const greeting = `Hi, ${name}!`;
console.log(greeting)

// default parameters
function greet(name = "kiara") {
    return `Hello, ${name}!`;
}
console.log(greet());

