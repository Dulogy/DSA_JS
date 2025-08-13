function checkIsomorphic(str1,str2){
    if(str1.length !== str2.length){
        return false;
    }
    let str1Map = new Map();
    let str2Map = new Map();
    
    for(let i = 0; i < str1.length; i++){
        let charS = str1[i];
        let charT = str2[i];
        
        if(str1Map.has(charS) && str1Map.get(charS) !== charT){
            return false;
        }

        if(str2Map.has(charT) && str2Map.get(charT) !== charS){
            return false;
        }

        str1Map.set(charS,charT);
        str2Map.set(charT,charS);

    }
    return true;
}

let str1 = "paper";
let str2 = "title";
let isIsomorphic = checkIsomorphic(str1,str2);
console.log(isIsomorphic)