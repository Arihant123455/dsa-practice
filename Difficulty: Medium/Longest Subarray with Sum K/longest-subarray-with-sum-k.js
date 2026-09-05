/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */
class Solution {
    
    longestSubarray(arr, k) {
        
       let map = new Map();
       let n = arr.length;
       let maxlen = 0;
       let preSum = 0;
       
       for(let i = 0; i < n; i++)
       {
           preSum+=arr[i];
           
           if(preSum === k)
           {
               maxlen = Math.max(maxlen, i+1);
           }
           
           let rem = preSum - k;
           if(map.has(rem))
           {
               maxlen = Math.max(maxlen, i-map.get(rem));
           }
           
           if(!map.has(preSum))
           {
               map.set(preSum, i);
           }
       }
       
       return maxlen;
        
    }
}
