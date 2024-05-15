// for of 
// ["", "", " "]
//[{}, {}, {}]

const myarray = [1,2,3,4,5,6,7]

const arr = ["string1","string2", "string3","string4"]

// for (const val of myarray) {

//     console.log(val);
    
// }

// for (const val  of arr) {
//     console.log(arr);
    
// }

const greetings = "Hello World"

for (const greet  of greetings) {
   // console.log(`Each char is ${greet}`);  // practice continue and break
    
}

const map = new Map()
map.set('In' , "India")
map.set('USA' , "Uited state of america")
map.set('KSA' , "Kingdom of Saudi Arabia")

for (const [key , value] of map){
  //  console.log(key, ':', value );
}

// const myobj ={
//     game: "Spider",
//     game1: "pubb"     // myobj is not iterable
// }

// for( const [key, value] of myobj){
//    // console.log(key , ":", value);
// }


const newobj = {
    Js: 'Javascript',
    cpp: 'C#',
    rb: "ruby",
    swift: "swift by aplle"

}

for (const key in newobj) {
  // console.log(key);
}

for ( const key in newobj){
    //console.log(newobj[key]);
   // console.log(`${key} shortcut is for ${newobj[key]}`);
}

// const programming = ["js", "java", "angular"]  // print keys 

// for (const key in programming) {
//     console.log(programming[key]);
//    // console.log(`${key} Value is a ${programming[key]}`);
// }


const coding =["java", "c Sharp","python", "cpp"]

// coding.forEach( function (item){
//     console.log(item);
// })

// coding.forEach((item)=>{
// console.log(item);
// })

// function printme (item){
//     console.log(item);
// }

// coding.forEach(printme)


// coding.forEach((item, index, arr)=>{
// console.log(item, index, arr);
// })

const mycoding = [
    {
        Languagename: "Javascript",
        LanguageFile: "Js"
    },
    {
        Languagename: "Java",
        LanguageFile: "Java"
    },
    
    {
        Languagename: "Python",
        LanguageFile: "ph"
    },
    {
        Languagename: "Angular",
        LanguageFile: "Ag"
    }
    
]

mycoding.forEach((item)=>{
    console.log(item.Languagename, item.LanguageFile);

})