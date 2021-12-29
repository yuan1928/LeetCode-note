var maxChunksToSorted = function(arr) {
    if(arr.length===1)return 1

    let res=1
    let pos=arr.length-1
    let min=arr[pos]
    while (pos>0)
    {
        min=Math.min(min,arr[pos])
        if(min>Math.max(...arr.slice(0,pos))){res+=1}//当前块的最小值大于其左块的最大值->产生一个能完成排序的独立子块
        pos-=1
    }
    return res
};
console.log(maxChunksToSorted([0,1]));