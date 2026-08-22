/**
 * @param {number[]} arr
 * @returns {number}
*/
class Solution {
    
    findDiff(arr) {
        
        let n = arr.length;
        
        const map = new Map();
        
        for(let i = 0; i < n; i++)
        {
            map.set(arr[i], (map.get(arr[i]) || 0 ) + 1);
        }
        
        let maxFreq = -Infinity, maxElem = 0;
        let minFreq = Infinity, minElem = 0;
        
        map.forEach((value, key) => {
            if(value > maxFreq)
            {
                maxFreq = value;
                maxElem = key;
            }
            if(value < minFreq)
            {
                minFreq = value;
                minElem = key;
            }
        })
        
        return (maxFreq - minFreq);
        
    }
}