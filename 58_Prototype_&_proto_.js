/*
    Prototypal Inheritance : 
    -> Javascript object has special property called prototype that is either null or
     reference another object.
         ___________________
        | Prototype object |
        ------------------
                 ^
                |    [[ Prototype ]]
         ______|_____
        |   Object  |
        ------------

    -> When we try to read property from object and its missing, JS automatically takes
    it from Prototype, This is called "Prototypal Inheritance".
*/

/* 
    Setting Prototype : 
    -> We can set Prototype by setting __proto__ now if we read a property from the object
    which is not in object and id present in prototype , JS will take it from prototype.

    -> If we have a method in object, it will be called from the object, if it missing in
    object and present in prototype its called from prototype.
*/

let a = {
    name: "Parht",
    language: "Javascript",
    run: () => {
        console.log("a is running")
    }
}

let p = {
    run: () => {
        console.log("run")
    }
}

p.__proto__ = {
    number: 24
}

a.__proto__ = p; // If run is also present in a, it will execute from a.
a.run(); // This will throw error until we do not ddefine prototype.
console.log(a.number); // This will goto a if it not found it will goto its prototype even there it doesn't found it will goto its prototype when it founds it it will execute it, this will make chain.
