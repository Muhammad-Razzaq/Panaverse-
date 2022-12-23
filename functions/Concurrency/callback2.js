function judge(grade){
    switch(true){
        case grade === "A":
            console.log("You got an ", grade , " : Excellent");
            break;
        case grade === "A":
            console.log("You got an ", grade , " : Good Job");
            break;
        case grade === "A":
            console.log("You got an ", grade , " : Ok");
            break;
        case grade === "A":
            console.log("You got an ", grade , " : Need to improve");
            break;
        default :
            console.log("An ", grade , " : Oops! Try again");
    }
}

function getGrade(percentage, callback){
    let grade;
    switch(true){
        case percentage >= 90 :
            grade = "A";
            break;
        case percentage >= 80 :
            grade = "B";
            break;
        case percentage >= 70 :
            grade = "C";
            break;
        case percentage >= 60 :
            grade = "D";
            break;
        default :
            grade = "F";
            break;
    }
    callback(grade);
}

getGrade(50, judge);