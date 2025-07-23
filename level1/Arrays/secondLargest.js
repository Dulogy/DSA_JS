function secondLargestFunction(array){
    if(array.length < 2){
        return null;
    }
    let largest = -Infinity;
    let secondLargestNum = -Infinity;

    for (let i = 0; i < array.length; i++){
        if(array[i] > largest){
            secondLargestNum = largest;
            largest = array[i];
        }else if(array[i] > secondLargestNum && array[i] < largest){
            secondLargestNum = array[i];
        }
    }
    return secondLargestNum;
}
// do same for second smallest number

function secondSmallestFunction (array){
    if(array.length < 2){
        return null;
    }
    let smallest = Infinity;
    let secondSmallest = Infinity;
    for(let i = 0; i < array.length; i++){
        if(array[i] < smallest){
            secondSmallest = smallest;
            smallest = array[i];
        }else if(array[i] > smallest && array[i] < secondSmallest){
            secondSmallest = array[i];
        }
    }
    return secondSmallest;
}
let array = [11,2,8,3,9,10];
let secondLargestValue = secondLargestFunction(array);
let secondSmallestValue = secondSmallestFunction(array);

console.log(secondLargestValue,secondSmallestValue);