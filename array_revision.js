let ages = [12, 130, 14, 60];
// console.log(ages);

// console.log(ages[2]);
// console.log(ages.length);

// // let name = "amira";
// // console.log(name.length);

// console.log(ages[3]);
// console.log(ages.length-1);
// console.log(ages[ages.length-1]);

// for(let index = 0; index < ages.length ; index ++){
//     console.log(ages[index]);
// }

// ages.forEach(item => console.log(item));

// ages.filter(item => {
//     if (item > 30)
//         console.log(item);
// });

// let result = ages.filter(item =>  item > 30);
// result.forEach(item => console.log(item));

//callback function
// ages.forEach(callback);

// function callback(item){
//     console.log(item);
// }

// ages.forEach(item => console.log(item));

// let aisha = item => console.log(item);
// ages.forEach(aisha);

//map == change item shape
ages.map(item => console.log(item.toFixed(2)));
ages.map(item => console.log(item * 2));
