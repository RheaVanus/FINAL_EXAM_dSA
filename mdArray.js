/*
Coding Problem 3: Multi-Dimensional Array - Array Restructuring 
    o Create a new JavaScript file named mdArray.js. 
    o Create a multi-dimensional array containing the following values: (use prompt() function) 
             subArray1 = Genevieve, Juan, Luna, Gabriel, Elise                         - names 
             subArray2 = 24, 65, 21, 5, 9                                                -age in numerical value 
    o Restructure the declared multi-dimensional array above and store in a new multi-dimensional array, 
    where each of the sub-array must contain [name, age]. 
    o Log to the console the restructured multidimensional array [name, age] per line. 

*/

let subArray1 = []; //Empty arrays
let subArray2 = [];

for (let i = 0; i < 5; i++){ //loop where users are asked to input their name 5 times
    let names = prompt("Input 5 names: ");
    subArray1.push(names)//push the input of users to the arrat
}

for (let i = 0; i < 5; i++){//loop where users are asked to input numbers 5 times.
    let num = parseInt(prompt("Input 5 numbers"))
    subArray2.push(num)//user inputs are pushed to the subarray
}

let mdArray = [subArray1,   subArray2]; //lets mdArray to combine them two by calling it, while inside and array
console.log(mdArray)

let martching = [];//martching empty array, this is where they are stored and matched the input to one another

for (let i = 0; i < mdArray[0].length; i++){//Loop for matching the values through indexing.
    martching.push([mdArray[0][i], mdArray[1][i]])//it gets the index of 2 items inside the mdArray
    //index 0 is the subArray1 and index 1 is subarray 2. This loop [i] is the index for the values inside of those two arays.
    //This loop get those values with same index, push it to the martching and matches it. 
}

for (let i = 0; i < martching.length; i++){//Loop to log all of the matches made by the loop before this
    console.log(martching[i])
}