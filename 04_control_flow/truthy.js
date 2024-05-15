
//const userEmail= "sameer@hotmail.com"  // execute if 
//const userEmail = ""    // execute else 
const userEmail=[] // if execute

if(userEmail){
    console.log("Got user email");
}
else
{
    console.log("Don't have user email");
}

// fasly values

// false , 0 = falsy value , -0= falsy value , BigInt 0n= "", falsy value , null and undefine , NaN falsy value 

// Truthy Value

// "0" , 'false' , " ", [], {}, function(){}



// if(userEmail.length ===0){
// console.log("Array is empty");
// }
const emptyobj = {}
if(Object.keys(emptyobj).length ===0){
console.log("emty obj");
}


// Nullish Coalescing Operator (??): null undefine

let val1

//val1 = 5 ?? 10 // output 5

//val1 = null ?? 10 // out 10

//val1 = undefined ?? 15 // output  15
//al1 = null ?? 10 ?? 20  // output 10 

//console.log(val1);


// Terniary Operater

const iceTeaPrice = 1000

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")