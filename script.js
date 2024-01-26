// loop
// 1.while
let start = 1;
while (start < 600) {
    console.log(start + " - Hello");
    start += 100;    //start = start + 100;  
}

// 2.do while
let stat = 1;
do {
    console.log(stat + " - Hello");
    stat += 100;
} while (stat < 600)


stat = 1000;
do {
    console.log(stat + " - Hello");
    stat += 100;
} while (stat < 600)

// 3.for
for (let count = 1; count < 1000; count += 100) {
    console.log(count + " - Hello");
}

console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");


// s= 1
// s = s + 100
// s = 1 + 100 = 101
// s = 101 + 100 = 201
// s = 201 + 100 = 301
// .
// s= 501 + 100 = 601 

//start = start + 1;   start+=1; start++;