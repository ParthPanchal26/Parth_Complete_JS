// To change color of card title using id 
// let cardTitle = document.getElementById('card-title')[0];
let cardTitle = document.getElementById('card-title');
cardTitle.style.color = "red";  

let cardTitleBg = document.querySelectorAll('.card-title');
cardTitleBg[0].style.background = "yellow";
cardTitleBg[1].style.background = "lightgreen";
cardTitleBg[2].style.background = "lightblue";

let button = document.querySelector('.button').style.background = "orange";

console.log(document.getElementsByTagName('div'));