// 1.W.a.p to show different alert on different buttons.

// 2.Create a website to store your favorite website bookmark using href

// 3.Repeat second with event listeners.

document.getElementById('sof').addEventListener('click', function(){
    window.location = "https://www.StackOverFlow.com/";
    win.focus();
});

// 4.Writ JS to keep fetching content of a website for each 5 seconds.
let a = 0; 
const fetchContent = async(URL) => {
    con = await fetch(URL);
    let a = await con.json();
    return a;
}

setInterval(async ()=> {
    let URL = "https://jsonplaceholder.typicode.com/todos/1";
    console.log(await fetchContent(URL));
    document.getElementById('inc').innerText = a;
    a++
}, 1000);

// 5.Create a bulb.
setInterval(()=>{
    document.querySelector('#bulb').classList.toggle('bulb2');
}, 1)