// code copied from within the Coderbyte environment:

// function LongestWord(sen) { 

//     sen = sen.split(" ");
//     let longest = "";
//     var i = 0;
  
//     while (i < sen.length){
//       sen[i] = sen[i].replace(/[^a-z0-9]/gi, "");
//       if (sen[i].length > longest.length){
//         longest = sen[i];
//       }
//       i++
//     }
//     return longest; 
  
//   }
  
//   console.log(LongestWord(readline()));

  // code that runs in the terminal in VSCode:

  const input = require('readline-sync');

  function TheLongestWord(sen) { 

    sen = sen.split(" ");
    let longest = "";
    var i = 0;
  
    while (i < sen.length){
      sen[i] = sen[i].replace(/[^a-z0-9]/gi, "");
      if (sen[i].length > longest.length){
        longest = sen[i];
      }
      i++
    }
    return longest; 
  
  }
  sen = input.question("Enter a sentence and I'll find the longest word that it has ");
  console.log(TheLongestWord(sen));

