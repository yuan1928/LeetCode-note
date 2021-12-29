var countSubstrings = function(s) {
    let res=0
    let left
    let right
    for(let i=0; i<s.length; i++)
    {
        left=i
        right=i
        while (s[left]===s[right] && left>=0 && right<s.length)
        {
            res+=1
            left-=1
            right+=1
        }

        left=i
        right=i+1
        while (s[left]===s[right] && left>=0 && right<s.length)
        {
            res+=1
            left-=1
            right+=1
        }
    }
    return res
};
console.log(countSubstrings("abc"));
console.log(countSubstrings("aaa"));