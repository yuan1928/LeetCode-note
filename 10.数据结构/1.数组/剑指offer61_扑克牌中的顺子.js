var isStraight = function(nums) {
    const dict={A:1,J:11,Q:12,K:13}
    let sort=[]
    let zeros=0
    for(let num of nums)
    {
        if(num===0){zeros+=1;continue}
        if(dict[num])num=dict[num]

        if(sort.indexOf(num)!==-1)return false

        if(num<=sort[0]){sort.unshift(num)}
        else if(num>=sort[sort.length-1] || !sort.length){sort.push(num)}
        else
        {
            for(let i of sort.keys())
            {
                if(sort[i]<=num && sort[i+1]>=num)
                {
                    sort.splice(i+1,0,num)
                    break
                }
            }
        }
    }
    return (sort[sort.length-1]-sort[0])<5

    /*let res=true
    for(let i=0; i<sort.length; i++)
    {
        if(i+1<=sort.length-1 && sort[i+1]!==sort[i]+1)
        {
            if(sort[i+1]===sort[i]){res=false;break}
            else if(zeros>=(sort[i+1]-sort[i]-1)){zeros-=(sort[i+1]-sort[i]-1)}
            else {res=false;break}
        }
    }
    return res*/
};
//console.log(isStraight([1, 2, 3, 4, 5]));
//console.log(isStraight([0, 0, 1, 2, 5]));
//console.log(isStraight([0, 0, 0, 0, 0]));
console.log(isStraight([0, 0, 2, 2, 5]));