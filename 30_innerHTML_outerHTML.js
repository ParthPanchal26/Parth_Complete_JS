let span_1 = document.getElementsByTagName('span')[0];
console.log(span_1);
console.dir(span_1); // The console.dir shows the element as an object with its all roperties.

console.log(span.innerHTML); // innerHTML is used to get html inside  the element as string.

console.log(span.outerHTML); // it contains the full HTML, innerHTML + element it-self also.

console.log(document.body.textContent); // Will show all text from site.