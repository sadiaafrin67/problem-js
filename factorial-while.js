// function factorial(number) {

//     let result = 1;
//     while(number >= 1){
//         result = result * number;
//         number--;
//     }
//     return result;   
// }

// const output = factorial(7);
// console.log(output)


function factorial(number) {

    let result = 1;
    while(number <= 7){
        result = result * number;
        number++;
    }
    return result;   
}

const output = factorial(1);
console.log(output)