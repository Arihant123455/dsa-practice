
class Solution {
    /**
    * @param number[] arr

    * @returns number
    */
    largest(arr) {
        // code here
        if(arr.length === 1)
        return arr[0];
        
        let maxElem = arr[0];
        
        for(let i = 1;i < arr.length; i++)
        {
            if(maxElem < arr[i])
            {
                maxElem = arr[i];
            }
        }
        return maxElem;
    }
}
