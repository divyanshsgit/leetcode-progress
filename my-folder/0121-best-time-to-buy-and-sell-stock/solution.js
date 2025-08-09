/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min=prices[0]
    let maxprofit=0
    for(let i=0;i<prices.length;i++){
        min=Math.min(min,prices[i])
        const profit = prices[i]-min;
        maxprofit=Math.max(profit,maxprofit)

    }
    return maxprofit
};
