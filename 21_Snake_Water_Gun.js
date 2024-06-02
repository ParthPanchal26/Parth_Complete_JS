let machine_Guess = ['s', 'w', 'g'];
let random_Guess = machine_Guess[Math.floor(Math.random() * machine_Guess.length)];

let user_Input = prompt(`Enter s OR w OR g`);
let final_Input = user_Input.toLowerCase();
if(final_Input.length > 1){
   console.log(`Enter s OR w OR g`); 
   document.write(`Enter s OR w OR g`)
} else{
    if(final_Input == random_Guess){
        document.write(`We both guess Same`);
    }else if(final_Input == 's' && random_Guess == 'w' || final_Input == 'g' && random_Guess == 's' || final_Input == 'w' && random_Guess == 'g'){
        document.write(`You win! i guessed ${random_Guess}`);
    }else{
        document.write(`I won it! i guessed ${random_Guess}`);
    }
}