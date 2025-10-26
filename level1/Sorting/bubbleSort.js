class BubbleSort{
    bubbleSort(arr){
        // move largest element to last
        for(let i = 0; i < arr.length; i++){
            for(let j = 0; j < arr.length - i - 1; j++){
                if(arr[j] > arr[j+1]){
                    [arr[j],arr[j+1]] = [arr[j + 1],arr[j]];
                }
            }
        }
    }
}
let arr = [1,5,4,3,2,1];
let b1 = new BubbleSort();
b1.bubbleSort(arr);
console.log(arr);