let age = 15;
// console.log('====================================');
// console.log(age);
// console.log('====================================');


// function

function add(number1, number2, number3) {
    const sum = number1 + number2 + number3; //local variable
    console.log(age);
    console.log(sum);
    return sum;
}


// const result = add(7, 8, 5); //global variable
// console.log(result);
console.log('******************');
console.log(add(7, 8, 5));
console.log('******************');

function sub(num1, num2) {
    return num1 - num2;
}

console.log(sub(9, 3));



function sub(num1, num2) {
    let subtraction = num1 - num2;
    return subtraction
}

const res = sub(9, 3);
console.log(res);


function greeting() {
    return "Hello";
}
const greet = greeting();
console.log(greet)
//   console.log(greeting())


function greetingStudent(name) {
    // return "Hello " + name;
    return `Hello  ${name}`;
}
console.log(greetingStudent("Aisha"))

// const greetSt = greeting("Aisha");
//   console.log(greet)


function greetingStudent(name) {
    return `Hello  ${name}`;
}
console.log(greetingStudent("Aisha"))


//   https://javascript.info/
// h.w
//   : 1- function print your info
//   : 2- function to multiply 2 numbers
//   : 3- function to divide 2 numbers
//   : 4- loop to print sum of numbers from 5 to 15 by while , do..while and for
//   : 5 - convert one way from question4 to function