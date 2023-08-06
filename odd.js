function getSumOfArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        // console.log(index, element);
    }
    return sum;   
}

function getOddNumberOfArray(numbers){
    const oddNumbers = [];
    for(let i = 0; i < numbers.length; i++){
    const index = i;
    const element = numbers[index];
    if(element % 2 !== 0){
        console.log(index, element);
        oddNumbers.push(element);
    }  
} 
return oddNumbers;
}

const myNumbers = [12, 65, 45, 78, 32, 45, 91];
const oddNumbers = getOddNumberOfArray(myNumbers);
console.log(oddNumbers);
const oddNumberSum = getSumOfArray(oddNumbers);
console.log('odd number sum', oddNumberSum);

function sum(){
    let i
}