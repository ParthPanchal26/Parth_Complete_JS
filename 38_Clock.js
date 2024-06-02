
setInterval(() => {
    let clock = new Date();
    let hour = clock.getHours()
    let minute = clock.getMinutes();
    let second = clock.getSeconds();
    let date = clock.getUTCDate();
    let month = clock.getUTCMonth() + 1;
    let year = clock.getFullYear();

    hour = hour % 12 || 12;


    document.getElementById("h").innerHTML = hour;
    document.getElementById("m").innerHTML = ":&nbsp;&nbsp;&nbsp;" + minute + "&nbsp;&nbsp;&nbsp;:";
    document.getElementById("s").innerHTML = second;
    document.getElementById("dd").innerHTML = date;
    document.getElementById("mm").innerHTML = "-&nbsp;&nbsp;&nbsp;" + month + "&nbsp;&nbsp;&nbsp;-";
    document.getElementById("yy").innerHTML = year;
    console.log(hour, minute, second++, date, month, year);
}, 1000);