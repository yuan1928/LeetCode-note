var lengthOfLongestSubstringDP = function(s) {
    if(s.length===0)return 0

    let memo={}
    memo[s[0]]=0//memo[char]=char出现的最新位置索引
    let dp=[1]//dp[i]=以s[i]作为子串结尾的、不含重复字符子串的最大长度

    for(let i=1; i<=s.length-1; i++)
    {
        if(memo[s[i]]===undefined) {dp[i]=dp[i-1]+1}//当前字符在当前不重复子串中未出现过
        else
        {
            let newMemo={}
            dp[i]=i-memo[s[i]]//当前字符s[i]重复、与s[i]重复字符的索引为j=memo[s[i]]->最长不重复子串更新为s.slice(j+1,i)
            for(let c in memo)
            {
                if(memo[c]>memo[s[i]])//新不重复子串从j开始->memo中早于j的记录都要清空
                {newMemo[c]=memo[c]}
            }
            memo=newMemo
        }
        memo[s[i]]=i//更新s[i]最新出现位置
    }

    return Math.max(...dp)
};
var lengthOfLongestSubstringSlideWindow = function(s){
    if(s.length<=1)return s.length

    let left=0
    let right=1
    let res=1
    let memo=[]//保存不重复子串长度
    s=s.split("")
    while (left<=right  && right<=s.length-1)
    {
        if(s.slice(left,right).indexOf(s[right])===-1)//窗口中未出现过s[right]->s[right]成为新的窗口右沿
        {
            res+=1
            right+=1
        }
        else//窗口中出现过s[right]->被重复字符的下一个字符成为窗口左沿、s[right]成为窗口右沿
        {
            left=s.slice(left,right).indexOf(s[right])+1+left//左沿是在s中的索引->加上偏移量left
            memo.push(res)
            res=right-left+1
            right+=1
        }
    }
    return Math.max(...memo,res,right-left)
}
/*console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("dvdf"));
console.log(lengthOfLongestSubstring("abba"));
console.log(lengthOfLongestSubstring("aabaab!bb"));*/