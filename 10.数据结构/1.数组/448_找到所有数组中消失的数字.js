/*var findDisappearedNumbers = function(nums) {
    let compare=function (a,b)
    {
        if(a===b){return 0}
        return (a>b)?1:-1
    }
    nums.sort(compare)

    let result=[]
    for(let i of nums.keys())
    {
        if(i===0 && nums[i]>1)
        {result=result.concat(Array(nums[i]-1).fill(0).map((v,k)=>(k+1)))}
        else if(nums[i]>nums[i-1]+1)
        {result=result.concat(Array(nums[i]-nums[i-1]-1).fill(0).map((v,k)=>(k+nums[i-1]+1)))}

        if(i===nums.length-1 && nums.length>nums[nums.length-1])
        {result=result.concat(Array(nums.length-nums[nums.length-1]).fill(0).map((v,k)=>(k+nums[nums.length-1]+1)))}
    }

    return result
};
console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));*/
var findDisappearedNumbers = function(nums) {
    for(let i of nums.keys())
    {
        if(nums[i]<=nums.length)
        {nums[nums[i]-1]+=nums.length}
        else if(nums[i]%nums.length!==0)
        {nums[nums[i]%nums.length-1]+=nums.length}
        else if(nums[i]%nums.length===0)
        {nums[nums.length-1]+=nums.length}
    }
    let result=[]
    for(let i of nums.keys())
    {
        if(nums[i]<=nums.length)
        {result.push(i+1)}
    }
    return result
}
console.log(findDisappearedNumbers([2,3,4,3,6,7,7,1]));
