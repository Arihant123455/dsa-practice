/**
 * @param {number[]} arr
 * @returns {number[]}
 */
class Solution {
    
    valEqualToPos(arr) {
    
      let temp  = [];
      
      for(let i = 0; i < arr.length; i++)
      {
          if(arr[i] === i+1)
          temp.push(arr[i]);
      }
      return temp;
        
    }
}
