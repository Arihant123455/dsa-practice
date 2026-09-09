/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

  const hs = new Set();
  for(const num of nums)
  {
       if(hs.has(num))
       {
        return true;
       } else {
        hs.add(num);
       }
  }

  return false;
    
};