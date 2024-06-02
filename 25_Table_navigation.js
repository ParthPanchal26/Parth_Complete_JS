let table = document.body.firstElementChild.firstElementChild;
console.log(table);
console.log(table.rows); // Collection of all tr elements
console.log(table.caption); // Will find caption from table
console.log(table.tHead); // Will find thead elements
console.log(table.tHead.firstElementChild); // will find first element inside thead element
console.log(table.tBodies); // Will give Collection of tBody elements
console.log(table.tBodies[0].rows); // Will give Collection of all rows from tbody
console.log(table.rows[0].cells); // Will give Collection of each cells from first row
console.log(table.rows[0].sectionRowIndex); // will give index of the first row within its section
console.log(table.rows[0].cells[1].cellIndex); // will give index of the second cell in the first row