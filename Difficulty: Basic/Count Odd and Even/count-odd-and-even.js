/**
 * @param {number[]} arr
 */

class Solution {

    countOddEven(arr) {
        
        let countOdd = 0;
        let countEven = 0;
        
        for(const num of arr)
        {
            if(num%2 === 0)
            countEven++;
            else
            countOdd++;
        }
        return [countOdd, countEven];
        
    }
}