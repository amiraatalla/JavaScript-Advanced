//4- loop add 5 to 15 

let start = 5;
let sum = 0;
while(start < 16){
    sum += start;
    start +=1;
}
console.log(sum);

//5-function
// function addition(start){
//     let sum = 0;
//     while(start < 16){
//         sum += start;
//         start +=1;
//     }
//     return sum
// }
// console.log(addition (5));

function addition(start ,end){
    let sum = 0;
    while(start < end){
        sum += start;
        start +=1;
    }
    return sum;
}
console.log(addition (5 , 16));
console.log(addition (1, 6));
console.log(addition (50 , 16));