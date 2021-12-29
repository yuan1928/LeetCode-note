//数组按升序排序
//遍历每个元素
//对当前元素后的数组用双指针进行搜索和为diff=target-当前元素的两个元素
//和<diff，左指针右移
//和=diff，返回
//和>diff，右指针左移
var threeSumClosest = function(nums, target) {
    var compare=function (a,b){
        if(a<b){return -1}
        else if(a===b){return 0}
        else{return 1}
    }
    nums.sort(compare)

    var last=nums[0]+nums[1]+nums[2]
    //console.log(last);
    for(var i of nums.keys())
    {
        if(((i-1)>=0)&&(nums[i-1]===nums[i])){continue}

        var numsSub=nums.slice(i+1)
        var left=0
        var right=numsSub.length-1
        console.log(last);
        while (left<right)
        {
            var now=nums[i]+numsSub[left]+numsSub[right]
            var diff=Math.abs(now-target)
            last=(diff<=Math.abs(last-target))?now:last
            console.log(nums[i],numsSub,left,right,last)
            if(now<target) {left+=1}
            else if(now===target){return target}
            else if(now>target) {right-=1}
            console.log("->",left,right)
        }
    }
    console.log(last);
    return last
};
console.log(threeSumClosest([-100,-98,-2,-1], -101));