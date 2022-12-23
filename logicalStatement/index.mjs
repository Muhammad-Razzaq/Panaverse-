// let isInPakistan = true;

// if(isInPakistan){
//     console.log("Hello Imran");
// }
// else{
//     console.log("Hello Alexander")
// }

import promptSync from "prompt-sync";
let promt = promptSync();

// let percentage = promt("Enter you percentage : ");
// if(percentage >= 90){
//     console.log("Grade A+");
// }
// else if(percentage >= 80){
//     console.log("Grade A");
// }
// else if(percentage >= 70){
//     console.log("Grade B");
// }
// else if(percentage >= 60){
//     console.log("Grade C");
// }
// else if(percentage >= 50){
//     console.log("Grade D");
// }
// else{
//     console.log("Grade F")
// }

// let isInPakistan = promt("Are you in Pakistan? : ");
// let greeting = isInPakistan === "true" ? "Hello Imran" : "Hello Alexander";
// console.log(greeting);

let location = promt("Where are you now? : ");
switch(location){
    case "America" :
        console.log("Hello Alexander");
        break;
    case "Germany" :
        console.log("Guten Tag Alexander");
        break;
    case "Pakistan" :
        console.log("Asslamualikum Ali");
        break;
    default :
        console.log("Hello Bhai");
        break;
}