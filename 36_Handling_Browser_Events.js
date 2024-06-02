let btn = document.getElementById('btn');

let a = (e) => {
    alert("Hello 1! " + e.type + " X:" + e.clientX + " Y:" + e.clientY);
}

let b = (e) => { // type of Event show   X coordinate     Y coordinate
    alert("Hello 2! " + e.type + " X:" + e.clientX + " Y:" + e.clientY);
}

btn.addEventListener('click', a); // addEventListener will add event to button element.

btn.addEventListener('click', b);

let val = prompt(`Enter 1 or 2`);

if(val == 1){ // if prompt value will 1 the function a will removed.
    btn.removeEventListener('click', a);
}else if(val == 2){ // if prompt value will 2 the function b will removed.
    btn.removeEventListener('click', b);
}else{ // if prompt value will not 1 or 2 this will execute.
    alert("Don't Enter anything else! Do as i Say!!!");
}