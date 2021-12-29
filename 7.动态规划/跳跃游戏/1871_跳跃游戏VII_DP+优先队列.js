var canReach=function(s, minJump, maxJump){
    let dp=[true]
    let latestTrue=[0]

    let position=1
    while (position<=s.length-1)
    {
        if(s[position]==="0" && position-minJump>=0)
        {
            if(dp[position-minJump]===true)
            {
                dp[position]=true
                latestTrue.push(position)
            }
            else
            {
                while (latestTrue.length!==0 && latestTrue[0]<position-maxJump){latestTrue.shift()}
                if(latestTrue.length!==0)
                {dp[position]=(latestTrue[0]<=position-minJump)}
                if(dp[position]){latestTrue.push(position)}
            }
        }
        else {dp[position]=false}
        position+=1
    }
    return dp[dp.length-1]
}
let s = "0000000000"
let minJump = 2
let maxJump = 5
console.log(canReach(s, minJump, maxJump));