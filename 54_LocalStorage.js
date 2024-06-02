// LocalStorage is a web storage object which are not sent to server with each request like cookies.
// This data services a full page refresh and even a full browser restart.

// This is the most basic syntax to store Key and value in localstorage.
// localStorage.setItem("name", "Parth"); // name is key and Parth is value.

let key = prompt("Enter key : ");
let val = prompt("Enter val : ");
if (key == ' ' && val == ' ' || key == '' && val == '') {
    localStorage.clear(); // Will temove everything from localstorage.
} else {
    localStorage.setItem(key, val); // Will set the key and value to localstorage.
    console.log(`Value of ${key} is : ${localStorage.getItem(key)}`); // retrieve key and value from localstorage.
    console.log(`${localstorage.getItem(key(1))}`); // retrieve key with provided index
    if (confirm("Would you like to remove color key and value")) {
        localStorage.removeItem("color"); // Will remove key along with the value.
    }
}