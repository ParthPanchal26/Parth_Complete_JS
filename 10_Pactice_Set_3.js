// 1.W.a.p. to print thw marks of a student in an object using for loop.
console.log("--------------------------------");
console.log("Print marks of students using for loop.");
const marks = {
    Parth: 99,
    Anamika: 98,
    Shivani: 97
}

for(let i = 0; i < Object.keys(marks).length; i++){
    console.log("Marks of " + Object.keys(marks)[i] + " is : " + marks[Object.keys(marks)[i]]);
}                    // will retrieve all keys,[i] is index      will retrieve value of keys

console.log("--------------------------------");

// 2.Use For in loop for Q.1 again.
console.log("Using For-in loop for problem 1.");
for(let i in marks){
    console.log("Marks of " + i + " is : " + marks[i]);
}

console.log("--------------------------------");

// 3.W.a.p to print "try again" until user enter correct number.
console.log("Print Try again until correct input.");
var i = 23;
let j;
while(j!=23){
    console.log("Try again");
    j=23;
}
console.log("You have entered perfect no.");
console.log("--------------------------------");


// 4.Write a function to find mean of 5 no.
console.log("Mean of first 5 no.");
const mean = () => {
    return 0 + 1 + 2 + 3 + 4 / 5;
}
console.log(mean())
console.log("--------------------------------");