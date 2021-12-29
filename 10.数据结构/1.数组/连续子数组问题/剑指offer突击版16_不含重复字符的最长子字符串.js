var lengthOfLongestSubstring = function(s) {
    let res=0
    let left=0
    //let memo={}
    const memo=Array(128).fill(0)//ascII码共128个，用数组比hash表记录性能好很多
    let cur
    for(let right=0; right<s.length; right++)
    {
        cur=s[right].charCodeAt(0)
        /*if(memo[cur]){memo[cur]+=1}
        else {memo[cur]=1}*/
        memo[cur]+=1
        while(memo[cur]>1)
        {
            memo[s[left].charCodeAt(0)]-=1
            left+=1
        }
        res=Math.max(res,right-left+1)
    }
    return res
};
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring(""));
console.log(lengthOfLongestSubstring("   "));