console.log(document.body.firstChild);
console.log(document.body.lastChild);
console.log(document.body.childNodes); // This is Looks Like an Array but it is not an Array

// To make it an Array we have to use Array.from().
let ARR = Array.from(document.body.childNodes);
console.log(ARR);