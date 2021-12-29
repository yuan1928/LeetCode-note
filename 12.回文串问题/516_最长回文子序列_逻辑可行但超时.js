var longestPalindromeSubseq = function(s) {
    let even=0
    let odd=0
    let BFS=function (left,right,len,type){
        if(left>=0 && right<=s.length-1)
        {
            if(s[left]===s[right]) {BFS(left-1,right+1,len+2)}
            else
            {
                BFS(left,right+1,len)
                BFS(left-1,right,len)
                BFS(left-1,right+1,len)
            }
        }
        else
        {
            if(type==="even") {even=Math.max(even,len)}
            else {odd=Math.max(odd,len)}
        }
    }

    for(let i of Array(s.length).keys())
    {
        let leftOdd=i-1
        let rightOdd=i+1
        let leftEven=i
        let rightEven=i+1
        BFS(leftOdd,rightOdd,1,"odd")
        BFS(leftEven,rightEven,0,"even")
    }

    return Math.max(odd,even)
};
//可行解法须用DP