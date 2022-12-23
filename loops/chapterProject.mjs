const multiplyTable = [];
const numValue = 10;

for (let i = 0; i <= numValue; i++) {
    const temporary = [];
    for (let j = 0; j <= numValue; j++) {
        temporary.push(i*j);
    }
    multiplyTable.push(temporary);
}

console.table(multiplyTable);