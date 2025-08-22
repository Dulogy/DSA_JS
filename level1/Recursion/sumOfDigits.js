class Solution{
    addDigits(num){
        if(num < 10){
            return num;
        }
        let rem = num %10;
        num = Math.floor(num/10);
        let sum = rem + this.addDigits(num);
        if(sum > 9){
            return this.addDigits(sum);
        }
        return sum;
    }
}
let num = 101;
let s1 = new Solution();
let ans = s1.addDigits(num);
console.log(ans);

// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.


// Examples:
// Input : num = 529

// Output : 7

// Explanation : In first iteration the digits sum will be = 5 + 2 + 9 => 16

// In second iteration the digits sum will be 1 + 6 => 7.

// Now single digit is remaining , so we return it.

// Input : num = 101

// Output : 2

// Explanation : In first iteration the digits sum will be = 1 + 0 + 1 => 2

// Now single digit is remaining , so we return it.