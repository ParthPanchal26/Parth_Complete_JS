// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log(`Execute after 2 seconds`);
//         resolve(23);
//     }, 3000);
// });

// p1.then((val) => {
//     console.log(val);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Promise P2")
//         }, 3000)
//     })
//     return p2;
// }).then((val) => {
//     console.log("P2 resolved");
//     return `we can use multiple .then() to avoid callback hell and resolve the issue`;
// }).then((val) => {
//     console.log(val)
// });

// Let's do rewrite loadScript function again with Promise chaining.

let loadScript = (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.src = src;
        document.body.appendChild(script);
        script.onload = () => {
            resolve(200);
        }
        script.onerror = () => {
            reject(401);
        }
    });
}

let loadSRC = loadScript(`https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js`);
loadSRC.then((val)=>{
    console.log(`Script Loaded Successfully! ${val}`);
    console.log("First Script!");
    loadScript(`htts://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js`);
}).then(()=>{
    console.log("Second Script!")
    loadScript(`httsp://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js`);
}).then(()=>{
    console.log("We Did It!")
}).catch((err)=>{
    console.log(`Script can not be loaded!!! ${err}`);
})