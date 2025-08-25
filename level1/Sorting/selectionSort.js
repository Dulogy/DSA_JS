class SelectionSort{
    selectionSort(arr){
        // move smallest element to left
        for(let i = 0; i < arr.length; i++){
            let minIndex = i;
            for(let j = i+1; j < arr.length; j++){
                if(arr[j] < arr[minIndex]){
                    [arr[j],arr[minIndex]] = [arr[minIndex],arr[j]];
                }
            }
        }
    }
}
let arr = [1,5,4,3,2,1];
let b1 = new SelectionSort();
b1.selectionSort(arr);
console.log(arr);