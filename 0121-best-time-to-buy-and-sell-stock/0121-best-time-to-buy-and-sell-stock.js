/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

      let minprice = Infinity;
      let maxProfitPrice = 0;

      for(let i = 0; i < prices.length; i++)
      {
          if(prices[i] < minprice)
          {
            minprice = prices[i];
          }
          else {
            maxProfitPrice = Math.max(maxProfitPrice, prices[i] - minprice);
          }
      }

      return maxProfitPrice;
    
};