class MergeSortAlgorithm {
    mergeSort(arr,low,high){
        if(low>=high){
            return;
        }
        let mid = Math.floor((low+high)/2);
        this.mergeSort(arr,low,mid);
        this.mergeSort(arr,mid+1,high);
        this.mergeArrayElements(arr,low,mid,high);
        return arr;
    }
    mergeArrayElements(arr,low,mid,high){
        let left = low;
        let temp = [];
        let right = mid + 1;
        while(left <= mid && right <= high){
            if(arr[left] <= arr[right]){
                temp.push(arr[left]);
                left++;
            }else{
                temp.push(arr[right]);
                right++;
            }
        }
        while(left <= mid){
            temp.push(arr[left]);
            left++;
        }
        while(right <= high){
            temp.push(arr[right]);
            right++;
        }
        for(let i = low; i <= high;i++){
            arr[i] = temp[i-low];
        }
    }
}

let arr = [5,4,3,1,2,4,3];
let m1 = new MergeSortAlgorithm();
let ans = m1.mergeSort(arr,0,arr.length-1);
console.log(ans);