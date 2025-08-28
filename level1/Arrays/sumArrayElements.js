function addArraySum(arr){
    let sum = 0;
    for(let i of arr){
        sum+= i;
    }
    console.log(sum);
}

addArraySum(new Array(1,2,3,4,5,6,7,8,9,10));