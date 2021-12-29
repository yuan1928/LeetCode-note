/*var missingNumber = function(nums) {
    let res
    const DC=function (start,end){
        let mid=Math.floor((start+end)/2)
        if(nums[mid+1]===nums[mid]+2) {res=nums[mid]+1}
        else
        {
            if(mid-1>=start) {DC(start,mid-1)}
            if(end>=mid+1) {DC(mid+1,end)}
        }
    }
    DC(0,nums.length-1)
    return (res!==undefined)?res:((nums[0]===0)?nums[nums.length-1]+1:0)
};*/
var missingNumber = function(nums){
    let n=nums.length
    if(nums[0]===0 && nums[n-1]===n-1)return n
    if(nums[0]===1 && nums[n-1]===n)return 0

    let left=0
    let right=n-1
    while (left<=right)
    {
        let mid=Math.floor((left+right)/2)
        if(nums[left]===left && nums[right]===right+1 && right===left+1){return left+1}
        else if(nums[mid]===mid){left=mid}
        else if(nums[mid]===mid+1){right=mid}
    }
}
console.log(missingNumber([0, 2]));
console.log(missingNumber([0, 1, 2, 3, 4, 5, 6, 7, 9]));