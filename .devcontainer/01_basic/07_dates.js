let Mydate = new Date();
// console.log(Mydate.toString());

// console.log(Mydate.getTime())
// console.log(Mydate.toDateString())
// console.log(Mydate.toLocaleDateString())
// console.log(typeof Mydate);
//let MycreateDate = new Date(2023, 0 ,23) // month display jan
//let MySecondDate = new Date(2023, 1 ,24)
//let MythirdDate = new Date(2023, 0, 23, 5,3)
// let MyfourthdDate = new Date("2023-01-14")
let Myfifth = new Date ("01-14-2023")
//console.log(MycreateDate.toDateString());
//console.log(MySecondDate.toDateString());

//console.log(MythirdDate.toLocaleString());
//console.log(MythirdDate.toISOString())
// console.log(MyfourthdDate.toLocaleString());
//console.log(Myfifth.toLocaleString())
let MytimeStamp = Date.now()
console.log(MytimeStamp);
console.log(Myfifth.getTime())

console.log(Date.now())
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
// console.log(newDate)
console.log(newDate.getDate())
console.log(newDate.getFullYear())