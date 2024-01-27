const myarray = [0,1,2,3,4,5]
const myfav = ["First", "second","third", "Four","Five"]
 //console.log(myfav)
//const myArray2 = new Array(1,2,3,4)
console.log(myarray[2])

//Array methods

// myarray.push(6)
// myarray.push(7)
// myarray.push(8)
// myarray.pop()
// myarray.unshift(9)
// myarray.shift()
// console.log(myarray)
// console.log(myarray.includes(19))
// console.log(myarray.includes(2))
// console.log(myarray.indexOf(4))

// const newArry = myarray.join()
// console.log(myarray);
// console.log(newArry);
// console.log(typeof newArry);

// slice and splice

console.log("A" , myarray);

const myn1 = myarray.slice(1,3)
console.log(myn1);
console.log("B", myarray)

const myn2 = myarray.splice(1,3)  // original array manupulate 
console.log(myn2);
console.log("c", myarray)