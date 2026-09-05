/**
 * @param {Number[]} arr
 * @returns {Number}
 */
class Solution {
    maxLength(arr) {
        
        let n = arr.length;
        let maxlen = 0;
        let presum = 0;
        let map = new Map();
        
        for(let i = 0; i < n; i++)
        {
            presum+=arr[i];
            
            if(presum === 0)
            {
                maxlen = Math.max(presum, i+1);
            }
            
            let rem = presum - 0;
            
            if(map.has(rem))
            {
                maxlen = Math.max(maxlen, i-map.get(rem));
            }
            
            if(!map.has(presum))
            {
                map.set(presum, i);
            }
        }
        return maxlen;
    }
}