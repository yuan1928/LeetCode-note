//遍历数组中每个值，找出可能包含其的解组合，从数组中删去该元素，递归：重复遍历新数组、搜寻第一个元素的解组合
//递归终止条件：target<=candidates[0]或者candidate为空且此时target=0
//以[2,3,6,7],target=7为例：
//current=2：7/2=3,7%2=1 -> 包含2的解组合最多有3个2
//3个2：backtrack([3,6,7],7-3*2) -> 终止，无解
//2个2：backtrack([3,6,7],7-2*2) -> 终止，解为[2,2,3]
//1个2：backtrack([3,6,7],7-1*2) -> 5/3=1,5%2=2 -> backtrack([6,7],5-1*3) -> 终止，无解
//current=3：7/3=2,7%3=1 ->包含3的解组合最多有2个3
//2个3：backtrack([6,7],7-2*3) -> 终止，无解
//1个3：backtrack([6,7],7-1*3) -> 终止，无解
//current=6：7/6=1,7%6=1 ->包含6的解组合最多有1个6
//1个3：backtrack([7],7-1*6) -> 终止，无解
//current=7：7/7=1,7%7=0 -> backtrack([0],7-1*7)-> 终止，解为[7]
//具体实现中在每一条分支的解记录用resolve保存，如果最终有解，则将最后一次递归的解加入resolve后、压入result

var combinationSum = function(candidates, target) {
    var result=[]
    var compare=function (a,b){
        if(a===b){return 0}
        return (a<b)?-1:1
    }
    candidates.sort(compare)

    var backtrack=function (candidates,target,resolve){
        if(target<=candidates[0])
        {
            if(target===candidates[0]){result.push([...resolve,target]);return;}
            if(target===0){result.push(resolve);return;}
            else {return}
        }
        else if(candidates.length===0 && target===0){result.push(resolve);return}//终止条件

        var current=candidates[0]
        var n = Math.floor(target / current)//此次递归的目的是搜寻candidates[0]在candidates。slice(1)、candidates.slice(2)...的可能解组合
        while (n > 0)
        {
            var resolveNew = []
            for (var i of Array(n).keys()) {resolveNew.push(current)}//本次递归新增的解元素
            if((target - resolveNew.reduce((a, b) => (a + b)))===0)//当前解组合=target、只需在下次递归中终止于第二个条件，无需再搜寻其他解元素
            {backtrack(candidates.slice(1),target - resolveNew.reduce((a, b) => (a + b)),resolve.slice().concat(resolveNew))}
            else//当前解组合！=target，需要遍历candidates.slice(1)的所有子数组来搜寻新的解元素
            {
                for(var j of candidates.slice(1).keys())
                {
                    backtrack(candidates.slice(j+1),
                        target - resolveNew.reduce((a, b) => (a + b)),
                        resolve.slice().concat(resolveNew))
                }
            }
            n -= 1
        }

    }

    for(var i of candidates.keys())
    {
        backtrack(candidates.slice(i),target,[])
    }
    return result
};
console.log(combinationSum([1], 8));