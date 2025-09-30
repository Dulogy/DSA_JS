class Solution {
    isExistSubsetSum(arr,target){
        return this.helper(0,arr,arr.length,0,target)
    }

    helper(index,arr,arrLength,sum,target){
        if(index == arrLength){
            return sum == target
        }
        if(this.helper(index+1,arr,arrLength,sum,target))
            return true;
        if(this.helper(index+1,arr,arrLength,sum+arr[index],target))
            return true;
        return false;
    }
}

let a = [1,2,3,4,5,6,7];
let s1 = new Solution();
let ans = s1.isExistSubsetSum(a,37);
console.log(ans)