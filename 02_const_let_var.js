// Var can be Updated and Re-builed in its scope

var a = "Parth";
console.log(a)
var a = 5;
console.log(a)

// let can be updated but can not re-builed

let b = "PARTH";
console.log(b)
// let b = 5;      => Throws an Error
// console.log(b)  => Throws an Error

// const can not updated and can not re-builed
// When you define constant you must assign it value
// You can also assign "undefined" to constant
const framwork = "Angular"
console.log(name)