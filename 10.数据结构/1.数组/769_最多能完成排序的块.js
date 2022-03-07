var maxChunksToSorted = function(arr) {
    /*if(arr.length===1)return 1

    let res=1
    let pos=arr.length-1
    let min=arr[pos]
    while (pos>0)
    {
        min=Math.min(min,arr[pos])
        if(min>Math.max(...arr.slice(0,pos))){res+=1}//当前块的最小值大于其左块的最大值->产生一个能完成排序的独立子块
        pos-=1
    }
    return res*/

    const max=[arr[0]]
    const min=[arr[arr.length-1]]
    let j
    for(let i=1; i<=arr.length-1; i++)
    {
        max.push(Math.max(max[i-1],arr[i]))
        j=arr.length-1-i
        min.unshift(Math.min(min[min.length-1-(i-1)],arr[j]))
    }
    //console.log(min,max);

    let res=0
    for(let i=0; i<arr.length-1; i++)
    {
        if(max[i]<=min[i+1])
        {res+=1}
    }
    return res+1
};
//console.log(maxChunksToSorted([0,1]));
console.log(maxChunksToSorted([1, 0, 2, 3, 4]));
console.log(maxChunksToSorted([4, 3, 2, 1, 0]));