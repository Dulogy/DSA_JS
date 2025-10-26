class Solution {
   generateParenthesis(n) {
    let result = [];
    this.helperFunction("", n, n, result);
    return result.sort();
  }

  helperFunction(current,open,close,result){
    if(open == 0 && close == 0){
        result.push(current);
        return;
    }
    if(open > 0){
        this.helperFunction(current + "(",open-1,close,result)
    }
    if(close > open){
        this.helperFunction(current + ")",open,close-1,result)
    }
  }
}

let n = 4;
let s1 = new Solution();
let ans = s1.generateParenthesis(n);
console.log(ans);