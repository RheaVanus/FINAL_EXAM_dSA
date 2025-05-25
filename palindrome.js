/*
1. Coding Problem 1: String Array Operations - Palindrome 
    o Create a new JavaScript file named palindrome.js. 
    o Declare two variables containing the following words: (use prompt() function) 
         RACECAR 
         RECORDER 
    o Log to the console the original strings and the reversed strings  
    o Log to the console by returning the truth value if the original string is equivalent to  
    the reversed string. 
    */



/*A function that checks i varE is palindrome or equal when it was still equal to the original input.
After checking, it will return two values, 'true' if the argument is true, and 'false' if not.
*/
function isPalin(varE, rev){ 
    if (varE === rev){
        return true
    }else{
        return false
    }
}

//Prompts the user to type RACECAR and RECORDER.
let varE1 = prompt("Type RACECAR: ")
let varE2 = prompt("Type RECORDER: ")

//Logs the original output of varE1 and varE2 
console.log(varE1)
console.log(varE2);

/*
Reverses the output by spliting the letters to separate then stored in array.
Reverses it, then joined into one word.

Source for the idea: https://www.geeksforgeeks.org/palindrome-in-javascript/
*/
let rev1 = varE1.split("").reverse().join("")
let rev2 = varE2.split("").reverse().join("");

//Logs the reversed words by the let rev1 and rev2.
console.log(rev1)
console.log(rev2)

/*Logs the value if varE1 and varE2 matches their reversed output.
The console.log calls the isPalin function which makes the function usable.
*/
console.log(isPalin(varE1, rev1))
console.log(isPalin(varE2, rev2))