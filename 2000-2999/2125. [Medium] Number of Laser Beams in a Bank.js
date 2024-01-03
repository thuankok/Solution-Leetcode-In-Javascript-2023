// https://leetcode.com/problems/number-of-laser-beams-in-a-bank/description

var numberOfBeams = function(bank) {
    let ans = 0;
    let arrTemp = []
    for(let s of bank){
        let amountOne = 0;
        for (let e of s){
            if(e ==1){
                amountOne++;
            };
        }
        if(amountOne !==0 ){
            arrTemp.push(amountOne);
        }
    };

    for(let i= 1 ; i< arrTemp?.length ; i++){
        ans+= arrTemp[i-1]*arrTemp[i];
        
    }
    return ans;
    
};
