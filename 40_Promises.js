/* Pyramid of Doom OR Callback of hell
   => From 39_callbacks.js
   const greet = () => {
    if(err){
        console.error(err)
    }
    console.log("Good Morning!");
    }
    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js", greet);

    => If we take look at this code we are passing whole function as argument, by this way in future someone can change anything with the function and can damaged the code.
    => To resolve this issue rather than passing function as argument we can pass another function that loads another script if this script is loaded and so on.

*/

//    => It will Look like this : 

/*
    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js", function greet(err) {
        if (err) {
            console.error(err);
            return;
        } // If no error than load this
        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js", function greet(err) {
            if (err) {
                console.error(err);
                return;
            } // If no error than load this
            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js", function greet(err) {
                if (err) {
                    console.error(err);
                    return;
                } // If no error than load this
                loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js", function greet(err) {
                    if (err) {
                        console.error(err);
                        return;
                    } // If no error than load this
                    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js", function greet(err) {
                        if (err) {
                            console.error(err);
                            return;
                        } // If no error than load this
                        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js", function greet(err) {
                            if (err) {
                                console.error(err);
                                return;
                            } // If no error than load this
                            ...
                        });
                    });
                });
            });
        });
    });
*/ 

/*
 => This will goes continue and never stops and the code will look like a pyramid with 
    this unlimited Callbacks this is why it is called "Pyramid of doom". 

 => To resolve this issue we use Promises.
*/ 

/*  "Promises"
 => A Promises are the "Promises of code Execution", The code either execute or fails 
    in both cases the subscriber will notifyed.
 => Syntax : 
    let promise = new Promise(()=>{
        ...
    });
*/ 
let promise = new Promise((resolve, reject)=>{
    resolve(56)
});
console.log("Execution 1");
setTimeout(()=>{
    console.log("Execution 2");
}, 3000);
console.log("Execution 3");
console.log(promise)