//const tinderuser = new Object()
const tinderuser ={}
tinderuser.id="123abc"
tinderuser.name="summary"
tinderuser.isloggedin=false
//console.log(tinderuser)

const regularUser={
    email: "sam@gmail.com",
    fullname: {
        userfullname:{
            firstname:"sam",
            lastname:"chaudhary"
        }
    }

}
//consol.log(regularUser.fullname.userfullname.firstname)
const obj1 ={
    1:"a",
    2:"b"
}
const obj2 ={3:"a",4:"b"}
const obj5 ={5:"a",5:"d"}
const obj3 ={obj1, obj2} // first method
//const obj4 = Object.assign({},obj1, obj2, obj5)
const obj6 ={...obj1,...obj2,...obj5}
//console.log(obj3)
//console.log(obj6)


const user = [
    {
        id:1,
        email:"sam12@gmail.com"
    },
    {
        id:2,
        email:"sam13@gmail.com"
    },
    {
        id:3,
        email:"sam14@gmail.com"
    },
    {
        id:4,
        email:"sam15@gmail.com"
    },
    {
        id:5,
        email:"sam16@gmail.com"
    }
]
user[1].email

// console.log(tinderuser)

// console.log(Object.keys(tinderuser)) /// Important
// console.log(Object.values(tinderuser)) /// Important
// console.log(Object.entries(tinderuser)) 

// console.log(tinderuser.hasOwnProperty('isloggedin'));

               //Destructuring of obejct
 const destructuring={
    coursename:"English",
    price:"999",
    courseinstractor:"hindi"
 }
 //course.courseinstractor    
 
const {courseinstractor: ins} = destructuring
const { price} = destructuring
console.log(ins)
console.log(price)

