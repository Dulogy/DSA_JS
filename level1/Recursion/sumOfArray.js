class Solution {
    sumOfArray(arr){
        return this.arraySumHelper(arr,arr.length-1)
    }
    arraySumHelper(arr,n){
        if(n < 0){
            return 0 ;
        }
        let sum = arr[n] + this.arraySumHelper(arr,n-1);
        return sum;
    }
}
let arr = [1,2,3,4,5]
let sum = new Solution();
let ans = sum.sumOfArray(arr);
console.log(ans);