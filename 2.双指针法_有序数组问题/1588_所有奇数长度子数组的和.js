var sumOddLengthSubarrays = function(arr) {
    let res=0
    for(let i of arr.keys())
    {
        let temp=arr[i]
        res+=temp
        let left=i+1
        let right=i+2
        while (right<=arr.length-1)
        {
            temp+=arr[left]+arr[right]
            res+=temp
            left+=2
            right+=2
        }

    }
    return res
};
console.log(sumOddLengthSubarrays([10,11,12]));