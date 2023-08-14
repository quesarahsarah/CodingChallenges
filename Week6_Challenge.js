// Create a function that takes two strings
// as arguments and returns the number of
// times the first string (the single character)
// is found in the second string.

// charCount("a", "edabit") ➞ 1

// charCount("c", "Chamber of secrets") ➞ 1

// charCount("b", "big fat bubble") ➞ 4

function charCount (char, phrase){
    let c = 0;
    let i = 0;
    let j = phrase.length;
    while (i<j){
        if (phrase[i]==char){
            c++;
        }
        i++;
    }
    return c;
}

console.log(charCount("a", "edabit"));

console.log(charCount("c", "Chamber of secrets"));

console.log(charCount("b", "big fat bubble"));