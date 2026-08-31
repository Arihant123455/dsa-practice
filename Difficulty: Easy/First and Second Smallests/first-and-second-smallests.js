class Solution {
    
    minAnd2ndMin(arr) {
        
        if(arr.length < 2)
        return [-1];
        
        let smallest = arr[0];
        let ssmallest = Infinity;
        
        for(let i = 0; i < arr.length; i++)
        {
            if(arr[i] < smallest)
            {
                ssmallest = smallest;
                smallest = arr[i];
            }
            else if(arr[i] > smallest && arr[i] < ssmallest)
            {
                ssmallest = arr[i];
            }
        }
        
        return ssmallest === Infinity ? [-1] : [smallest, ssmallest];
        
    }
}