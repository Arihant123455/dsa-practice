/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {

    let n = nums.length;

    let k = 0;

    for(let i = 0; i < n-1; i++)
    {
        if(nums[i] > nums[i+1])
        {
                 k = (n - 1) - i;
        }
    }

    if(k === 0)
    return true;

    reverse(nums, 0, n-1);
    reverse(nums, 0, k-1);
    reverse(nums, k, n-1);

     for(let i = 0; i < n-1; i++)
    {
        if(nums[i] > nums[i+1])
        {
                 return false;
        }
    }

    return true;
    
};

function reverse(nums, start, end)
{
    while(start < end)
    {
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}