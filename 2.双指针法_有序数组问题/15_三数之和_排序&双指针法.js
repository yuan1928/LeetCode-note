var threeSum = function(nums) {
    var result=[]
    var compare=function (x,y){
        if(x<y){return -1}
        else if(x>y){return 1}
        else{return 0}
    }
    nums.sort(compare)
    //console.log(nums);
    //边界情况
    if(nums.length<3){return []}
    if(nums[0]>0){return []}
    for(var i of nums.keys())
    {
        if((i-1>=0)&&(nums[i-1]===nums[i])){continue}//若当前值等于前一个值，则搜索出的解是重复的，故跳过当前值

        var diff=0-nums[i]
        var numsSub=nums.slice().slice(i+1)//先复制，再切片
        if(numsSub.length>=2)
        {
            var left=0
            var right=numsSub.length-1
        }
        //console.log(nums[i],diff,left,right,numsSub);
        while (left<right)
        {
            if((left-1)>=0 && numsSub[left-1]===numsSub[left])
            {
                left+=1
                continue//不自加直接continue造成死循环
            }

            if(numsSub[left]+numsSub[right]<diff){left+=1}
            else if(numsSub[left]+numsSub[right]>diff){right-=1}
            else
            {
                result.push([nums[i],numsSub[left],numsSub[right]])
                //console.log("yes",left,right,[nums[i],numsSub[left],numsSub[right]]);
                left+=1
                right-=1

            }
            //console.log(diff,numsSub,left,right)
        }
    }
    return result
};
console.log(threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]));