function multino(number) {
    let result = 1;
    for(let i =1; i <= number; i++){
        result = result * i;
        // console.log(i, result);
    }
    return result;
}

const result = multino(9);
console.log(result);