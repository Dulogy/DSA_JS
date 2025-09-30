/*
Given an array nums of size n and an integer k, 
find the length of the longest sub-array that sums to k. 
If no such sub-array exists, return 0.


Input: nums = [10, 5, 2, 7, 1, 9],  k=15
Output: 4
Explanation:
The longest sub-array with a sum equal to 15 is [5, 2, 7, 1], 
which has a length of 4. This sub-array starts at index 1 and ends at index 4,
and the sum of its elements (5 + 2 + 7 + 1) equals 15.
Therefore, the length of this sub-array is 4.
*/
class Solution {
  longestSubarray(nums, k) {
    // brute force
    let len = nums.length;
    if (len == 0) {
      return 0;
    }
    let lcs = 0;

    for (let i = 0; i < len; i++) {
      let prefixSum = 0;
      for (let j = i; j < len; j++) {
        prefixSum = prefixSum + nums[j];
        if (prefixSum == k) {
          lcs = Math.max(lcs, j - i + 1);
        }
      }
    }
    return lcs;
  }

  longestSubarrayOptimal(arr, k) {
    let len = arr.length;
    if (len == 0) {
      return 0;
    }
    let lcs = 0;
    let prefixSum = 0;
    let map = new Map();
    for (let i = 0; i < len; i++) {
      prefixSum = prefixSum + arr[i];
      if (prefixSum == k) {
        lcs = Math.max(lcs, i + 1);
      }
      let diff = prefixSum - k;
      if (map.has(diff)) {
        let len = map.get(diff);
        lcs = Math.max(lcs, i - len);
      }
      if (!map.has(prefixSum)) {
        map.set(prefixSum, i);
      }
    }
    return lcs;
  }
}
let arr = [10, 5, 2, 7, 1, 9]
let target = 15;
let s = new Solution();
// let ans = s.longestSubarray(arr,target);
let ans = s.longestSubarrayOptimal(arr,target);

console.log(ans);