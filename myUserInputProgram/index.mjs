import promptSync from "prompt-sync";

const prompt = promptSync();

// var name = prompt("What is your name?");
// console.log(name);

var number = prompt("Enter a number : ");
console.log("Your number + 4 = ");
console.log(Number(number) + 4);
