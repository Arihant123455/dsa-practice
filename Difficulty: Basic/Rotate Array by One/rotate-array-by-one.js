class Solution {
    
    rotate(arr) {
        
        const n = arr.length;
        const temp = arr[n-1];
        
        for(let i = 1; i < n; i++)
        {
            arr[n-i] = arr[n-i-1];
        }
        
        arr[0] = temp;
        
    }
}