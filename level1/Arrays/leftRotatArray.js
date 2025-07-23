function rotateArray(array){
    let tempVal = array[0];
    for(let i = 0;i < array.length-1;i++){
        array[i] = array[i+1];
    } 
    array[array.length-1] = tempVal;
    return array;
}
// lft rotate array by 1 place
let array = [1,2,3,4,5,6,7];
let rotatedArray = rotateArray(array);
console.log(rotatedArray)