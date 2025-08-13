class Solution{
    checkRotateString(str1,str2){
        if(str1.length != str2.length){
            return false
        }
        let str2x = str1+str1;
        return str2x.includes(str2);
    }
}

let s1 = new Solution();
let ans = s1.checkRotateString("abcde","abced");
console.log(ans);