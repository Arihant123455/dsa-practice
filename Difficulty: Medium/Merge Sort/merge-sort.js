/**
 * @param {number[]} arr
 * @param {number} l
 * @param {number} r
 */
class Solution {
    
    merge(arr, low, mid, high)
    {
        let left = low, right = mid+1;
        const temp = [];
        
        while(left <= mid && right <= high)
        {
            if(arr[left] <= arr[right])
            {
                temp.push(arr[left++]);
                
            } else {
                
                temp.push(arr[right++]);
            }
        }
        
        while(left <= mid)
        {
            temp.push(arr[left++]);
        }
        
        while(right <= high)
        {
            temp.push(arr[right++]);
        }
        
        
        for(let i = low; i <= high; i++)
        {
            arr[i] = temp[i-low];
        }
    }
    
    mergeSort(arr, l, r) {
        
        if(l >= r)
        return;
        
        let mid = Math.floor((l+r)/2);
        
        this.mergeSort(arr, l, mid);
        this.mergeSort(arr, mid+1, r);
        this.merge(arr, l, mid, r);
        
    }
}