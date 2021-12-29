/*var findMaxLength = function(nums) {
    let zero=[0]
    let one=[0]
    for(let i=1; i<=nums.length; i++)
    {
        zero[i]=zero[i-1]+((nums[i-1]===0)?1:0)
        one[i]=one[i-1]+((nums[i-1]===1)?1:0)
    }

    let res=0
    for(let i=1; i<=nums.length; i++)
    {
        for(let j=0; j<i; j++)
        {
            if(zero[i]-zero[j]===one[i]-one[j])
            {
                res=Math.max(res,(i-j))
                break
            }
        }
    }
    return res
};*/
var findMaxLength = function(nums){
    let memo={}
    let cur=0//当前元素‘前缀和’：nums[0,当前元素]中0、1个数相抵后的值
    let res=0
    for(let i=0; i<nums.length; i++)
    {
        cur+=((nums[i]===0)?1:-1)
        if(cur===0){res=Math.max(res,i+1)}//nums[0,当前元素]已经0、1个数相等
        else if(memo[cur]!==undefined){res=Math.max(res,i-memo[cur])}//nums[0,当前]-nums[0,memo[cur]]=nums[memo[cur]+1，当前]0、1相消
        //memo[cur]=i
        if(memo[cur]===undefined)memo[cur]=i//memo记录的应该是抵消值为cur的最早的元素 -> nums[memo[cur]+1，当前]尽可能长
    }
    return res
}
console.log(findMaxLength([0, 0, 1, 0, 0, 0, 1, 1]));
console.log(findMaxLength([0, 1, 0,1]));
console.log(findMaxLength([1, 0]));