class LongestSubArray {
    maxLengthSumOfK(arr,sum){
        let left = 0;
        let right = 0;
        let maxLength = 0;
        let arrLength = arr.length;
        let windowSum = 0;
        while(right < arrLength){
            windowSum = windowSum + arr[right];
            // optimal for subarray printing
            // while(windowSum > sum && left <= right){
            //     windowSum = windowSum - arr[left];
            //     left ++;
            // }
            // if (windowSum <= sum) {
            //     maxLength = Math.max(maxLength, right - left + 1);
            // }
            // right++;

            // optimal for only length
            if(windowSum > sum) {
               windowSum = windowSum - arr[left];
               left++;
            }
            if (windowSum <= sum) {
               maxLength = Math.max(maxLength, right - left + 1);
            }
            right++;

        }
        return maxLength;
    }
}
let arr = [-1,2,3,4,5,2,1];
let c1 = new LongestSubArray();
let sum = 10;
let ans = c1.maxLengthSumOfK(arr,sum);
console.log(ans);