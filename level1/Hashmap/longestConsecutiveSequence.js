class Solution {
    lcs(arr){
        let arrlen = arr.length;
        if(arrlen == 0){
            return 0;
        }
        let longest = 1; 
        let set = new Set();
        for(let i of arr){
            set.add(i);
        }
        for(let i of set){
            console.log(i,set.has(i));
            if(!set.has(i-1)){
                let count = 1;
                let x = i;
                while(set.has(x+1)){
                    x = x + 1;
                    count = count + 1;
                }
                longest = Math.max(longest,count);
            }
        }
        return longest;
    }
}

let arr = [ 100, 4, 200, 1, 3, 2];
let sol1 = new Solution();
let ans = sol1.lcs(arr);
console.log(ans);