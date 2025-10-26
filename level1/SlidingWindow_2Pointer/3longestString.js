class Solution {
    longestNonRepeatingSubstring(s) {
        let strArr = s.split("");
        let length = strArr.length;
        let left = 0;
        let right = 0;
        let maxSubstrLen = 0;
        let substr = "";
        for(let i = left; i < length;i++){
            substr = substr + strArr[i];
            right++;
            console.log(substr.indexOf(strArr[i]));
            while(substr.indexOf(strArr[i]) !== i){
                substr = substr.slice(left,right);
                left++;
            }
            maxSubstrLen = Math.max(maxSubstrLen,substr.length)
        }
        return maxSubstrLen;
    }
}

let str = "abcddabcde";
let child = new Solution();
let ans = child.longestNonRepeatingSubstring(str);
console.log(ans);