function upperBound(arr,x){
    let start = 0;
    let end = arr.length -1;
    let ans = arr.length;
    while(start <= end){
        let mid = Math.floor((start + end)/2);
        if(arr[mid] > x){
            ans = mid;
            end = mid-1;
        }else{
            start = mid+1;
        }
    }
    return ans;
}

let arr = [1,2,2,3];
let x = 2;
let Ubound = upperBound(arr,x);
console.log(Ubound); 