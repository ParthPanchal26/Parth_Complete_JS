let a = prompt(`Enter any number`);
a = Number.parseInt(a);
let b = prompt(`Enter any number again`);
b = Number.parseInt(b);

let write = confirm(`Would you like to have Sum on page???`);
if(write)
    document.write(`Sum of ${a} and ${b} is : ${a+b}`);
else
    document.write(`You deny to write on page`);