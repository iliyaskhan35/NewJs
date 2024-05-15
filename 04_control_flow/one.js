
const isUserloggedIn = true
// if(isUserloggedIn){
//     console.log("hello");

// }
// if(8!=8){
//     console.log("object");
// }
// else{
//     console.log("wrong");
// }
// const temperature = 41
// if(temperature === 50){
// console.log("less then 50");
// }
// else{
//     console.log("greater then 50");
// }
// < less than syambal  // > grater then syambal, // <= less than equal to //>= greater than equla to // == equal to equal to // != not equal to

// const score= 200

// if(score < 100){
//     const power = "Fly"
//  console.log(`user power: ${power}`);
// }
// else{
//     console.log("error");
// }
//console.log(`user power: ${power}`); // not execute because define out of scope


// Implicit Scope

const balance = 1000
// if (balance > 500) console.log("test");   // implicit score


// if(balance < 500){
// console.log("less then 500");
// }
// else if (balance<750){
// console.log("less than 750");
// }
// else if (balance < 900){
//     console.log("less than 900");
// }
// else{
//     console.log("less then 1200");
// }

const debitCard = true
const loggedfromgoogle = false
const loggedinfromemail=true

if(isUserloggedIn && debitCard){
console.log(" Allow to buy course");
}

if(loggedfromgoogle || loggedinfromemail){
console.log("User logged in ");
}