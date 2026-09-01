/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    const n = nums.length;

    if(n === 0 || n === 1)
    return n;

    let i = 0;
    for(let j = 1; j < n; j++)
    {
        if(nums[i] !== nums[j])
        {
            nums[i+1] = nums[j];
            i++;
        }
    }
    
    return i+1;
};