class Solution {
    
    isSorted(arr) {
        
        const n = arr.length;
    
        if(n === 1)
        return true;
        
        for(let i = 0; i < n - 1; i++)
        {
            if(arr[i] > arr[i+1])
            {
                return false;
            }
        }
        
        return true;
        
    }
}