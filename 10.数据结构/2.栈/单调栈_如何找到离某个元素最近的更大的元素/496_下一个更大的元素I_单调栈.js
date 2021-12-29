var nextGreaterElement = function(nums1, nums2) {
    let memo={}//memo[num in nums2]=the first bigger number for num in nums2
    let stack=[]//单调栈，栈顶到栈底：元素值递减、元素索引递增，相当于当前元素的优先队列
    for(let i=nums2.length-1; i>=0; i--)
    {
        while (stack.length>0 && stack[stack.length-1]<=nums2[i]) {stack.pop()}
        memo[nums2[i]]=(stack.length>0)?stack[stack.length-1]:-1
        stack.push(nums2[i])
    }

    let res=[]
    for(let num of nums1)
    {res.push(memo[num])}
    return res
};
console.log(nextGreaterElement(nums1 = [4, 1, 2], nums2 = [1, 3, 4, 2]));
console.log(nextGreaterElement(nums1 = [2, 4], nums2 = [1, 2, 3, 4]));
console.log(nextGreaterElement([1, 3, 5, 2, 4], [6, 5, 4, 3, 2, 1, 7]));