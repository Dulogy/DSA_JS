// tabulation
/*
function fibanacci(num){
  for(let i = 2; i < num; i++ ){
    dp[i] = dp[i-1] + dp[i-2]
  }
}
let num = 5;
let dp = [];
dp[0] = 0;
dp[1] = 1;
fibanacci(num);
console.log(dp);
*/

class Solution {
  fibonacci(n,dp){
    if(n <= 1){
      dp[n] = n
      return n;
    }
    if(dp[n] !== -1){
      return dp[n]
    }
    return dp[n] = this.fibonacci(n-1,dp) + this.fibonacci(n-2,dp);
  }
}
let num = 5;
let dp = new Array(num+1).fill(-1);
let s1 = new Solution();
let res = s1.fibonacci(num,dp);
console.log(res,dp);