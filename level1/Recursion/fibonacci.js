class Solution{
    fib(num){
        if(num == 0){
            return 0;
        }
        if(num == 1){
            return 1;
        }
        let ans = this.fib(num-1) + this.fib(num-2);
        return ans;
    }
}
let num = 7;
let fib = new Solution();
let ans = fib.fib(num)
console.log(ans)