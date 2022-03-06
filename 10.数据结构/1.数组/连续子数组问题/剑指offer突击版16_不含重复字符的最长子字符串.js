var lengthOfLongestSubstring = function(s) {
    /*let res=0
    let left=0
    const memo=Array(128).fill(0)//ascII码共128个，用数组比hash表记录性能好很多
    let cur
    for(let right=0; right<s.length; right++)
    {
        cur=s[right].charCodeAt(0)
        memo[cur]+=1
        while(memo[cur]>1)
        {
            memo[s[left].charCodeAt(0)]-=1
            left+=1
        }
        res=Math.max(res,right-left+1)
    }
    return res*/

    let res=0
    const memo={}
    let left=0
    for(let right=0; right<=s.length-1; right++)
    {
        if(memo[s[right]]!==undefined){memo[s[right]]+=1}
        else {memo[s[right]]=1}

        while (memo[s[right]]>=2)
        {
            memo[s[left]]-=1
            left+=1
        }
        res=Math.max(res,right-left+1)
    }
    return res
};
//3 1 3 0 1
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring(""));
console.log(lengthOfLongestSubstring("   "));