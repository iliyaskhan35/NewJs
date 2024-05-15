// const coding = ["js", "ruby", "java", "python","cpp"]

// const values = coding.forEach((item)=>{                  // Not any value return
//    // console.log(item);
//     return item
// })

const number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

// let mynew =number.filter((num)=> num > 5)  // first method 
//console.log(mynew);
let mynew = number.filter((val)=>{
    return val > 4  

})

// third Method
const newnum = []

newnum.forEach((val)=>{
    if(val>4)
    {
  newnum.push(val)
    }
})

console.log(mynew);

