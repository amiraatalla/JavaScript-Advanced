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

function sub(num1, num2){
  return num1 - num2;
}

// const res = sub(9, 3);
// console.log(res);
console.log(sub(9, 3));
