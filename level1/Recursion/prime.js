class Solution {
    checkIsPrime(n){
        if(n == 1){
            return false;
        }
        return this.IsPrime(n,n-1);
    }
    IsPrime(n,end){
        if(end < 2){
            return true;
        }
        if(n % end == 0){
            return false;
        }
        
        return this.IsPrime(n,end-1);
    }

}

let p1 = new Solution();
console.log(p1.checkIsPrime(15));