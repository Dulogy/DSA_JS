function rotateArray(array,nums){
    for(let i=0; i<nums;i++){
        let tempVar = array[0];
        for(let i = 0; i< array.length-1; i++){
            array[i] = array[i+1];
        }
        array[array.length-1] = tempVar;
    }
    return array;
}

let array = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
let totalRotate = 3;
let rotatedArray = rotateArray(array,totalRotate);
console.log(rotatedArray)