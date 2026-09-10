/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {

    const mp = {};
    for(const num of nums1)
    {
        mp[num] = (mp[num] || 0) + 1;
    }

    const insertion = [];
    for(const num of nums2)
    {
        if(mp[num])
        {
            insertion.push(num);
            delete mp[num];
        }
    }
    return insertion;
};