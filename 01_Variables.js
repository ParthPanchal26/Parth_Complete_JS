// Variables are like containers, the containers where we keep household items.
// Flour, pluses and rice are kept in contaoners at your home.
// You would know what i am talking about, but how it related to Javascript?
// Different data types can bbe stored in variables such as string, numbers, array that 
// all we'll learn about soon.
// In javascript you can change variable's type in runtime, it means if you make a string 
// in JS, later you can store number in same variable as well as arrays and objects.
// These are known as Dynamic typing.
// Static typing means you declared variable once along with data type then you can
// perform operation on it.
// There are some ruls you should follow while creatin variables : 
/*
    -> 1.Letters, digits, underscore & $ sign allowed.
        Ex. let numbers = one23456
    -> 2.Must begin with $, _ or Letters
        Ex. let numbers = _one23456
    -> 3.Javascript Reserved words can be used as variable name.
        Ex. let var = _one23456
    -> 4.Variable case is sensitive that means "Parth" and "parth" both considered as Different
        Ex. let var1 = _one23456
            let var2 = _one23456
*/ 


// Afterall let's move on real Programs.

// Syntax of Declaring variable
// let var_name;
// let var_name = constant;

var name = "Parth";
console.log('My name is ' + name);

name = "Shivani";
console.log('My name is ' + name);

name = "Anamika";
console.log('My name is ' + name);

let number = 24;
console.log("This is number : " + number)

let bool = true;
console.log("There is total 24 Tirthkar in Jain => " + bool)