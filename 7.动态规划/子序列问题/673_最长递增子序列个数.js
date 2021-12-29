var findNumberOfLIS = function(nums){
    let dpLen=Array(nums.length).fill(1)
    dpLen[0]=1//dpLen[i]表示以nums[i]结尾的子序列的最大长度
    let dpNum=Array(nums.length).fill(1)
    dpNum[0]=1//dpNum[i]表示以nums[i]结尾的最长子序列个数

    //更新dp
    for(let i of nums.keys())
    {
        if(i===0)continue
        for(let j of nums.slice(0,i).keys())
        {
            if(nums[i]>nums[j] && dpLen[j]+1>dpLen[i])
            {
                dpLen[i]=dpLen[j]+1
                dpNum[i]=dpNum[j]
            }
            else if(nums[i]>nums[j] && dpLen[j]+1===dpLen[i]) {dpNum[i]+=dpNum[j]}
        }
    }

    //res=sum(dpNum[i]),dpLen[i]=maxLen
    let maxLen=-1
    let res=0
    for(let i of dpLen.keys())
    {
        if(dpLen[i]>maxLen)
        {
            maxLen=dpLen[i]
            res=dpNum[i]
        }
        else if(dpLen[i]===maxLen) {res+=dpNum[i]}
    }

    return res
}
//console.log(findNumberOfLIS([1, 3, 5, 4, 7]));
console.log(findNumberOfLIS([2, 2, 2, 2, 2]));

/*
var findNumberOfLIS = function(nums) {
    let idx=[]
    //idx[i]表示所有长度为i的子序列的尾元素数组->如idx[3]=[5,4]表示长度为3的子序列尾元素可能是5或4;idx[4]=7表示长度为7的子序列尾元素为7
    idx[0]=[-Infinity]
    let len=[]
    //len[i]是一个数组，如len[3]=[1,1]表示长度为3、分别以5和4结尾的子序列各有1个，因此长度为3的子序列共有2个；len[4]=[2]表示长度为4、以7结尾的子序列有2个
    len[0]=[1]

    for(let num of nums)
    {
        let pos=idx.length-1
        while (num<=Math.min(...idx[pos]) && pos>=0) {pos-=1}//找出num可以成为其新尾元素的最长子序列，其长度即其索引pos
        if(num>Math.min(...idx[pos]))//排除while循环因为索引越界而停止的情况
        {
            if(idx[pos+1])
            {
                idx[pos+1].push(num)
                len[pos+1].push(0)
            }
            else
            {
                idx[pos+1]=[num]
                len[pos+1]=[0]
            }
        }
        for(let i of idx[pos].keys())//遍历目标子序列的每个可能的结尾元素
        {
            if(num>idx[pos][i])
            {len[pos+1][len[pos+1].length-1]+=len[pos][i]}//num成为新的尾元素，将长度为pos+1、以num结尾的子序列个数加到len[pos+1][末尾]上
        }
        console.log(idx,len);
        console.log("----------------");
    }

    return len[len.length-1].reduce((a,b)=>(a+b))
};
console.log(findNumberOfLIS([1, 3, 5, 4, 7,6]));
//console.log(findNumberOfLIS([2, 2, 2, 2, 2]));
*/