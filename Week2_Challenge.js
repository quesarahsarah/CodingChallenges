// code copied from within the Coderbyte environment:

// function FirstReverse(str) { 

//     str = str.split("");
//     str = str.reverse();
//     str = str.join("");
//     return str; 
  
//   }

//   console.log(FirstReverse(readline()));


  // code that runs in the terminal in VSCode:

  const input = require('readline-sync');

  function Reverse(str) { 

    str = str.split("");
    str = str.reverse();
    str = str.join("");
    return str; 
  }

  let str = input.question("Enter a word or phrase to reverse ");
  console.log(Reverse(str));