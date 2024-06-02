/* String is an array of characters or we can say Striing is 
   collection of characters */ 

// In jaascript we can use "" to define string also we can use '' to define string 
console.log("Normal String using \'\' and \"\"")
let name1 = "Parth";
console.log(name1);
let name2 = 'Parth';
console.log(name2);

// We can use Template Literals to define string
// It uses `` instead of "" or ''
console.log("-----------------------------");
console.log("String with \`\`")
let person1 = "chhagan";
let person2 = "Magan";

console.log(`${person1} says ${person2}'s wedding wedding on roof`);

// We can use "" and '' in template literals
// We can insert variables using ${var_name}


// Escape sequence characters

// If i want to use ' in '' i can use \' for ' in ''
console.log("-----------------------------");
console.log("String with Escape sequence character \\\' at banana\\\'s")
console.log("banana's calcium is good");

// We can use this to have new line also
console.log("\nThis is \ttab and this is\nnew line");

console.log("-----------------------------");