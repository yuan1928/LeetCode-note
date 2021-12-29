//resolve为每个分支的解元素记录
//backtrack终止条件：传入的target<=传入的candidates[0]或者candidates为空
//backtrack不终止时的操作：
// 遍历candidates每个元素，如果元素i小于当前target -> 将该元素加进resolve，backtrack(candidates.slice(i+1)，target-resolve之和，resolve)

var combinationSum2 = function(candidates, target) {
    var result=[]
    var compare=function (a,b){
        if(a===b)return 0;
        return (a<b)?-1:1
    }
    candidates.sort(compare)

    var backtrack=function (candidates,target,resolve){
        if(target<=candidates[0])
        {
            if(target===candidates[0]){result.push([...resolve,target]);return}
            else if(target===0){result.push(resolve);return;}
            else {return;}
        }
        if(candidates.length===0)
        {
            if(target===0) {result.push(resolve);return;}
            else {return;}
        }//两个终止条件

        for(var i of candidates.keys())
        {
            if(i-1>=0 && candidates[i]===candidates[i-1]){continue}//避免重复解
            //注意：若candidates[i]===candidates[i-1]，则包含candidates[i]的解系是包含candidates[i-1]解系的子集
            if(candidates[i]<=target)
            {
                var newResolve=resolve.slice()
                newResolve.push(candidates[i])
                backtrack(candidates.slice(i+1), target-candidates[i], newResolve)
            }
        }
    }

    backtrack(candidates,target,[])
    return result
};
console.log(combinationSum2([2,5,2,1,2], 5));
