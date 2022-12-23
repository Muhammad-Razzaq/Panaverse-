const promise = new Promise((resolve, reject) => reject("Something went wrong")); // resolve("Great Job")

const counter = (value) => console.log(value);

promise.then((value) => {
    counter(value);
    return "One";
}).then((value) => {
    counter(value);
    return "Two";
}).then((value) => {
    counter(value);
    return "Three";
}).then((value) => counter(value)).catch((error) => console.log("Error : ", error));