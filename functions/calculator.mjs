const value1 = 2;
const value2 = 3;

let operator = "-";

function calculator(a, b, c){
    if(c === "-"){
        console.log(a - b);
    }else{
        console.log(a + b);
    }
}

calculator(value1, value2, operator);