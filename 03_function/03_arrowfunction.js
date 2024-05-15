const user = {
    username : "Sameer",
    price : 999,
    welcomemessage: function(){
    console.log(`${this.username}, Welcome to website`)
    console.log(this);  //  this is represt current context 
    }

}

// user.welcomemessage()
// user.username = "Sam"
// user.welcomemessage()

//console.log(this)  // this is represt is a empty object


// function myfunction(){
//     let username = "Sameer"
//     console.log(this);   // this keyword not allow in function 
// }
// myfunction()

// const Minsa= function(){
//     let username = "Smeer saini"
//     console.log(this.username);
// }
const Minsa=()=>{
    let username = "Smeer saini"   // this is arrow function
    console.log(this.username);
}
//Minsa()

// const arrow = (num1, num2)=>{
//     return num1 + num2

// }
//console.log(arrow(3, 8))
//const arrowsecond = (num1, num2)=> num1 + num2


//Object return

const addTwo = (num1 , num2) => ({username: "Sam Cahudhar"})

console.log(addTwo(2,8))
//console.log(arrowsecond(3, 8))

// 