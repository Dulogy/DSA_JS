class Solution {
    insertNewInterval(Intervals, newInterval) {
        let interval = [];
        let count = 0;
        for(let i = 0; i < Intervals.length;i++){
            if(Intervals[i][0] > newInterval[0]){
                interval.push(newInterval);
                break;
            }else{
                interval.push(Intervals[i]);
                count++;
            }
        }
        for(let i = count; i < Intervals.length;i++){
            interval.push(Intervals[i]);
            count++;
        }
        let max = newInterval[1];
        let min = newInterval[0];
        console.log(min,max);

        return interval;
    }
}
Intervals = [ [1, 3] , [6, 9] ] , newInterval = [2, 5];
let c1 = new Solution();
let ans = c1.insertNewInterval(Intervals,newInterval);
console.log(ans);