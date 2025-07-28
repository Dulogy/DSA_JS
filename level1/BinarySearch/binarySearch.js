function binarySearch(array, target) {
    let start = 0;
    let end = array.length;
    while(start <= end) {
        let mid = Math.floor((start + end)/2);
        if(array[mid] == target){
            return mid;
        }else if(array[mid] < target){
            start = mid + 1
        }else{
            end = mid - 1;
        }
    }
    return -1;
}

let array = [1, 2, 3, 4, 5, 6, 7];
let target = 5;
let index = binarySearch(array, target);
console.log(index)