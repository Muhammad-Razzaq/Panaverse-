import promptSync from "prompt-sync";

const prompt = promptSync();

const maxValue = 10;
const randomNumber = Math.floor(Math.random()*maxValue);
let status = false;

while (!status) {
    let userInput = Number(prompt("Guess a number between 1 - 10 : "));
    if(userInput === randomNumber){
        status = true;
        console.log("You won! The number is " + randomNumber);
    }
    else if(userInput > randomNumber){
        console.log("Sorry, your guess is too high!");
    }
    else{
        console.log("Sorry, your guess is too low!")
    }
}