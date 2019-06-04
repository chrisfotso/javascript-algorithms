// Say you have an array for which the ith element is the price of a given stock on day i.
// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.
// Note that you cannot sell a stock before you buy one.
//Example input: [7,1,5,3,6,4]
//Expected output: 5
//Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5

const maxProfit = function(prices) {
  let min = prices[0],
    result = 0;

  for (let i = 1; i < prices.length; i++) {
    const currNum = prices[i];
    if (currNum < min) min = currNum;
    else if (currNum - min > result) {
      result = currNum - min;
    }
  }

  return result;
};
