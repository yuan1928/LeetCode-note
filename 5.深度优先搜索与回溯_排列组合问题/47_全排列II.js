//先对nums排序
//递归基本按照46题思路，但递归中遍历nums时，如果当前元素等于前一个元素，则当前元素不进行递归


var permuteUnique = function(nums) {
    var result=[]
    var compare=function (a,b){
        if(a===b){return 0}
        return (a<b)?-1:1
    }
    var backtrack=function (nums,combination){
        if(nums.length===0)
        {
            result.push(combination)
            return
        }

        for(var i of nums.keys())
        {
            if(i-1>=0 && nums[i]===nums[i-1]){continue}
            var newCombination=combination.slice()
            var newNums=nums.slice()
            newCombination.push(nums[i])
            newNums.splice(i,1)
            backtrack(newNums,newCombination)
        }
    }

    nums.sort(compare)
    backtrack(nums,[])
    return result

};

console.log(permuteUnique([1, 2,3]));