class InsertionSort{
    insertionSort(arr){
        // move smallest element to last
        for(let i = 0; i < arr.length-1; i++){
            for(let j = i+1; j >= 0 ; j--){
                if(arr[j] < arr[j-1]){
                    [arr[j],arr[j-1]] = [arr[j-1],arr[j]];
                }
            }
        }
    }
}
let arr = [1,5,4,3,2,1];
let b1 = new InsertionSort();
b1.insertionSort(arr);
console.log(arr);