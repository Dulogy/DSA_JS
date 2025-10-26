class Solution{
    palindromeCheck(str,start,end){
        if(start >= end){
            return true;
        }
        if(str[start] !== str[end]){
            return false;
        }
        return this.palindromeCheck(str,start+1,end-1);
    }
    palindromeCheckSort(str){
        let originialString = str;
        let reversedstring = originialString.split("").reverse().join("");
        return originialString == reversedstring;
    }
}
let str = "madam";
let strArr = str.split("");

let p1 = new Solution();
let p2 = new Solution();
let p3 = new Solution();

let ans = p1.palindromeCheck(strArr,0,strArr.length-1);
let ans2 = p2.palindromeCheckSort(str);
console.log(ans,ans2);