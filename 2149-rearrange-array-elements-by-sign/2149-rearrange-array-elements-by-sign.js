/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {

    let postiveIndex = 0;
    let negativeIndex = 1;

    let ans  = new Array(nums.length).fill(0);

    for(let i = 0; i < nums.length; i++)
    {
        if(nums[i] < 0) {
            ans[negativeIndex] = nums[i];
            negativeIndex+=2;
        }
        else {
            ans[postiveIndex] = nums[i];
            postiveIndex+=2;
        }
    }
    return ans;
    
};