/*
class RemoveDuplicates { 
    removeDuplicates(arr){
        let set = new Set(arr);
        let uniquearray = [...set];
        console.log(uniquearray)
    }
}
let arr = [1,2,2,3,4,5,5,6];
let rd = new RemoveDuplicates();
rd.removeDuplicates(arr);
*/


// class RemoveDuplicates { 
//     removeDuplicates(arr){
//         let j = 0;
//         console.log(arr.length);
//         for(let i = 0; i < arr.length; i++){
//             if(arr[i] !== arr[i+1]){
//                 arr[j] = arr[i];
//                 j++;
//             }
//         }
//         console.log("Unique Elements",j);
//         for(let k = j; k < arr.length; k++){
//             arr[k] ="-";
//         }
//         console.log(arr)
//     }
// }
// let arr = [1,2,2,3,4,4,5,5,6];
// let rd = new RemoveDuplicates();
// rd.removeDuplicates(arr);

/*const readline = require('readline');

class RemoveDuplicates { 
    removeDuplicates(arr){
        let set = new Set(arr);
        let uniqueArray = [...set];
        console.log("Array after removing duplicates:", uniqueArray);
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Step 1: Ask for array size
rl.question("Enter the size of the array: ", function(sizeInput) {
    const size = parseInt(sizeInput);
    const arr = [];

    // Step 2: Recursive function to take 'size' numbers
    let index = 0;
    const getNumber = () => {
        if(index < size){
            rl.question("", function(numInput){
                arr.push(Number(numInput));
                index++;
                getNumber(); // ask next number
            });
        } else {
            // Step 3: All numbers entered, remove duplicates
            let rd = new RemoveDuplicates();
            rd.removeDuplicates(arr);
            rl.close();
        }
    }

    getNumber();
});
*/
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

// Read input
process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n');
    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Class to remove duplicates
class RemoveDuplicates { 
    removeDuplicates(arr){
        let set = new Set(arr);
        let uniqueArray = [...set];
        console.log(uniqueArray.join(' '));
    }
}

function main() {
    // Read size of array (not strictly necessary but HackerRank often provides it)
    const n = parseInt(readLine().trim(), 10);
    
    // Read array elements (space-separated)
    const arr = readLine().trim().split(' ').map(Number);
    
    // Create object and remove duplicates
    let rd = new RemoveDuplicates();
    rd.removeDuplicates(arr);
}



