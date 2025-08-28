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

function rotateArray1(arr,roteteN){
    let N = arr.length;
    let length = arr.length;
    let K = roteteN;
    let rotate = roteteN;
    for(let i = 0; i < N; i++){
        [arr[i],arr[N-1]] = [arr[N-1],arr[i]];
        N--;
    }
    console.log(arr);
    for(let i = 0; i < K;i++){
        [arr[i],arr[K-1]] = [arr[K-1],arr[i]];
        K--;
    }
    console.log(arr);
    for(let i = rotate; i < length;i++){
        [arr[i],arr[length-1]] = [arr[length-1],arr[i]];
        length--;
    }
    console.log(arr);
}


function rotateArray2(arr, k) {
    let n = arr.length;
    k = k % n;
    reverseArray(arr,0,k-1);

    reverseArray(arr,k,n-1);

    reverseArray(arr,0,n-1);
    console.log(arr);
}
function reverseArray(arr,left,right){
    while(left < right){
        [arr[left],arr[right]] = [arr[right],arr[left]];
        left++;
        right--;
    }
}

let array = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
// [6,7,1,2,3,4,5];
let totalRotate = 3;
// let rotatedArray = rotateArray(array,totalRotate);
// console.log(rotatedArray)
// rotateArray1(array,totalRotate);
rotateArray2(array,totalRotate);
