const promise = new Promise(function (resolve, reject) {
    //Execution
    reject("Javascript");
});

promise.then(function(result) {
    //On Success
    console.log("Success : ", result);
}, function(error){
    //On Error
    console.log("Error : ", error);
});

// Also you can do this ---------------------

promise.then(function(result) {
    //On Success
    console.log("Success : ", result);
}).catch(function(error){
    //On Error
    console.log("Error : ", error);
});