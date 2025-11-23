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

    insertionSort2(arr){
        for(let i = 1; i < arr.length -1; i++){
            let curr = arr[i];
            let j = i-1;

            while(j >= 0 && arr[j] > curr){
                arr[j+1] = arr[j]
                j--;
            }
            arr[j+1]=curr;
        }
        return arr;
    }
}
let arr = [1,5,4,3,2,1];
let arr2 = [4,3,5,2,1,6];
let b1 = new InsertionSort();
// b1.insertionSort(arr);
let res = b1.insertionSort2(arr2)
console.log(res);