let first = document.getElementById('first');

// console.log(first.classList); // Will list classes assigned to element.

// first.className = 'yellow text-dark'; // Using className we can assign element to any classes.

first.classList.toggle('yellow'); // Will assign class if not assigned OR remove class if assigned
first.classList.toggle('text-dark');
first.classList.toggle('text-light');
first.classList.toggle('red');

first.classList.contains('red'); // Will return True or False according to class is present or not