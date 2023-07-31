//Create a function that takes a number as an argument.
//Add up all the numbers from 1 to the number you passed to the function.
//For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

const input = require('readline-sync');
function addOneToNum(num) {
    let sum = 0;
    let i = 1;
    while (i<=num){
        sum += i;
        i++;
    }
    return sum;
    
}

givenNum = input.question("Enter a positive integer to find the sum of all numbers up to it: ");
console.log(addOneToNum(givenNum));