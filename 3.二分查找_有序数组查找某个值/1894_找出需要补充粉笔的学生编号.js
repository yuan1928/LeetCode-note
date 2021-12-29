/*var chalkReplacer = function(chalk, k) {
    let index=0
    while (k>=0)
    {
        k-=chalk[index%chalk.length]
        index+=1
    }
    return (index-1)%chalk.length
};
;*/

var chalkReplacer = function(chalk, k){
    if(chalk[0]>k) return 0

    for(let i of chalk.keys())
    {
        if(i===0)continue
        chalk[i]+=chalk[i-1]//将chalk原地改为前缀和数组
        if(chalk[i]>k) return i
    }
    let rest=k%chalk[chalk.length-1]//chalk[chalk.length-1]=一轮所需粉笔数，rest表示最后一轮开始时k剩下的粉笔数

    //chalk[i]>rest时粉笔不够，找出符合条件最小的i即为答案；用二分查找搜索目标索引
    let left=0
    let right=chalk.length-1
    while (left<right)//如果循环条件是left<=right，则在mid=left=right(找到目标)时会在else if(chalk[mid]>rest)陷入死循环
    {
        let mid=Math.floor((left+right)/2)
        if(chalk[mid]===rest) return mid+1
        else if(chalk[mid]>rest) {right=mid}//希望找出符合条件的最小的i
        else {left=mid+1}
    }
    return left
}
console.log(chalkReplacer([3,4,1,2], 25))