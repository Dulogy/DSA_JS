/*
class RemoveDuplicates { 
    removeDuplicates(arr){
        let set = new Set(arr);
        let uniquearray = [...set];
        console.log(uniquearray)
    }
}
let arr = [1,2,2,3,4,5,5,6];
let rd = new RemoveDuplicates();
rd.removeDuplicates(arr);
*/


class RemoveDuplicates { 
    removeDuplicates(arr){
        let j = 0;
        console.log(arr.length);
        for(let i = 0; i < arr.length; i++){
            if(arr[i] !== arr[i+1]){
                arr[j] = arr[i];
                j++;
            }
        }
        console.log("Unique Elements",j);
        for(let k = j; k < arr.length; k++){
            arr[k] ="-";
        }
        console.log(arr)
    }
}
let arr = [1,2,2,3,4,4,5,5,6];
let rd = new RemoveDuplicates();
rd.removeDuplicates(arr);