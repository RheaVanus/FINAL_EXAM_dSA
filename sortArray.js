let num = []; //Stores the value of the input of the user that in ask_num
let namae = [];//Stores the value of the input of the user that in ask_namae


/*
This function, ask_num, prompts the user to input numbers.
Based on the required inputs in the instruction, the prompt is inside the loop for 9 times and push the input into num array.
*/
function ask_num(){
for (let i = 0; i < 9; i++){
    let ask_num = parseInt(prompt("Please input numbers"));
    num.push(ask_num)
}

ask_namae()// calls ask namae function.
}

/*
This function, ask_namae, prompts the user to input names.
Based on the required inputs in the instruction, the prompt is inside the loop for 5 times and push the input into namae array.
*/
function ask_namae(){
    for(let i = 0; i < 5; i++){
        let ask_namae = prompt("Please input names")
        namae.push(ask_namae);
    }
joiner(); //calls joiner, then
sorted_numer(); // calls sorter_numer lastly
sorted_namaes();// calls sorted_namaes
}

//Function where joined the two arrays using the spread operator, then stored inside the joince array, then logs to see if it worked.
function joiner(){
    let joined = [...num, ...namae] //https://www.geeksforgeeks.org/what-are-these-triple-dots-in-javascript/
    console.log(joined);
}

//Sorts the number in a,b(normal sorting) then reverse it(b - a)
function sorted_numer(sorted_num){
    sorted_num = num.sort((a, b) => b - a );
    console.log(num)
}

//Sorts the namaes array by calling it with .sort function then calls it again for the reverse function.
function sorted_namaes(sorted_namae){
    sorted_namae = namae.sort()
    namae.reverse()
    console.log(namae)
}

//Calls the ask_num function to start the system.
ask_num();