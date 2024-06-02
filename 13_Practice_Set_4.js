// 1.What will the output of following code.
// console.log("Parth\"".length); ==> Lenght of String => 6
console.log("------------------------------");
console.log(`Length of "Parth\\\"" is ${"Parth\"".length}`);
console.log("------------------------------");

// 2.Explore the includes, startWith & endWith methods of string.
// Includes method
let findIn = "My name is Parth and i am learning Javascript";
console.log(`The word "Parth" ${findIn.includes("Parth") ? "is in string" : "is not in String"}`);

console.log(`${findIn} start with 'P' ${findIn.startsWith("P") ? ": true" : ": false"}`);

console.log(`${findIn} ends with 't' ${findIn.endsWith("t") ? ": true" : ": false"}`);

console.log("------------------------------");

// 3.W.a.p. to convert a string to lowercase.
let change_Str = "PARTH_PANCHAL";
console.log(change_Str + " in lowercase : " + change_Str.toLowerCase());

// 4.Explore thr amount of this String.
// "Please complete basics first."
console.log("------------------------------");
let amount_str = "I need ammo, 120.";
let amount = Number.parseInt(amount_str.slice("I need ammo,".length));
console.log(`In ${amount_str} amount of ammo is ${amount}`);

// 5.Change the 4th character of string.
console.log("------------------------------");
let change_chr = "ABCDE";
change_chr[3] = 'F';
console.log(change_chr); // The string does not changed because strings are immutable and cannot changable.