/*var numSubarrayProductLessThanK = function(nums, k) {
    let res=0
    let left=0
    let right=0
    let cur=1
    while (left<=right && left<nums.length)
    {
        cur*=nums[right]
        res+=((cur<k)?1:0)
        if(cur<k && right<nums.length-1) {right+=1}
        else
        {
            left+=1
            right=left
            cur=1
        }
    }
    return res
};*/
//如果能找到以nums[i]开头的、积小于k的最长连续子数组为nums[i,j]，则:
//(1)以nums[i]开头的、积<k的连续子数组共有(j-i+1)个：nums[i,i]、nums[i,i+1]、nums[i,i+2]...nums[i,j]
//(2)若nums[i,j]窗口下的积<k，则nums[i+1,j]窗口下的积也<k -> 以nums[i+1]开头的最大窗口应该通过扩大nums[i+1,j]的窗口右沿来寻找
//(1)->如果以nums[i]开头的最大窗口长度为I，则res=sum(I),0<=i<=nums.length-1
//(2)->nums[i+1]的最大窗口可以通过nums[i]最大窗口得到：右移nums[i]窗口左沿一位后、右移窗口右沿进行搜索
var numSubarrayProductLessThanK = function(nums, k){
    let left=0
    let right=0
    let cur=1
    let res=0
    while (left<nums.length)
    {
        cur*=nums[right]//当前窗口积
        if(cur<k && right<nums.length-1)right+=1//不确定当前是否为最大窗口，右移右沿进行试探
        else
        {
            res+=((cur<k)?(right-left+1):(right-left+1-1))
            //(当前窗口右沿为nums尾元素 -> 最大窗口：nums[left,right])||(当前窗口积大于等于k -> 最大窗口：nums[left,right-1])
            //注意第二种情况要把right-1才是最大窗口
            if(left<right)
            {
                cur/=(nums[left]*nums[right])//左移窗口左沿、右沿不变 -> 下一次循环会重复乘nums[right]，这里要预先除法去
                left+=1
            }
            else//left=right && 窗口积>=k -> 此时应将整个窗口右移一位进行重置
            {
                left+=1
                right+=1
                cur=1
            }
        }
    }
    return res
}
console.log(numSubarrayProductLessThanK(nums = [10, 5, 2, 6], k = 100));
console.log(numSubarrayProductLessThanK([1, 2, 3], 0));