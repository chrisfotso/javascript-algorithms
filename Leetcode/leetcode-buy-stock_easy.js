// Say you have an array for which the ith element is the price of a given stock on day i.
// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.
// Note that you cannot sell a stock before you buy one.

var maxProfit = function(prices) {
    let sortedPrices = [...prices].sort();
    let minNumber;
    let profit = 0;
    for (let i = 0; i < sortedPrices.length; i++) {
        minNumber = sortedPrices[i];
        index = prices.indexOf(minNumber);
        for (let j = index + 1; j < prices.length; j++) {
            if (prices[j] - minNumber > profit) {
                profit = prices[j] - minNumber;
            }
        }
    }
    return profit;
};

maxProfit([2, 4, 1])