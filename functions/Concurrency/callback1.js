// Callback function dosray function main as an argument call hota hay
function doFlexibleStuff(callback){
    callback();
}

const function1 = () => console.log("Hello from function 1");
const function2 = () => console.log("Hello from function 2");

doFlexibleStuff(function1);
doFlexibleStuff(function2);