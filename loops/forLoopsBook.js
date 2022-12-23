const myWork = [];

for (let i = 1; i <= 10; i++) {
    let status = i % 2 ? true : false;
    let temporaray = {
        name : `Lesson ${i}`,
        status : status
    }
    myWork.push(temporaray);
}
console.log(myWork);