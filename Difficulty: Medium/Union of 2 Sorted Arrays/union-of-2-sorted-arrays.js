/**
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number[]}
 */
class Solution {
    
    findUnion(a, b) {
        
        let union = [];
        
        let n = a.length;
        let m = b.length;
        
        let i = 0, j = 0;
        
        while(i < n && j < m)
        {
            if(a[i] < b[j])
            {
                if(union.length === 0 || union[union.length-1] !== a[i])
                {
                    union.push(a[i]);
                }
                i++;
            }
            else if(b[j] < a[i])
            {
                if(union.length === 0 || union[union.length-1] !== b[j])
                {
                    union.push(b[j]);
                }
                j++;
                
            }
            else
            {
                if(union.length === 0 || union[union.length-1] !== a[i])
                {
                    union.push(a[i]);
                }
                i++;
                j++;
            }
        }
        
        while(i < n)
        {
            if(union.length === 0 || union[union.length-1] !== a[i])
                {
                    union.push(a[i]);
                }
                i++;
        }
        
        while(j < m)
        {
            if(union.length === 0 || union[union.length-1] !== b[j])
                {
                    union.push(b[j]);
                }
                j++;
            
        }
        
        return union;
        
    }
}