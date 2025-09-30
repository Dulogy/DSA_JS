class Solution{
    subsetSumCount(arr,target){
        let count = this.helper(0,arr,arr.length,sum,target);
        return count;
    }
    helper(index,arr,arrLength,sum,target){
        if(index == arrLength){
            return sum == target ?  1 : 0;
        }
        let exclude = this.helper(index+1,arr,arrLength,sum,target);
        let include = this.helper(index+1,arr,arrLength,sum+arr[index],target);
        return exclude + include;
    }
}
let a = [1,2,3,4,5,6,7];
let s1 = new Solution();
let ans = s1.subsetSumCount(a,7);
console.log(ans);