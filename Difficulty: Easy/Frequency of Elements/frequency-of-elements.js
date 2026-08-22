class Solution {
    
    countFreq(arr) {
        
       const ans = [];    
       const map = new Map();
       
       for(let i = 0; i < arr.length; i++)
       { 
         map.set(arr[i], (map.get(arr[i]) || 0)+1);
       }
       
       map.forEach((value, key) => {
           ans.push([key, value]);
       })
       
       return ans;
    }
}