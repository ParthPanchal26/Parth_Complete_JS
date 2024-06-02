let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(`value 1`);
    }, 2000);
});
let p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(`value 2`);
    }, 3000);
});
let p3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        // resolve(`value 3`);
        reject(new Error(`This is rejected : 401`));
    }, 1000);
});

// If i want to print "All resolved" after all Promises resolved i can use Promise API Method.
// because we would not know when the data will come from server so that we use this API Method.

// let resolveAll = Promise.all([p1, p2, p3]); // This will not resolve if any of promise will rejected.
// let resolveAll = Promise.allSettled([p1, p2, p3]); // This will resolve if any of promise will even rejected.
// let resolveAll = Promise.race([p1, p2, p3]); // Will show the promise first resolve, Error if any rejected.
let resolveAll = Promise.any([p1, p2, p3]); // Will show the promise first resolve, if any promise have shoet time to resolve but if it is rejected than it will ignore, Error either all rejected or not.
resolveAll.then((value)=>{
    console.log(value); // This will Print after the longest setTimeout will resolved.
});