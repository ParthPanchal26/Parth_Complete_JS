let a = document.getElementsByTagName('div')[0];
// a.innerHTML = a.innerHTML + '<h1>Hello World!</h1>'

let div = document.createElement('div');
div.innerHTML = '<h1>Hello world!</h1>';
a.append(div); // Will become last child inside container.
a.prepend(div); // Will become first child inside container.
a.before(div); // Will insert before first node.
a.after(div); // Will insert outer container at bottom.
a.replaceWith(div); // Will remove the container and place this custom div.