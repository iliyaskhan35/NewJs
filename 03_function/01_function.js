function My(){
console.log("s");
console.log("a");
console.log("m");
console.log("e");
console.log("e");
console.log("r");
}
My()
//My

// function addTwoNumber(num1, num2){ // num1 and num2 is a parameter

// console.log(num1+num2);

// }
function addTwoNumber(num1, num2){ // num1 and num2 is a parameter
  // 1st Method
//    let result = num1 + num2
//    return result
 //  console.log("sameer"); // not print because resut define in above

 // 2nd Method
 return num1 + num2
    }

addTwoNumber(); // output NaN becasue argument not passes 

//addTwoNumber(2,5);
//addTwoNumber(2,null);  // 2, null is argument not a parameter

const result = addTwoNumber(3,4)

//console.log("Result:", result)

function loginusermessage(username= "sam"){
  if(!username){
    console.log("Pease enter user name");
   return

  }
  return `${username} just logged in`

}
//console.log(loginusermessage("Iliyas"))
console.log(loginusermessage()) // empty value

// ... three dot is a Rest operator 
function calculateCartPrice(val1, val2, ...num1 ){ 
 return num1
}

console.log(calculateCartPrice(200,400,500,1000))
// out put [500,1000]


const user = {
  username: "Sameer",
  price: 1999
}

function handleobject(anyobject){

  console.log(`User Name is ${anyobject.username} and price is ${anyobject.price}`)

}
handleobject(user)

handleobject({
  username: "sam",
  price:399
})

const MyNewarry = [200,300,400,500]


function returnSecondValue(getarray){
  return getarray[1]
}

//console.log(returnSecondValue(MyNewarry))

console.log(returnSecondValue([200,500,600,800]))
