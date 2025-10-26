/*
Given an array of integers nums and an integer k, 
return the total number of subarrays whose sum equals to k.

Input: nums = [1, 2, 3], k = 3
Output: 2
Explanation: In the given array [1, 2, 3], 
there are two subarrays that sum up to 3: [1, 2] and [3]. 
Hence, the output is 2
*/

class Solution {
  longestSubarray(nums, k) {
    let len = nums.length;
    if (len == 0) {
      return 0;
    }
    let count = 0;
    let map = new Map();
    map.set(0,1);

    let prefixSum = 0;
    for (let i of nums) {
      prefixSum += i;
      let diff = prefixSum - k;
      if(map.has(diff)){
        count = count + map.get(diff);
      }

      map.set(prefixSum,(map.get(prefixSum) || 0)+1);
    }
    return count;
  }
}
let arr = [-5,-3,0,-9,-6,1,5,-7,-1,0,3,5,9]
let target = 0;
let s = new Solution();
let ans = s.longestSubarray(arr,target);
console.log(ans)