//min+rest=sum->rest=sum-min->-min+rest=sum-2*min
//贪心原则：每次改变数组中最小值
var largestSumAfterKNegations = function(nums, k) {
    /*if(nums.length===1)return -nums[0]

    nums.sort((a,b)=>(a-b))
    let sum=nums.reduce((a,b)=>(a+b))
    while (k>0)
    {
        sum-=(2*nums[0])
        k-=1
        nums[0]=(-nums[0])
        if(nums[0]>=nums[nums.length-1]) {nums.push(nums.shift())}
        else if(nums[0]>nums[1] && nums[0]<nums[nums.length-1])
        {
            for(let i=1; i<nums.length; i++)
            {
                if(nums[0]>=nums[i] && nums[0]<=nums[i+1])
                {
                    nums.splice(i+1,0,nums.shift())
                    break
                }
            }
        }
    }
    return sum*/

    //(1)全部非负：
    //1)k为偶->res=sum(nums)
    //2)k为奇->res=sum(nums)-2*min
    //(2)存在负数：
    //1)k=count(负数)->res=sum(nums负数全部取反)
    //2)k<count(负数)->res=sum(nums)+2*sum(最小K个负数分别取反)
    //3)k>count(负数)->nums=nums负数全部取反,k=k-count(负数)->(1)
    const allPositives=function (K,NUMS){
        if(K%2===0)return NUMS.reduce((a,b)=>(a+b))
        else {return NUMS.reduce((a,b)=>(a+b))-2*Math.min(...NUMS)}
    }

    if(Math.min(...nums)>=0) {return allPositives(k,nums)}
    else
    {
        let negative=[]
        let negativeCount=0
        nums.forEach((v)=>{
            if(v<0)
            {
                negative.push(v)
                negativeCount+=1
            }
        })

        if(k===negativeCount)return nums.reduce((a,b)=>(Math.abs(a)+Math.abs(b)))
        else if(k>negativeCount){return allPositives(k-negativeCount,nums.map((v)=>(v<0?-v:v)))}
        else
        {
            negative.sort((a,b)=>(a-b))
            return nums.reduce((a,b)=>(a+b))+2*(k>1?negative.slice(0,k).reduce((a,b)=>(Math.abs(a)+Math.abs(b))):-negative[0])
        }
    }
};
//console.log(largestSumAfterKNegations([4, 2, 3], 1));
//console.log(largestSumAfterKNegations([3, -1, 0, 2], 3));
//console.log(largestSumAfterKNegations(nums = [2, -3, -1, 5, -4], k = 2));
console.log(largestSumAfterKNegations([9, -4, -7, 9, 6], 1));