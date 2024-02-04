// singleton
//object.create   // constracter method or singleton
// object literals
const mysym = Symbol("key1")
const Jsuser ={
    Name: "sameer",
    email:"sameer@gmail.com",
    "full name": "sameer chaudhary",
    [mysym]: "mykey1",
    age: 25,
    location: "jaipur",
    isloggedin:false,
    isloggedinDay:["monday", "friday"]

}
console.log(Jsuser.Name);
console.log(Jsuser["full name"])
console.log(Jsuser.mysym)
console.log(Jsuser[mysym])

Jsuser.email = "sameer@gmail.com"
//Object.freeze(Jsuser)
Jsuser.email = "sameernew@gmail.com"
console.log(Jsuser)

Jsuser.greeting= function(){
    console.log("Hello Js User")
}
console.log(Jsuser.greeting());