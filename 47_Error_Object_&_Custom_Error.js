try {
    // console.log(name); // Name is not defined so the catch block will execute.
    let age = prompt(`Enter Your age : `);
    age = Number.parseInt(age);
    if (age < 0 || age > 130) {
        // Using this we can send an Error.
        throw new ReferenceError(`Invalid Age.`);
    }
    console.log(`-------------------------------------------`);
} catch (err) { // Here the "err" is the Error Object.
    console.log(`----Whole Error----------------------------`);
    console.log(err); // Will print whole error.
    console.log(`----Name of Error--------------------------`);
    console.log(err.name); // Will print name of error.
    console.log(`----Message of Error-----------------------`);
    console.log(err.message); // Will print the error message => name is not defined.
    console.log(`----Stack of Error-------------------------`);
    console.log(err.stack); // Will print whole error.
    console.log(`-------------------------------------------`);
}