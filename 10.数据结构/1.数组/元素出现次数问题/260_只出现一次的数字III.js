//除了两个目标数字外，其余数字皆出现偶数次 -> nums.reduce((a,b)=>(a^b)) = res1^res2 = or
//or&(-or)可以取出or二进制序列中最低位的1(如00001000说明最低位的1出现在左起第五位)，而or最低位的1说明res1和res2的二进制序列在该位值不同
//整个数组可基于此划分为两个子数组nums1和nums2: nums1的元素该位二进制值为1，nums2的元素该位为0 -> res1和res2必然分别处于nums1和nums2
//nums1中除res1外，其余元素皆出现偶数次，nums2同理 -> res1=nums1.reduce((a,b)=>(a^b))  res2=nums2.reduce((a,b)=>(a^b))
var singleNumber = function(nums){
    /*let or=0
    for(let num of nums)
    {or^=num}
    const firstOne=or&(-or)//最低位的1置1，其余位置0
    let res1=0
    let res2=0
    for(let num of nums)
    {
        let mask=num&firstOne
        if(mask){res1^=num}
        else {res2^=num}
    }
    return [res1,res2]*/

    const or=nums.reduce((a,b)=>(a^b))
    const mask=or&(-or)
    let res1=0
    let res2=0
    for(let num of nums)
    {
        if((num&mask)>0){res1^=num}
        else {res2^=num}
    }
    return [res1, res2]
}
//如果问题扩展为：数组中除三个数字分别只出现一次，其他元素皆各自出现偶数次，则需利用分治法：
//全体异或得到or=res1^res2^res3
// -> mask=or^(-or) ->根据num&mask的正负数组被划分为两类nums1=[res1,res2,...]和nums2=[res3,...]
// -> 注意nums1长度肯定为偶数，nums2长度肯定为奇数，由此可确定res3在哪个数组
// -> res3=nums2全体异或, 求res1、res2回归到“数组中两个只出现一次、其余元素出现偶数次”的问题
console.log(singleNumber([1, 2, 1, 3, 2, 5]));
console.log(singleNumber([0, 1]));
console.log(singleNumber([2, 1, 2, 3, 4, 1]));
singleNumber([1403617094,-490450406,-1756388866,-967931676,1878401007,1878401007,-74743538,1403617094,-1756388866,-74743538,-490450406,-1895772685])

