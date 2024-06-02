// 1.Create navbar and change color red using First Element.
document.body.getElementsByTagName("nav")[0].firstElementChild.style.color = "red"

// 2.Create table without tbody, use `view page source` to check does it has tbody or not in browser.
// => By opening page source, there is not tbody inside table but i we inspect the element there we will see the tbody.


// 3.Create element with 3 children, change color of first and third element to Orange.
// document.body.getElementsByClassName('changecolor')[0].firstElementChild.style.color = "orange";
document.body.getElementsByClassName('changecolor')[0].firstElementChild.style.color = "orange";
document.body.getElementsByClassName('changecolor')[0].lastElementChild.style.color = "orange";


// 4.Write JS to change color of first, third and fifth <li> to orange.
document.body.getElementsByTagName('li')[0].style.background = "orange"
document.body.getElementsByTagName('li')[2].style.background = "orange"
document.body.getElementsByTagName('li')[4].style.background = "orange"