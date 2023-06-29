// Instructions: Write a function that takes the base and height of a triangle and return its area.

const input = require('readline-sync');


function calculateTriangleArea(base, height){
    let area = (base*height)/2;
    return area;
}

let base = input.question("Enter the triangle's base ");
let height = input.question("Enter the triangle's height ");
console.log(calculateTriangleArea(base, height));


