//  https://leetcode.com/problems/find-players-with-zero-or-one-losses/description

// Exp1
// var findWinners = function(matches) {
//     const dictLoster= new Map();
//     const dictWinter= new Map();
//     const ans = [[],[]];
//     for(let match of matches){
//        dictWinter.set(match[0],dictWinter.get(match[0])? dictWinter.get(match[0])+ 1 : 1) ;
//        dictLoster.set(match[1],dictLoster.get(match[1]) ? dictLoster.get(match[1]) + 1 : 1);
//     }

//     dictLoster.forEach((value , key
//     )=>{
//         if(value ===1){
//             ans[1].push(key)
//         }
//     })
    
//     dictWinter.forEach((value, key)=>{
//         if(!dictLoster.has(key)){
//             ans[0].push(key)
//         }
//     })

//     return [ans[0].sort((a,b)=>a-b),ans[1].sort((a,b)=>a-b)]
    
// };

// Exp2 

var findWinners = function(matches) {
    const lossesCount = new Array(Math.pow(10, 5) + 1).fill(-1);

  for(const [winner, loser] of matches) {
    if(lossesCount[winner] === -1) {
      lossesCount[winner] = 0;
    };

    if(lossesCount[loser] === -1) {
      lossesCount[loser] = 1;
    } else {
      lossesCount[loser]++;
    };
  };

  const answer = [[],[]];

  for(let i = 0; i < lossesCount.length; i++) {
    if(lossesCount[i] === 0) {
      answer[0].push(i);
    } else if(lossesCount[i] === 1) {
      answer[1].push(i);
    }
  };


  return answer;

};
