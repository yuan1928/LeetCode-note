var isNStraightHand = function(hand, groupSize) {
    if(hand.length%groupSize!==0)return false

    let nums=[]//按大小顺序记录hand中出现过的数
    let frequency=[]//按同样顺序记录nums[i]出现的次数
    for(let num of hand)
    {
        if(nums.length===0)
        {
            nums[0]=num
            frequency[0]=1
        }
        else
        {
            for(let i=0; i<nums.length; i++)
            {
                if(nums[i]===num) {frequency[i]+=1;break}
                else if(nums[i]<num && nums[i+1]>num)
                {
                    nums.splice(i+1,0,num)
                    frequency.splice(i+1,0,1)
                    break
                }
                else if(num<nums[0])
                {
                    nums.unshift(num)
                    frequency.unshift(1)
                    break
                }
                else if(num>nums[nums.length-1])
                {
                    nums.push(num)
                    frequency.push(1)
                    break
                }
            }
        }
    }

    //每组牌：nums[0]~nums[groupSize-1]
    //判断完当前牌组是否存在后，更新nums和frequency，开始下一轮判断
    while (nums.length)
    {
        if(nums[groupSize-1]!==nums[0]+groupSize-1 || groupSize-1>nums.length-1)return false
        else
        {
            let minIdx=0
            for(let i=1; i<=groupSize-1; i++)
            {
                if(frequency[i]-frequency[0]<0)return false//nums[i]不够用
                else {frequency[i]-=frequency[0]}
                if(frequency[i]===0 && (minIdx===0 || frequency[i-1]===0))minIdx=i
            }
            nums=nums.slice(minIdx+1)//去掉牌数为0的牌
            frequency=frequency.slice(minIdx+1)
        }
    }
    return true
};
console.log(isNStraightHand(hand = [1, 2, 3, 6, 2, 3, 4, 7, 8], groupSize = 3));
console.log(isNStraightHand(hand = [1, 2, 3, 4, 5], groupSize = 4));