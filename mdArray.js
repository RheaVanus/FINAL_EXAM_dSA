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

let subArray1 = [];
let subArray2 = [];

for (let i = 0; i < 5; i++){
    let names = prompt("Input 5 names: ");
    subArray1.push(names)
}

for (let i = 0; i < 5; i++){
    let num = parseInt(prompt("Input 5 numbers"))
    subArray2.push(num)
}

let mdArray = [subArray1,   subArray2];
console.log(mdArray)

let martching = [];

for (let i = 0; i < mdArray[0].length; i++){
    martching.push([mdArray[0][i], mdArray[1][i]])
}

for (let i = 0; i < martching.length; i++){
    console.log(martching[i])
}