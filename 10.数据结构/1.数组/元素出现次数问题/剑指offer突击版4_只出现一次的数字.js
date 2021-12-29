//如果对所有元素二进制序列的第i位求和，则所有出现3次的元素该位和应为3的倍数 -> 只出现1次的元素该位二进制值=该位和%3
var singleNumber = function(nums) {
    let res=0
    let sum
    for(let i=0; i<32; i++)
    {
        sum=0//本位二进制和
        for(let num of nums)
        {sum+=((num>>i)&1)}
        if(sum%3)
        {res|=(1<<i)}
    }
    return res
};
console.log(singleNumber([2, 2, 3, 2]));
console.log(singleNumber([0, 1, 0, 1, 0, 1, 100]));