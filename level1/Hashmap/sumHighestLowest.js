/* Sum of Highest and Lowest Frequency
Given an array of n integers, find the sum of the frequencies of the highest occurring number and lowest occurring number.
Examples:
Input: arr = [1, 2, 2, 3, 3, 3]
Output: 4
Explanation: The highest frequency is 3 (element 3), and the lowest frequency is 1 (element 1). Their sum is 3 + 1 = 4.
Input: arr = [4, 4, 5, 5, 6]
Output: 3
Explanation: The highest frequency is 2 (elements 4 and 5), and the lowest frequency is 1 (element 6). Their sum is 2 + 1 = 3.
Input: arr = [10, 9, 7, 7, 8, 8, 8]
Output:
4
*/
class Solution {
    sumHighestLowestFrequency(arr){
        let map = new Map();
        for(let i=0;i<arr.length;i++){
            map.set(arr[i],(map.get(arr[i]) || 0) + 1);
        }
        console.log(map);
        map = [...map.values()].sort((a,b) => b - a);
        return map[0] + map[map.length - 1];
    }
}
let arr = [10, 9, 7, 7, 8, 8, 8];
let s1 = new Solution();
let ans = s1.sumHighestLowestFrequency(arr);
console.log(ans);
