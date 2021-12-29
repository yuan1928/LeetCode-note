

/*var jump=function (nums){     用基于贪心的回溯实现，原理一致，但由于回溯是通过栈实现的，所以数组太大时会溢出
    let result=0
    var backtrack=function (nums,steps){
        if(nums.length===1)
        {
            result=steps
            return
        }

        let reachable=0
        for(let i of nums.slice(0,nums.length-1).keys())
        {
            if(i<=reachable && i+nums[i]>=nums.length-1)
            {
                backtrack(nums.slice(0,i+1),steps+1)
                break
            }
            else {reachable=Math.max(reachable,i+nums[i])}
        }
    }
    backtrack(nums,0)
    return result
}
console.log(jump([2, 3, 0, 1, 4]));*/

var jump=function (nums){
    let result=0

    while (nums.length>=1)
    {
        if(nums.length===1){return result}//回溯到头节点时，停止回溯，返回跳数

        let reachable=0
        for(let i of nums.slice(0,nums.length-1).keys())
        {
            if(i<=reachable && i+nums[i]>=nums.length-1)//寻找当前nums中、可作为倒数第二个节点跳进尾节点中、距离尾节点最远的那个
            {
                result+=1
                nums=nums.slice(0,i+1)//通过改变nums，寻找可跳进当前节点(新的尾节点)中、距离当前节点最远的那个节点
                break
            }
            else {reachable=Math.max(reachable,i+nums[i])}
        }
    }
}
console.log(jump([1,1,1,1,1]))

//另一种解法：正向考虑，假设当前位置为i，则可以到达的最远位置为i+nums[i]
//基于贪心原则nums[j]=max(i+1,i+2...i+nums[i])在可以到达的i+1,i+2,...,i+nums[i]中选择节点j作为下一跳