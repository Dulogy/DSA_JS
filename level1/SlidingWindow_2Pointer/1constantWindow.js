// find k elements consecutively to find the max sum
class ConstantWindow {
    maxSumOfK(arr,k) {
        let maxSum = 0;
        let left = 0;
        let length = arr.length;
        let right = k;
        let sum = 0;
        for(let i = 0; i < right; i++){
            sum = sum + arr[i];
        }
        maxSum = Math.max(maxSum,sum);

        while(right < length){
            sum = sum - arr[left] + arr[right];
            left++;
            right++;
            maxSum = Math.max(maxSum,sum);
        }
        return maxSum;
    }
}

let arr = [-1,2,3,4,5,2,1];
let k = 4;
let c1 = new ConstantWindow();
let ans = c1.maxSumOfK(arr,k);
console.log(ans);