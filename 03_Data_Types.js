// There are two types of data types : Primitive and non-Primitive
// Primitive are : null, number, string, symbol, boolean, bigint, undefined
// non-primitive : object

let a = null;
console.log("This is " + a + " type");
let b = 123;
console.log("This is number : " + b);
let c = "Parth";
console.log("My name is " + c);
let d = Symbol("P");
console.log("This is ")
console.log(d);
let e = true;
console.log("My Family jindabad => " + e);
let f = BigInt("123");
console.log("This is bigInt denoted by 'n' : " + f);
let g = BigInt("123") + BigInt("321");
console.log("This is addition of 123+321 which is : " + g);
let h = undefined;
console.log("Why am i " + h + "?"); 

console.log("----------------------------------------------")

// We can use typeof to check data type of variable
console.log(typeof g);
console.log("----------------------------------------------")

// Non-Primitive type : object

const data = {
    "FirstName": "Parth",
    "LastName": "Panchal",
    "MERN_Stack": false,
    "MEAN_Stack": true,
    "contact_no": undefined
}

console.log(data)
console.log(data.FirstName)