// 1.Add a number to a String.
let str = "one";
let num = 2;

let add = str + num;

console.log(add) // => one2

// 2.Use typeof to find data type of previouse addition

console.log(typeof (str+num));

// 3.Create a constant object, can you change it to hold a number later?

const obj = {
    name: "Parth",
    surname: "Panchal",
    id: 1,
}
// obj = 5 => Will throw Error, we can not change or update its value because it is constant

// 4.Add a new key to the obj object 

obj['salary'] = 999999999999999

console.log(obj.salary)

// 5.Write a Program to create word meaning dictionary.

const dictionary = {
    appareciate: "recognize full worth of.",
    ataraxia: "a state of freedom from emotional disturbance and anxiety",
    yakka: "work, espacially hard work"
}

console.log(dictionary.yakka)