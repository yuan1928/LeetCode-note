var getMaximumGenerated = function(n) {
    let backtrack=function (index){
        if(index===0){return 0}
        if(index===1){return 1}

        if(index%2===0) {return backtrack(index/2)}
        else {return backtrack((index-1)/2)+backtrack((index+1)/2)}
    }

    if (n<=1){return n}
    let max=1
    let i=Math.floor(n/4-1/2)
    while (2*i+1<=n)
    {
        max=Math.max(max,backtrack(2*i+1))
        i+=1
    }
    return max
};
console.log(getMaximumGenerated(14));

/*nums[0] = 0
nums[1] = 1/////////////////////////////////////////////////////////////////////
nums[(1 * 2) = 2] = nums[1] = 1
nums[(1 * 2) + 1 = 3] = nums[1] + nums[2] = 1 + 1 = 2///////////////////////////
nums[(2 * 2) = 4] = nums[2] = 1
nums[(2 * 2) + 1 = 5] = nums[2] + nums[3] = 1 + 2 = 3//////////////////////////////
nums[(3 * 2) = 6] = nums[3] = 2
nums[(3 * 2) + 1 = 7] = nums[3] + nums[4] = 2 + 1 = 3///////////////////////////////////
nums[8]=nums[4]=1
nums[9]=nums[4]+nums[5]=4//////////////////////////////////////////////////////
nums[10]=nums[5]=3
nums[11]=nums[5]+nums[6]=5//////////////////////////////////////////////////
nums[12]=2
nums[13]=nums[6]+nums[7]=5////////////////////////////////////////////////////////
nums[14]=3
nums[15]=nums[7]+nums[8]=4//////////////////////////////////////////////////////
nums[16]=1
nums[17]=5
nums[19]=7
nums[21]=8
nums[23]=7
nums[25]=7
nums[27]=8
nums[29]=7
nums[31]=5
1 2 3 3 4 5 5 4 5 7 8 7 7
*/