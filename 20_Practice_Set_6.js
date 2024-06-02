// 1.Take input of Age from user and validate if he/she can drive or not.
let isValidAge = prompt(`Enter your age!`);
isValidAge = Number.parseInt(isValidAge);
// alert(`You can ${(isValidAge > 18) ? "drive!" : "drive! Bicycle!!!"}`);
console.log(`----------------------------`);

// 2.Set confirm if want to input again
if (isValidAge <= -1) {
    document.write(`Wrong Age`);
    console.error("Invalid value entered!")
}
else {
    let resetAge = confirm(`Do you want to change you age "${isValidAge}"`);
    if (!resetAge) {
        alert(`You can ${(isValidAge > 18) ? "drive!" : "drive! Bicycle!!!"}`);
    }
    else {
        isValidAge = prompt(`Enter your age!`);
        alert(`You can ${(isValidAge > 18) ? "drive!" : "drive! Bicycle!!!"}`);
    }
}

// 3.Show Error in Previous Problem if Wrong age entered
// Line no. = 10.

// 4.Change page color according to user input
let color = prompt("Enter color name : ").toLocaleLowerCase();
document.body.style.backgroundColor = color;

// 5.W.a.p. to change URL if user enters number greater than 4
alert(`Do not Enter number greater than 4`);
let ask_Num = prompt(`Enter number`);
ask_Num = Number.parseInt(ask_Num);
if(ask_Num > 4){
    location.href = `https://google.com`;
}else{
    alert(`You are Faithful, and trustable`);
}

