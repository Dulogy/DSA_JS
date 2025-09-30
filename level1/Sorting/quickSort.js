class QuickSortAlgo{
    quickSort(arr,low,high){
        if(low < high){
            let pIndex = this.partition(arr,low,high);
            this.quickSort(arr,low,pIndex-1);
            this.quickSort(arr,pIndex+1,high);
        }
        return arr;
    }
    partition(arr,low,high){
        // let first element is pivot element
        let pivot = arr[low];
        let i = low;
        let j = high;
        while(i < j){
            while(arr[i] <= pivot && i <= high-1){
                i++;
            }
            while(arr[j] > pivot && j > low+1){
                j--;
            }
            if(i < j){
                [arr[i],arr[j]] = [arr[j],arr[i]];
            }
        }
        [arr[low],arr[j]] = [arr[j],arr[low]];
        return j;
    }
}

let arr = [2,1,3,5,4,6,4,3];
let q1 = new QuickSortAlgo();
let ans = q1.quickSort(arr,0,arr.length-1);
console.log(ans);


















/*
    partition(arr,low,high){
        let pivot = arr[low];
        let i = low;
        let j = high;
        while(i < j){
            while(arr[i] <= pivot && i <= high -1){
                i++;
            }
            while(arr[j] > pivot && j >= low+1){
                j--;
            }
            if(i < j){
                [arr[i],arr[j]] =  [arr[j],arr[i]]
            }
        }
        [arr[low],arr[j]] = [arr[j],arr[low]];
        return j;
    }
*/