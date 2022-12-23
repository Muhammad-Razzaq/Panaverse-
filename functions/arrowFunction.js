// Normal Javascript Function
function add1(x, y) {
    return console.log(x + y);
}
add1(2,3);

// Arrow Function
let add = (x, y) => console.log(x+y);
add(1,2); 

const student = {
    firstName : "Abdul",
    lastName : "Razzaq",
    fullName : function() {return console.log(this.firstName + this.lastName)}
}

student.fullName();