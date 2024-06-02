/*
    1. Write a function to load javascript in browser using promise, user .then() 
    to display alert in browser when it completed.
*/

const loadScript = async (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.src = src;
        document.body.append(script);
        script.onload = () => {
            resolve(src);
        }
    });
}

console.log(`Problem 1`);
let a = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js");
a.then((value) => {
    console.log(value);
});

// 2.Use async - await for problem 1

const loadSRC = async () => {
    let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js");
    console.log(`Problem 2`);
    console.log(a);
}

loadSRC();

// 3.Create a promise which reject after 3 seconds using asynce await adn try catch block.
let p1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Not acceptable"));
        }, 3000);
    });
}

let p1Reject = async () => {
    try {
        let p1Rej = await p1();
        console.log(p1Rej);
    } catch (err) {
        console.log(err);
    }
}

p1Reject();

/*
 4. Write a program using Promise.all() inside async_await to await 3  promises. 
 Compare its results with the case where we await these promises one by one. 
*/

let promise1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(24);
        }, 3000);
    });
}

let promise2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(24);
        }, 1000);
    });
}

let promise3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(24);
        }, 2000);
    });
}

const exePromise = async () => {
    console.time("Start");
    // let exeP1 = await promise1();
    // let exeP2 = await promise2();
    // let exeP3 = await promise3();

    let exeP1 = promise1();
    let exeP2 = promise2();
    let exeP3 = promise3();
    let logAll = await Promise.all([exeP1, exeP2, exeP3]);
    console.log(logAll)
    console.timeEnd("Start");
    // logAll.then((val)=>{
    //     console.log(val);
    // })
}

exePromise();