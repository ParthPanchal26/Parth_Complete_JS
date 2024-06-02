// 1.Create an array and take input from user and add it to array.
console.log("----------------------------------------");
console.log("Take input and add to array.")
let arr1 = [1, 2, 3];
// let user_Input = prompt("Enter Number : ");
// let user_Input = Number.parseInt(user_Input);
// arr1.push(user_Input);
let user_Input = 4;
console.log(arr1, arr1.push(user_Input));
console.log("----------------------------------------");

// 2.Keep add numbers to array until user not enter 0.
console.log("Keep add numbers to array ubtil user enters 0");
let valid_While = true;
// let add_input = 2;
// while(valid_While){
//   if(add_input != 0){
//     add_Arr.push(add_input);
//     valid_While=true
//   }
//   else{
//     console.log("You entered 0");
//     valid_While=false
//   }
// }

let add_Arr = [45, 23, 67];
let add_input;
// while(add_input != 0){
//   add_input = prompt("Enter Number : ");
//   add_input = Number.parseInt(add_input);
//   add_Arr.push(add_input);
// }
console.log(add_Arr);
console.log("----------------------------------------");

// 3.Use filter to print numbers divisable by 10 from array.
console.log("Filter array to print no. divisale by 10.");
let d_arr = [56, 75, 90, 20, 3];
console.log(d_arr.filter((x)=>{
  return x%10 == 0;
}));
console.log("----------------------------------------");

// 4.Use map to print square of numbers.
console.log("Map to print square of numbers.");
let s_arr = [56, 75, 90, 20, 3];
console.log(s_arr.map((x)=>{
  return x*x;
}));
console.log("----------------------------------------");

// 5.Calcute factorial of numbers from array
console.log("Reduse to print factorial of numbers.");
let fact_arr = [54, 53, 54, 48];
console.log(fact_arr.reduce((x1, x2)=>{
  return x1+x2;
}));
console.log("----------------------------------------");