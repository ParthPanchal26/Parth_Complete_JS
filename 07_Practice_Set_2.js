// 1.Use logical operator to find age is between 10 and 20.
console.log("--------- Logical Operator to find oldest age and age between 10 and 20 ---------");
let age_a = 12;
let age_b = 2;
let age_c = 12;

if(age_a > age_b && age_a > age_c){
    console.log("age_a is oldest & age is : " + age_a);
    if( age_a >=10 && age_a <= 20){
        console.log("age is between 10 and 20");
    }
}else if(age_b > age_c){
    console.log("age_b is oldest and age is : " + age_b);
    if( age_b >=10 && age_b <= 20){
        console.log("age is between 10 and 20");
    }
}
else if(age_c > age_a && age_c > age_b){
    console.log("age_c is oldest & age is : " + age_c);
    if( age_c >=10 && age_c <= 20){
        console.log("age is between 10 and 20");
    }
}else{
    if(age_a === age_b === age_c){
        console.log("Ages are same & age is : " + age_a);
    }
    if(age_a >= 10 && age_a <= 20 && age_c >=10 && age_c <= 20 && age_b >= 10 && age_b <= 20){
        console.log("age is between 10 and 20");
    }
    console.log("age_a : " + age_a + " ! age_b : " + age_b + " ! age_c : " + age_c)
}
console.log("---------------------------")

// 2. Demonstrate Switch case statement.

let age = 12;
console.log("--------- Switch case statement ---------");
// const age = 12;
switch (age) {
  case 12:
    console.log("You are 12 years old.");
    break;
  case 15:
    console.log("You are 15 years old.");
    break;
  case 17:
    console.log("You are 17 years old.");
    break;
  default:
    console.log("You are not 12, 15, or 17 years old.");
}
console.log("---------------------------");

// 3.Write javascript to find wheather number is dividable by 2 and 3 or not.

console.log("--------- Check wheather number is divided by 2 and 3 ---------");

let num1 = 12;

if(num1%2==0 && num1%3==0){
    console.log(num1 + " is dividable by 2 and 3.");
}else{
    console.log("Number " + num1 + " is not dividable by 2 or 3");
}  
console.log("---------------------------");

// 4.Write javascript to find wheather number is either dividable by 2 or 3.

console.log("--------- Check wheather number is divided by 2 or 3 ---------");
let num2 = 12;

if(num2%2==0 || num2%3==0){
    console.log(num2 + " is dividable by 2 or 3.");
}else{
    console.log("Number " + num2 + " is not dividable by 2 or 3");
}  
console.log("---------------------------");

// 5.Check is age greater than 18 using ternary operator for driving.

let drive_age = 26;
console.log("--------- Age greater than 18 using ternary operator for driving ---------");
console.log("Your age is " + drive_age + " So", (drive_age > 18 ? "You can Drive" : "You cannot drive"));
console.log("---------------------------");