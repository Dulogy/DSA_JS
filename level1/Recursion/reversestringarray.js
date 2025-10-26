class Solution {
    reverseString(str) {
        if(str.length == 1){
            return;
        }
        let finalresult =  this.reverse(str,0,str.length-1);
        return finalresult;
    }
    reverse(str,start,end){
        if(start >= end ){
            return str
        };
        let temp = str[start];
        str[start] = str[end];
        str[end] = temp;
        start++;
        end--;
        let ans = this.reverse(str,start,end);
        return ans;
    }
}
const solution = new Solution();
const s = ['h', 'e', 'l', 'l', 'o'];

// Function call to reverse the given string
const reversed_s = solution.reverseString(s);
console.log(reversed_s);