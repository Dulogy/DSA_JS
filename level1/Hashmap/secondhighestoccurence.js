/* Second Highest Occurring Element
Given an array of n integers, find the second most frequent element in it.
If there are multiple elements that appear second most frequent times, find the smallest of them.

If second most frequent element does not exist return -1.
Examples:
Input: arr = [1, 2, 2, 3, 3, 3]
Output: 2
Explanation:
The number 2 appears the second most (2 times) and number 3 appears the most(3 times). 

Input: arr = [4, 4, 5, 5, 6, 7]
Output: 6
Explanation:
Both 6 and 7 appear second most times, but 6 is smaller.

Input: arr = [10, 9 ,7, 7]
Output:
9
Constraints:
1 <= n <= 105
1 <= arr[i] <= 104
*/

class Solution {
    secondHighestFrequency(arr){
      let arrayMap = new Map();
      for (let i = 0; i < arr.length; i++) {
        arrayMap.set(arr[i], (arrayMap.get(arr[i]) || 0) + 1);
      }
      const freqs = [...arrayMap.values()].sort((a, b) => b - a);
      // If there are fewer than 2 unique frequencies
      if (freqs.length < 2) {
        return null;
      }
      // Step 3: Return the second highest frequency
      return freqs[1];
    }
}
let arr = [1,2,2,3,4,4,5];
let s1 = new Solution();
let ans = s1.secondHighestFrequency(arr);
console.log(ans);