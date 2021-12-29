var combine = function(n, k) {
    let nums=Array(n).fill(0).map((v,k)=>(k+1))
    let result=[]
    let backtrack=function (start,combination){
        if(combination.length+(n-start+1)<k){return;}//剪枝
        if(combination.length===k)
        {
            result.push(combination)
            return
        }

        for(let i of nums.slice(start).keys())
        {
            let newCombination=combination.slice()
            newCombination.push(nums[start+i])
            //let newCombination=combination.push(nums[start+i]) 1.push:数组原地操作后返回push值，所以push的返回值不能作为下次递归的传入参数
            // 2.返回上层递归后combination的值也须回退到此次递归前,所以不能直接在combination上push后将其传入下一次递归
            backtrack(start+i+1,newCombination)
        }
    }

    backtrack(0,[])
    return result
};
console.log(combine(10, 5));