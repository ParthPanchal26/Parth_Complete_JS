let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Resolve");
        resolve(200);
    }, 2000);
});

p1.then(()=>{
    console.log("Always resolve First")
});

p1.then(()=>{
    setTimeout(()=>{
        console.log("resolve after 4 seconds");
    }, 4000);
});

p1.then(()=>{
    setTimeout(()=>{
        console.log("resolve after 2 seconds");
    }, 2000)
})