const allowedPasswords = ["Password", "Alexander", "PIAIC"];

function checkPassword(password){
    return allowedPasswords.includes(password);
}

function validatePassword(password){
    return new Promise((resolve, reject) => {
        if(checkPassword(password)){
            resolve({status : true})
        }else {
            reject({status : false})
        }
    });
}

function checker(password){
    validatePassword(password)
    .then(value => {
        console.log("Authurized User");
        console.log(value);
    })
    .catch(value => {
        console.log("Rejected User");
        console.log(value);
    })
}

checker("Alexander");