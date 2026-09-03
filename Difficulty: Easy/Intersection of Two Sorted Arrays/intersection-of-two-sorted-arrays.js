class Solution {
    
    intersection(arr1, arr2) {
        
        let i = 0;
        let j = 0;
        let n = arr1.length;
        let m = arr2.length;
        
        let set = new Set();
        
        while(i < n && j < m)
        {
            if(arr1[i] < arr2[j])
            {
                i++;
            }
            else if(arr2[j] < arr1[i])
            {
                j++;
            } 
            else
            {
                set.add(arr1[i]);
                i++;
                j++;
            }
        }
        
        return Array.from(set);
        
        return 
        
    }
}