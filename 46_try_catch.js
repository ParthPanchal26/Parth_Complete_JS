// The try... catch is used to handel errors in the code.
/*
    => We can have an error if we try to print something not even difined.
    => In this case we can use try and catch to handel error.
*/ 

setTimeout(()=>{
    console.log("Access Granted ... Please wait!");
}, 1000);

setTimeout(()=>{
    console.log("Camera app found ... Please wait!");
}, 3000);

setTimeout(()=>{
    console.log("Opening camera app ... Please wait!");
}, 5000);

setTimeout(()=>{
    try{
        console.log(Virtual_Machine);
    } catch(err){
        console.log(`System can not be hacked:.:.:.:.:.:.:! ${err}`);
    }
}, 6000)
