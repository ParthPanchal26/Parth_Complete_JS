let fetchURL = fetch("http://localhost:3000/Seller", {
    headers:{
        Auth: 'secret'
    }
});
fetchURL.then((val)=>{
    console.log(val.status);
    console.log(val.ok);
    /* You can may use any one method at once */
    //  return val.text();   
    //  return val.blob();   
    //  return val.arrayBuffer();   
    return val.json();       
}).then((val2)=>{
    console.log(val2);
});

