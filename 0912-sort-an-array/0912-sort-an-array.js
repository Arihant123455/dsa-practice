/**
 * @param {number[]} nums
 * @return {number[]}
 */

function merge(arr, low, mid, high)
{
    let left = low;
    let right = mid+1;
    const temp = [];

    while(left<=mid && right<=high)
    {
        if(arr[left]<=arr[right])
        {
            temp.push(arr[left++]);
        }
        else {
            temp.push(arr[right++]);
        }
    }

    while(left <= mid)
    {
        temp.push(arr[left++]);
    }

    while(right <= high){
        temp.push(arr[right++]);
    }

    for(let i=low; i<=high; i++)
    {
        arr[i] = temp[i-low];
    }
}

function mergeSort(arr, low, high)
{
    if(low >= high)
    return;

   let mid = Math.floor((low+high)/2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid+1, high);
    merge(arr, low, mid, high);
}

var sortArray = function(nums) {

    mergeSort(nums, 0, nums.length-1);
    return nums;
};