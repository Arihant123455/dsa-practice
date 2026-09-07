/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let minPrice = Infinity;

        
        let maxProfit1 = 0;

        
        for (let price of prices) {
        
            if (price < minPrice) {
                minPrice = price;
            }
            
            else {
                maxProfit1 = Math.max(maxProfit1, price - minPrice);
            }
        }

        return maxProfit1;
    
};