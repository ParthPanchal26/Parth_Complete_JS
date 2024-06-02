let id1 = document.getElementById('id1');
console.log(id1);
console.log(id1.matches('.class')); // Used to check element matches the given css selector.
console.log(id1.matches('.box'));

let span1 = document.getElementById('span1');
console.log(span1);
console.log(span1.closest('.box')); // Used to look for nearest ancestor that matches the given CSS selector.

console.log(id1.contains(span1)); //Return truw id ele2 is inside ele1, also when ele2 == ele1, Return false when ele2 is not inside ele1z