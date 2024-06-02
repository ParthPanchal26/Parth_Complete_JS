// We can create function to Avoid re wring same code multiple times.
function func(/* Parameters */){ // This is the Syntax and example of simple, normal funtion
    console.log("Hello There Today is 10-07-2023 Monday, And my name is parth panchal i am learning JS to learn DSA to start Leetcode for getting hier in Google, microsoft, etc, etc.");
}
func(/* Arguments */);

// This is called an Arrow function.
const name = () => {
    console.log("\nMy name is Parth Panchal.");
}

name();


//  Write Program to add two numbers;

let num1 = 5;
let num2 = 6;

const sum = (no1, no2) => {
    console.log("\n" + num1 + " + " + num2 + " = " + (num1+num2));
}

sum(num1, num2);
