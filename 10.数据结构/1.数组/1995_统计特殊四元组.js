var countQuadruplets = function(nums) {
    const diffs={}
    let res=0
    //寻找add1+add2=sum-add3的个数
    for(let add2Idx=nums.length-3; add2Idx>=1; add2Idx--)
    {
        for(let sumIdx=nums.length-1; sumIdx>add2Idx+1; sumIdx--)
        {
            //add2是逆序遍历的->diffs相对上一轮的改变只是由于add2Idx-1而新增了若干个关于新增add3Idx=add2Idx+1的diff记录
            if(diffs[nums[sumIdx]-nums[add2Idx+1]]===undefined) {diffs[nums[sumIdx]-nums[add2Idx+1]]=1}
            else {diffs[nums[sumIdx]-nums[add2Idx+1]]+=1}//注意: 这里要记录每个diff出现次数->sum可能对应多个不同索引add3和sum产生的等值diff
        }
        for(let add1Idx=0; add1Idx<add2Idx; add1Idx++)
        {
            if(diffs[nums[add1Idx]+nums[add2Idx]]!==undefined)
            {res+=diffs[nums[add1Idx]+nums[add2Idx]]}
        }
    }
    return res
};

//var countQuadruplets = function(nums) {
//     const memo={}
//     for(let i of nums.keys())
//     {
//         if(memo[nums[i]]===undefined) {memo[nums[i]]=[i]}
//         else {memo[nums[i]].push(i)}
//     }
//
//     let res=0
//     const DFS=function (add1Idx,sumIdx){
//         if(sumIdx-add1Idx+1<4)return
//
//         for(let add2Idx=add1Idx+1; add2Idx<sumIdx; add2Idx++)
//         {
//             let add3=nums[sumIdx]-nums[add1Idx]-nums[add2Idx]
//             if(memo[add3]!==undefined)
//             {
//                 for(let add3Idx of memo[add3])
//                 {
//                     if(add3Idx>add2Idx && add3Idx<sumIdx) {res+=1}
//                 }
//             }
//         }
//     }
//
//     for(let left=0; left<=nums.length-4; left++)
//     {
//         for(let right=left+3; right<nums.length; right++)
//         {DFS(left,right)}
//     }
//     return res
// };
console.log(countQuadruplets([1, 2, 3, 6]));
console.log(countQuadruplets([3, 3, 6, 4, 5]));
console.log(countQuadruplets([1, 1, 1, 3, 5]));
console.log(countQuadruplets([36, 13, 38, 87, 2, 90, 53, 62, 44, 10, 100]));
console.log(countQuadruplets([9, 64, 81, 38, 1, 31, 24, 6, 48, 96, 63, 70, 83, 6, 84]));
console.log(countQuadruplets([96, 28, 83, 29, 25, 83, 82, 43, 17, 43, 89, 92, 36, 18, 62, 58, 100, 63, 5, 70, 84, 23]));