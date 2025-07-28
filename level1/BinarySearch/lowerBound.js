function lower(arr,x){
    let start = 0;
    let end = arr.length;
    let ans = end;
    while( start<= end){
        
        let mid = Math.floor(start + end)/2;
        if(arr[mid] >= x ){
            ans = mid;
            end = mid-1;
        }else{
            start = mid + 1;
        }
    }
    return ans;
}
let arr = [1,2,2,3];
let x = 2;
let lowerBound = lower(arr,x);
console.log(lowerBound);