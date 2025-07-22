let array = [1,2,8,6,7,8,3,9,10];
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

let secondLargestValue = secondLargestFunction(array);
console.log(secondLargestValue);