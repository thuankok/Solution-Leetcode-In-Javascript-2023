// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description

var maxProfit = function(prices) {
    let maxProfit = 0
    let i=0,j=1
    while(j<prices.length) {
        if(prices[i] > prices[j]) {
            i=j
            j++
        } else {
            maxProfit = Math.max(maxProfit, prices[j]-prices[i])
            j++
        }
    }
    return maxProfit
};
