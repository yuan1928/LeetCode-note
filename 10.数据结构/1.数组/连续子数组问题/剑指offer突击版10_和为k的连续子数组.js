//本题数组是无序的，因此如果遍历每个元素作为窗口左沿，则最终的窗口右沿必须得是nums尾元素，否则可能找不全 -> 滑动窗口的本质即暴力搜索
//本题如果用前缀和解决，则可通过记忆化对纯暴力搜索进行优化：
//如果nums[i]处前缀和为prefix[i]，则当且仅当prefix[j]=prefix[i]-k(0<=j<i)存在时有：res+=(这样的j的个数)
//每计算出一个前缀和时用hash表保存，后面直接通过hash检索j的存在及个数
var subarraySum = function(nums, k){
    let memo={"0":1}//确保prefix(i)=k的情况不会被忽略
    let sum=0
    let res=0
    for(let num of nums)
    {
        sum+=num
        if(memo[sum-k]){res+=memo[sum-k]}
        if(memo[sum]){memo[sum]+=1}
        else {memo[sum]=1}
    }
    return res
}
console.log(subarraySum([1, 1, 1], 2));
console.log(subarraySum([1, 2, 3], 3));
console.log(subarraySum([-1, -1, 1], 0));
console.log(subarraySum([1, -1, 0], 0));