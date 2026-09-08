/**
 * @param {Number[]} arr
 * @returns {Number[]}
 */

class Solution {
    
    rearrange(arr) {
    
       let positive = [];
       let negative = [];
       
       for(let i = 0; i < arr.length; i++)
       {
           if(arr[i] < 0)
           {
               negative.push(arr[i]);
           }
           else {
               positive.push(arr[i]);
           }
       }
       
       let i = 0, j = 0, k = 0;
       while( i < positive.length && j < negative.length)
       {
           if(k%2 === 0)
           {
               arr[k++] = positive[i++];
           }
           else {
               arr[k++] = negative[j++];
           }
       }
       
       while(i < positive.length)
       {
           arr[k++] = positive[i++];
       }
       
       while (j < negative.length)
       {
           arr[k++] = negative[j++];
       }
       
       return arr;
         
    }
}