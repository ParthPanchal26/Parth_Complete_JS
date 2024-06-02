// 1.For Loop.

/*
 Each time i value incremented by 1 and the condition will be check does i<5 (1<5), i<5 (2<5),..., i<5(5<5)
 When the condition will set i<5 (5<5) return false and loop will terminated.
*/
console.log("To Print first 5 no.");
for(let i = 0; i < 5; i++){
    console.log(i);
}
console.log("-------------------------")
console.log("To print sum of Fist 5 no.");
let sum = 0;
for(let j = 0; j < 5; j++){
    sum = sum + j;
}
console.log(sum);

console.log("-------------------------")
console.log("For in Loop.");

let result = {
    Parth: 99,
    Shivani: 88,
    anamika: 96
}

for(let res in result){ // Here, res is a variable used to retrieve keys from result object
    console.log("Marks of " + res + " is : " + result[res]);
}

console.log("-------------------------");
console.log("While loop");
let w = 0;
while(w < 5){
    console.log(w);
    w++;
}
console.log("-------------------------");
console.log("Do While Loop");
let D = 0;
do{
    console.log(D);
    D++;
}while(D<5);
console.log("-------------------------");