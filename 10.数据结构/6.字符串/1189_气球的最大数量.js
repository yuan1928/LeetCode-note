var maxNumberOfBalloons = function(text) {
    let memo={"b":0,"a":0,"l":0,"o":0,"n":0}
    for(let c of text)
    {
        if(memo[c]!==undefined)
        {memo[c]+=1}
    }
    memo["l"]=Math.floor(memo["l"]/2)
    memo["o"]=Math.floor(memo["o"]/2)
    let res=Infinity
    for(let c in memo)
    {res=Math.min(res,memo[c])}
    return res
};
console.log(maxNumberOfBalloons("leetcode"));
