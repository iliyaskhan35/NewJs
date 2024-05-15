// for 

for ( let i=0; i<= 10; i++){
    const element = i ;

   if(element == 5){
    console.log("5 is best number");
   }
//console.log(element);
}
//console.log(element);   // element not access in out of scope

// for (let i = 0 ; i <= 10; i++){
//     console.log(`out loop value: ${i}`);
//    // for(let j = 0; j <= 10; j++)
//    for (let j = 2 ;j<= 10; j++){
//     //console.log(`Inner loop value: ${j} and inner loo ${i}`);
//     console.log(i + '*' + j + '=' + i*j);
//     }
// }

// let Array = ["Batman", "SuperHero", "Spiderman"]

// console.log(Array.length)

// for (let i = 0; i< Array.length; i++){
// const element = Array[i]

// console.log(element);
// }


// break and continue

// for(let i = 1 ; i <= 20 ; i++){
//     if(i == 5){
//         console.log(`detected 5`);
//         break

//     }
//     console.log(`Value of i is ${i}`);
    
// }

for(let i = 1 ; i <= 20 ; i++){
    if(i == 5){
        console.log(`detected 5`);
        continue
    }
    console.log(`Value of i is ${i}`);
    
}