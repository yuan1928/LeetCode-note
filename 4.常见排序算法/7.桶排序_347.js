/*通过遍历k次哈希表，找出前K个频率最大的数
每一次遍历找出频率最大的数后，在哈希表中将其频率改为-1，这样下次遍历时该数会被"遮蔽"
var topKFrequent = function(nums, k) {
    let frequency={}
    for(let i of nums.keys())
    {
        if(frequency[String(nums[i])])
        {frequency[String(nums[i])]+=1}
        else {frequency[String(nums[i])]=1}
    }

    let topK=[]
    while (k>0)
    {
        let maxFre =0
        let maxNum
        for(let num in frequency)
        {
            if(frequency[num]>maxFre)
            {
                maxFre=frequency[num]
                maxNum=num
            }
        }
        topK.push(Number(maxNum))
        frequency[maxNum]=-1
        k-=1
    }

    return topK
};*/
var topKFrequent = function(nums, k) {
    let frequency={}
    for(let i of nums.keys())
    {
        if(frequency[String(nums[i])])
        {frequency[String(nums[i])]+=1}
        else {frequency[String(nums[i])]=1}
    }

    let maxFre=0
    for(let num in frequency)
    {maxFre=Math.max(maxFre,frequency[num])}

    let buckets=Array(maxFre+1)//buckets[某频率]=[同频率的所有数]->数组索引的天然有序性使得在对频率排序的同时保持了数和频率的对应关系
    for(let i of buckets.keys())
    {buckets[i]=[]}
    for(let num in frequency)
    {buckets[frequency[num]].push(Number(num))}

    let topK=[]
    let bucket=buckets.length-1
    while (bucket>=0 && topK.length<k)
    {
        if(buckets[bucket])
        {topK=topK.concat(buckets[bucket])}
        bucket-=1
    }

    return topK
};
console.log(topKFrequent([1,1,2,2], 2));