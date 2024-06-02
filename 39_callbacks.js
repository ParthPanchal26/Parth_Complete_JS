/* Synchronous programming.
   =>These are the actions that are initiated and executed one-by-one, For ex; prompt.
   let name = prompt(`What is your name?`);
   let age = prompt(`What is your age?`);
*/ 
 
/* Asynchronous programming.
   => These are the actions in programming which are if initiated now then it will 
   definitely execute, May be after soem time but it will execute, For ex; the Timeout 
   method.
   setTimeout(()=>{
    console.log("After 3 seconds will execute");
}, 2000);
*/ 

/* Callbacks */

const loadScript = (src, Callbacks) => {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => {
        console.warn(`Script Loaded`);
        Callbacks(null);
    }
    script.onerror = () => {
        console.error(`Can not load script ${src}`); 
        Callbacks(new Error("src has error"))
    }
    document.body.appendChild(script);
}

const hello = (err) => {
    if(err){
        console.error(err);
        return;
    }
    console.log("Hello");
}

const greet = () => {
    console.log("Good Morning!");
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js", greet);