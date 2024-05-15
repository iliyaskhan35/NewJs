if(true){
    let a = 10
const b = 20
var c = 30
}
//console.log(a);
//console.log(b);
//console.log(c);

// { }  This is a scope

function one (){
    const user = "Sameer"
    function two(){
        const website = "youtube"
      //  console.log(user);
    }
   // console.log(website);
    two()
}
one()

if(true){
const user = "Sameer"
if(user === "Sameer"){
 const website = "Youtube"
// console.log(user + website)
}
//console.log(website)
}
//console.log(user)

// ******************Interesting***************************

function addone(num){
    return num + 1
}

//addTwo() before use nahi kar sakte hain 
const addTwo = function(num){
    return num +2
}
//addTwo()