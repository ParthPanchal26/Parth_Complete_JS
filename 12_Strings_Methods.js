// The Parth name hase only 5 characters so it will return lenght = 5
// Note. : The escape sequence characters have 1 lenght 
// For ex., \' = 1, \"\" = 2, etc.

// String length
let name1 = "\"Parth\"";
console.log(name1.length);

// String UPPERCASE
let name2 = "uppercase";
console.log(name2.toUpperCase());

// String lowercase
let name3 = "LOWERCASE";
console.log(name3.toLowerCase());

// String slice
let name4 = "Slice me";
console.log(name4.slice(2, 8));
// The slice method will take 2 arguments and in slice(2, 8) it will print from index 2 to index 7 because index 8 will not included
// The second argument always not included

// String replace
let name5 = "Replace me";
console.log(name5.replace("Replace", "Punch"));
// The replce method also take two arguments and replce first argument with second argument

// String concat
let firstName = "Parth";
let lastName = "Panchal";
console.log(firstName.concat(" ", lastName));
// String concat joints two Strings

// String Trim
let trimString = "                      Parth                           ";
console.log(trimString.trim());
// The trim will Remove all the White Spaces from starting and ending side of string

let str = "Parth";
console.log("-----------------------")
console.log("This is for loop")
for(i=0; i<str.length; i++){
    console.log(str[i]);
}
let j = 0 
console.log("-----------------------")
console.log("This is whilr loop")
while(j<str.length){
    console.log(str[j]);
    j++;
}