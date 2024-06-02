let first = document.getElementById('first');
console.log(first.getAttribute("class")); // Used to check attribute value.

console.log(first.hasAttribute("style")); // Used to check if attribute used or not.
console.log(first.hasAttribute("class")); // Return True if attribute present or return false.

first.setAttribute("hidden", ""); // sets Hidden property on th element

first.setAttribute("class", "container_Class"); // Used to change class name

first.removeAttribute("hidden"); // To remove attribute

console.log(first.dataset); 