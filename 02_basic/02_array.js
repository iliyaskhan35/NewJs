const marvel=["thor", "ironman","spiderman"]
const dc =["superman","flash","batman"]
 //marvel.push(dc)
// console.log(marvel);
//console.log(marvel[3][1]);
// let mycon = marvel.concat(dc)
// console.log(mycon)

// const allnewhero = [...marvel, ...dc]
// console.log(allnewhero)

const other_array = [1,2,3, [4, 5, 6], 7, [6,7, [4,5]]]

const real_aaray = other_array.flat(Infinity)

console.log(real_aaray)

console.log(Array.isArray("Iliyas"))
console.log(Array.from("Iliyas"))
console.log(Array.from({Name: "Iliyas", Age: 31}))

let score  = 100
let score1 =200
let score3 =300

console.log(Array.of(score,score1,score3));