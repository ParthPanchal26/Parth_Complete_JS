// In the try...Catch we can have one more caluse called "finally".
// Suppose if our try block generate error then it is normal that we will write something
// to handle error in catch block, but, but, but, what happens if our catch block generates
// error then what? our code execution will stops there immediately, In this case the any 
// simple message in console.log() will also not able to execute, here the only thing can
// help is the finally caluse that gives guarantee for rest of the code execution.

try{
    console.log(`----Try block----------------------------------`);
    console.log(greet);
} catch(err){
    console.log(`----catch block--------------------------------`);
    console.log(arroe);
} 
finally{ // This will always execute even in earthquake or volcano blast, means if try_catch both have return statement or it is inside any function or any where if it exists it will execute.
    console.log(`----finally block------------------------------`);
    console.log(`Finally block always executes wether the try or catch bloch generates error or not`);
}
