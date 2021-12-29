
var singleNumbers = function(nums) {
    //backtrack(0,nums.length-1)

    let res=[]
    let i=0
    while (i<=nums.length-1)
    {
        if(res.length===2)break
        if(nums[i+1]!==nums[i]){res.push(nums[i]);i+=1}
        else {i+=2}
    }
    return res
};
//先对所有数字进行一次异或，得到两个出现一次的数字的异或值。（两个相同的数异或值为0000）
// 在异或结果中找到任意为 1 的位。(两个目标数这一位不同)
// 根据这一位对所有的数字进行分组。(两个目标数分布于两个组中)
// 在每个组内进行异或操作，得到两个数字。

var singleNumber = function(nums) {
    const backtrack=function (start,end){
        if(start===end || start===end+1)return
        if(end===start+1)
        {
            if(nums[end]<nums[start])
            {
                let temp=nums[start]
                nums[start]=nums[end]
                nums[end]=temp
            }
            return
        }

        let left=start+1
        let right=end
        while (left<right)
        {
            if(nums[left]===nums[start] && nums[right]===nums[start])
            {
                if(left+1<=right-1)
                {
                    left+=1
                    right-=1
                }
                else {left+=1}
            }
            while (nums[left]<nums[start] && left<end){left+=1}
            while (nums[right]>nums[start] && right>left) {right-=1}
            let temp=nums[left]
            nums[left]=nums[right]
            nums[right]=temp
        }
        if(nums[left]<nums[start])
        {
            let temp=nums[start]
            nums[start]=nums[left]
            nums[left]=temp
            backtrack(start,left-1)
            backtrack(left+1,end)
        }
        else
        {
            backtrack(start,left-1)//注意右边界
            backtrack(left,end)
        }
    }
    backtrack(0,nums.length-1)

    let i=0
    while (i<=nums.length-1)
    {
        if(nums[i+1]!==nums[i]){return nums[i]}
        else {i+=3}
    }
};
//考虑数字的二进制形式，对于出现三次的数字，各 二进制位 出现的次数都是 3 的倍数。
// 因此，统计所有数字的各二进制位中 1 的出现次数，并对 3 求余，结果则为只出现一次的数字。
console.log(singleNumber([3, 4, 3, 3]));
console.log(singleNumber([9, 1, 7, 9, 7, 9, 7]));
console.log(singleNumber([9, 9, 5, 5, 5, 6, 9]));
