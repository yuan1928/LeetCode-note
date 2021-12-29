var trap = function(height) {
    if(height.length<3){return 0}

    var getSlices=function (height){
        //两种slice：头元素为当前slice第二大值、尾元素为最大值；
        //当未完成的slice未找到比第一个元素更大的值作为结尾、就已经遍历完height时，要对结尾元素进行修改
        var left=0
        var right=1
        var slices=[]
        var current=[height[left]]
        while(left<right && right<=height.length-1)
        {
            if(height[left]>height[right])//未找到尾元素
            {
                if(right===height.length-1)//height已经遍历完
                {
                    current.push(height[right])//height尾元素是否能成为当前slice的尾元素是未知的
                    var min=Math.min(...current)
                    if(current[current.length-1]===min)
                    {var secondMax=Math.max(...current.slice(1))}
                    else
                    {var secondMax=Math.max(...current.slice(current.indexOf(min)))}
                    for(var i of current.keys())
                    {
                        if(current[current.length-1-i]===secondMax)
                        {
                            current=current.slice(0,current.length-i)//将secondMax作为结尾
                            if(Math.min(...current)<current[0] && Math.min(...current)<current[current.length-1])
                            {slices.push(current)}
                            left=left+current.length-1
                            right=left+1
                            current=[height[left]]
                            break
                        }
                    }
                }
                else//还没找到尾元素，也没遍历完height
                {
                    current.push(height[right])
                    right+=1
                }
            }
            else//在遍历完height前找到当前slice的尾元素
            {
                current.push(height[right])
                if(Math.min(...current)<current[0] && Math.min(...current)<current[current.length-1])
                {slices.push(current)}
                left=right
                right+=1
                current=[height[left]]
            }
        }
        return slices
    }
    var slices=getSlices(height)
    //return slices
    if(slices.length===0){return 0}

    var backtrack=function (slice,capacity) {
        //*终止条件：slice中没有"凹陷"：不存在小于前后元素的元素
        //*最小值：满足前后元素皆大于其的全局最小值
        //找到最小值第一次出现的索引start
        //找到最小值的右边界索引end
        //最小值的个数即雨水面积的宽：w=end-start+1
        //雨水面积的高：h=min(slice[start-1],slice[end+1])
        //此次雨水面积：s=w*h
        //将当前所关注接雨水的凹陷填平：将所有最小值都赋值为h，更新slice
        //递归
        var left=1
        var right=1
        var s=slice.slice()
        var isEnd=true
        while (left<=right && right<=s.length-1)
        {
            if(s[right-1]!==s[right])
            {
                s[left]=s[right]
                left+=1
                right+=1
            }
            else {right+=1}
        }
        s=s.slice(0,left)//对于[9,6,6,8]这样的情况，只有处理成[9,6,8]才能用条件1判断有无凹陷
        for(var i of s.keys())
        {
            if(i - 1 >= 0 && i + 1 <= left - 1 && s[i - 1] > s[i] && s[i + 1] > s[i])//条件1
            {
                isEnd=false
                break
            }
        }
        if(isEnd)
        {
            capacitys.push(capacity)
            return
        }

        var min=Math.max(...s)
        for(var i of s.keys())
        {
            if(i-1>=0 && i+1<=s.length-1 && s[i-1]>s[i] && s[i+1]>s[i] && s[i]<min)
            {min=s[i]}
        }
        for(var i of s.keys())
        {
            if(i-1>=0 && i+1<=s.length-1 && s[i-1]>s[i] && s[i+1]>s[i] && s[i]<min)
            {min=s[i]}
        }
        var start=slice.indexOf(min)
        var end=start
        while (end<=slice.length-1 && slice[start]===slice[end+1]){end+=1}
        var w=end-start+1
        var h=Math.min(slice[start-1],slice[end+1])
        var replace=Array(w).fill(h)
        capacity+=w*(h-min)
        slice.splice(start,w,...replace)
        backtrack(slice,capacity)
    }

    var capacitys=[]
    for(var item of slices)
    {backtrack(item,0)}

    //return capacitys
    return capacitys.reduce((a,b)=>(a+b))
};
console.log(trap([9,8,9,5,8,8,8,0,4]));