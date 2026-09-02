class Solution {
    
    search(arr, x) {
        
        let n = arr.length;
        
        for(let i = 0; i < n; i++)
        {
            if(arr[i] === x)
            {
                return i;
            }
        }
        
        return -1;
        
    }
}