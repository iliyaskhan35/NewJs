//Immediately Invoked Function Expression (IIFE)

// function Minsa(){
//     console.log(`DB CONNECTED`);
// }
//Minsa()
(function Minsa(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();  // agar ; nahi lga rahega to error dega 

// (()=>{
// console.log("DB CONNECTED 2");
// })()

//With variable and value
((name) => {
    console.log(`db conncetion three ${name}`);

})("Sameer Chaudhary")
