var findAnagrams = function(s, p) {
    const dict=Array(26).fill(0)
    for(let char of p)
    {dict[char.charCodeAt(0)-97]-=1}

    const res=[]
    let left=0
    let cur
    for(let right=0; right<s.length; right++)
    {
        cur=s[right].charCodeAt(0)-97
        dict[cur]+=1
        while(dict[cur]>0)
        {
            dict[s[left].charCodeAt(0)-97]-=1
            left+=1
        }
        if(right-left+1===p.length)
        {
            res.push(left)
            dict[s[left].charCodeAt(0)-97]-=1
            left+=1
        }
    }
    return res
};
console.log(findAnagrams(s = "cbaebabacd", p = "abc"));
console.log(findAnagrams(s = "abab", p = "ab"));