function getRecursive(number){
    console.log(number);
    if(number > 0){
        getRecursive(--number);
    }
}

getRecursive(5);