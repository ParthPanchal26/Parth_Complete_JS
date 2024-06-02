// Cookies are small string of data stored directly in the browser.
// In JS, document Cookie provides access to cookies.

/*
 When you write
 document.cookie = "name=Parth1"
 and 
 document.cookie = "name=Parth2"
 It will not overwrite rather than that it eill add it to cookies.
*/

console.log(document.cookie);
document.cookie = "name=Parth1";
document.cookie = "name2=Parth2";
document.cookie = "/myCookie/name3=Parth3";


// An assignment to document.cookie is treat specially in a way that a write operation 
// doesn't touch other cookies.

// The EncodedURIComponent will only be four escape sequences for characters composed of two surrogate characters
let key = prompt(`Enter Your key!`);
let val = prompt(`Enter your value!`);
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(val)}`;
console.log(document.cookie);