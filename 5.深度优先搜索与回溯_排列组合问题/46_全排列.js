//backtrack(nums,combination)
//终止条件：nums为空，combination压入result
//每次递归操作：遍历当前nums元素，将当前元素加入combination、从nums删去该元素 -> backtrack(新的nums，新的combination)

var permute = function(nums) {
    var result=[]
    var backtrack=function (nums,combination){
        if(nums.length===0)
        {
            result.push(combination)
            return
        }

        for(var i of nums.keys())
        {
            var newCombination=combination.slice()
            var newNums=nums.slice()
            newCombination.push(nums[i])
            newNums.splice(i,1)
            backtrack(newNums,newCombination)
        }
    }

    backtrack(nums,[])
    return result
};
console.log(permute([1]));