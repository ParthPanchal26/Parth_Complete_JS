let numbers = [1, 2, 3, 4];
// for loop to print square of array elements
console.log("----------------------");
console.log("Using for Loop");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i] * numbers[i]);
}
console.log("----------------------");

// ForEach loop to print square of array elements
console.log("Using forEach loop");
numbers.forEach(j => {
    console.log(j * j);
});
console.log("----------------------");

// For of Loop
console.log("Using for of loop");
for (let a of numbers) {
    console.log(a)
}
console.log("----------------------");

// For in loop
console.log("Using for in loop");
for (let b in numbers) {
    console.log(b); //Will Print keys of object, In array Index is key of Arrays
}

// Array from method to make array of any other object, For ex; String.
console.log("Array from method");
let arr_str1 = "Parth";
let arr_str2 = Array.from(arr_str1);
console.log(arr_str2);
console.log("----------------------");

// Array map method to print array elements
console.log("Array map method");
let arr_map = [1, 2, 3];
let map_arr = arr_map.map((val, index) => { // The map method can have 3 parameters value, index and array
    console.log(val, index);
    return val + 1;
})
console.log(map_arr);
console.log("----------------------");

// Array Filter method to print array elements smaller than 5
let arr_filter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let filtered_arr = arr_filter.filter((a) => {
    return a < 5;
});
console.log(filtered_arr);
console.log("----------------------");

// Array Reduce method
console.log("Array Reduce method");
let arr_red = [1, 2, 3, 4, 5, 6, 7];
let red_arr = arr_red.reduce((a1, b1,) => {
    return a1 + b1;
})
console.log(red_arr);
console.log("----------------------");