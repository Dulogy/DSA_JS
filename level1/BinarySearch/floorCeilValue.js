function floor(arr,x){
    let start = 0;
    let end = arr.length - 1;   
    let ans;
    while(start <= end){
        let mid = Math.floor((start + end)/2);
        if(arr[mid] >= x){
            ans = arr[mid];
            end = mid - 1;
        }else{
            start = mid + 1;
        }
    }
    return ans;
}
function ceil(arr,x){
    let start = 0;
    let end = arr.length - 1;   
    let ans;
    while(start <= end){
        let mid = Math.floor((start + end)/2);
        if(arr[mid] <= x){
            ans = arr[mid];
            start = mid + 1;
        }else{
            end = mid - 1;
        }
    }
    return ans;
}


let arr = [3, 4, 4, 7, 8, 10];
let x = 5;
let floorValue = floor(arr,x);
let ceilValue = ceil(arr,x);
console.log(floorValue,ceilValue);