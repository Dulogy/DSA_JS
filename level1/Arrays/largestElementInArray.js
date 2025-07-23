function maxValue(array){
    let maxValue = array[0];
    for(let i=1;i<array.length;i++){
        if(array[i] > maxValue){
            maxValue = array[i];
        }
    }
    return maxValue;
}
let array = [2,1,9,5,6,7];
let maxValueOfArray = maxValue(array);
console.log(`Max value of the Array is ${maxValueOfArray}`);