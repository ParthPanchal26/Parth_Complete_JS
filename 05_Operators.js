// In JS we have many Types of Operators let's understand them one by one

// Arithmetic Operators

let arith1 = 3;
let arith2 = 2;
console.log("Arithmetic Operators .");
console.log(arith1 + " + " + arith2 + " = " + (arith1+arith2));
console.log(arith1 + " - " + arith2 + " = " + (arith1-arith2));
console.log(arith1 + " * " + arith2 + " = " + (arith1*arith2));
console.log(arith1 + " / " + arith2 + " = " + (arith1/arith2));
console.log(arith1 + " % " + arith2 + " = " + (arith1%arith2));
console.log(arith1 + " ** " + arith2 + " = " + (arith1**arith2)); // arith1 Raise to the power arith2
console.log("++" + arith1 + " = " + (++arith1));
console.log(arith1 + "++" + " = " + (arith1++));
console.log("--" + arith2 + " = " + (--arith2));
console.log(arith2 + "--" + " = " + (arith2--));
console.log("--------------------------");


// Arithmetic Operators

let assignment1= 5;
let assignment2 = 5;
console.log("Assignment Operators .");
console.log(assignment1 + " += 5 : " + (assignment1 += 5));
console.log(assignment1 + " -= 5 : " + (assignment1 -= 5));
console.log(assignment1 + " *= 5 : " + (assignment1 *= 5));
console.log(assignment1 + " /= 5 : " + (assignment1 /= 5));
console.log(assignment1 + " **= 2 : " + (assignment1 **= 2));
console.log(assignment1 + " %= 5 : " + (assignment1 %= 5));
console.log("--------------------------");


// comparison Operators

let com1= 5;
let com2 = 3;
let com3 = '5';
console.log("Comparison Operators .");
console.log(com1 + " == " + com2 + " : " + (com1==com2));
console.log(com1 + " != " + com2 + " : " + (com1!=com2));
console.log(com1 + " === " + com2 + " : " + (com1===com3));
console.log(com1 + " !== " + com2 + " : " + (com1!==com2));
console.log(com1 + " < " + com2 + " : " + (com1<com2));
console.log(com1 + " <= " + com2 + " : " + (com1<=com2));
console.log(com1 + " > " + com2 + " : " + (com1>com2));
console.log(com1 + " >= " + com2 + " : " + (com1>=com2));
console.log("--------------------------");

// Logical Operators

let logi1= 2;
let logi2 = 3;
let logi3 = 1;
console.log("Logical Operators .");
console.log(logi1 + " > " + logi2 + " && " + logi3 + " < " + logi2 + " : " + (logi1>logi2 && logi3 < logi2))
console.log(logi1 + " > " + logi2 + " || " + logi3 + " < " + logi2 + " : " + (logi1>logi2 || logi3 < logi2))
console.log("--------------------------");


// We have previously used comments most times.
// In JavaScript we can implement comments in two ways.

// This is a "Single line" comment.

/* This is
   Multiline
   comment */

/* Comments are the part of code which is ignored by compiler wile executing the code
   we can create comments to improve readability of code */