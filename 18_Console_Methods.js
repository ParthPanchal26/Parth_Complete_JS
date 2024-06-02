// In javascript we have so many console methods but here we are going to talk about some most important and most time used methods
console.clear();
console.log("console\.clear Used to clear console"); //Used to clear console
console.log("----------------------------------------------");

console.log("This is console\.log Used to output a message to console"); // Used to output a message to console
console.log("----------------------------------------------");

console.log("console\.assert is used to assert a condition.");
console.assert(124>234);
console.log("----------------------------------------------");

console.log("console\.table is used to display tabular data");
const obj = {
    Firstname: "Parth.",
    Lastname: "Panchal.",
    Education: "Computer Engineering.",
    Current_Position: "I am still Student.",
    Occupation: "professional Software developer in future.",
    Salary: "9999999999999999999....E909, Ya! its small amount but i will increase it."
}
console.table(obj);
console.log("----------------------------------------------");

console.log("console\.warn is used to display warnings.");
console.warn("This is final warning, Do code, code, and only code.");
console.log("----------------------------------------------");

console.log("cosnole\.error is used to display an Error.");
console.error("This is an Error.");
console.log("----------------------------------------------");

console.log("We have console\.time(String) this is starting of time");
console.time("Process p1");
console.log("Process p1 started");
console.log("----------------------------------------------");

console.log("To end time we have console\.timeEnd(String) to see the time process taken, here String will be same as in time method");
console.timeEnd("Process p1");
console.log("Process p1 Ended");
console.log("----------------------------------------------");
