const firstname = "Iliyas"
const last = "Chaudhary"

// console.log(firstname + last)

// console.log(`Hello Sir my first Name is ${firstname} and my Last name is ${last}`)

const Gamename = new String('Sanjay-kumar-sing')

// console.log(Gamename)
// console.log(Gamename.length)

// console.log(Gamename.toUpperCase());
// console.log(Gamename.charAt(5))
// console.log(Gamename.indexOf('a'))
// console.log(Gamename.slice(1,5))
const myString = Gamename.slice(-5,0)
console.log(myString);
// const newString = Gamename.substring(0,6)
// console.log(newString)

const removeString = '  Iliyas   '
console.log(removeString.trim())

const url ="https://www.csinfosoft.com/iliyas%20Chaudhary"

console.log(url.replace('%20', '-'))
console.log(url.includes('iliyas'))
console.log(Gamename.split('-'))