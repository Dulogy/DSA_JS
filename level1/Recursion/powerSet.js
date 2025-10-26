class Solution{
    powerSet(nums){
        let res = [];
        let cur = [];
        this.helper(0,nums.length,nums,cur,res);
        return res;
    }

    helper(index,n,nums,cur,res){
        if(index == n){
            res.push([...cur]);
            return;
        }
        this.helper(index+1,n,nums,cur,res);
        cur.push(nums[index]);
        this.helper(index+1,n,nums,cur,res);
        cur.pop();
    }
}

let s1 = new Solution();
let ans = s1.powerSet([1,2,3]);
console.log(ans);