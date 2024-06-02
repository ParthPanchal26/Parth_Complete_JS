let p1 = new Promise((resolve, reject)=>{
    console.log("Promise is pending");
    setTimeout(()=>{
        // console.log(`I am a promise and i am resolved`);
        resolve(53);
    }, 2000);
});

let p2 = new Promise((resolve, reject)=>{
    console.log("Promise is pending");
    setTimeout(()=>{
        reject(new Error(`I am rejected state`));
    }, 2000);
});

p1.then((val)=>{
    console.log(val);
});

p2.then((val)=>{
    console.log(val);
}, (err)=>{
    console.log(err);
})