/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
     const bucket = Array(20001).fill(0);
    for (const num of nums) bucket[num + 10000]++;

    let res = 0, add = true;
    for (let i = 0; i < 20001; i++) {
        while (bucket[i] > 0) {
            if (add) res += i - 10000;
            add = !add;
            bucket[i]--;
        }
    }
    return res;
};