/* 
    -> Session storage exist only within the current browser tab, another tab with same page 
    Will have different storage.

    -> The data survive Page Reload, but not closing/opening the tab.
*/ 

// let key = prompt("Enter key : ");
// let val = prompt("Enter val : ");
// if (key == ' ' && val == ' ' || key == '' && val == '') {
//     sessionStorage.clear(); // Will temove everything from sessionStorage.
// } else {
//     sessionStorage.setItem(key, val); // Will set the key and value to sessionStorage.
//     console.log(`Value of ${key} is : ${sessionStorage.getItem(key)}`); // retrieve key and value from sessionStorage.
//     console.log(`${sessionStorage.getItem(key(1))}`); // retrieve key with provided index
//     if (confirm("Would you like to remove color key and value")) {
//         sessionStorage.removeItem("color"); // Will remove key along with the value.
//     }
// }

// Storage Event.
/*
    -> When the data gets updated into sessionStorage or localstorage, session event
       triggers with these properties. 

       key -> The key
       old value -> Previous value
       new value -> new value
       URL -> Page URL
       StorageArea -> local or  sessionStorage

    -> We can listen the  onstorage event of window which is triggered when updates are
       made to the same storage from other documents. 
*/

window.onstorage = (e) => {
    alert("Changed.");
    console.log(e);
}