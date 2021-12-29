var longestPalindrome = function(s) {
    var maxLen1=1
    var maxLen2=1
    //寻找奇数长度回文串
    for(var i of s.split("").keys())
    {
        var left=i-1
        var right=i+1
        var current=s[i]
        while((left>=0)&&(right<=s.length-1))
        {
            if(s[left]===s[right])
            {
                current=current.padStart(current.length+1,s[left])
                current=current.padEnd(current.length+1,s[right])
                left-=1
                right+=1
            }
            else {break}//注意：一定添加break，否则死循环
        }
        if(current.length>=maxLen1)
        {
            maxLen1=current.length
            var palindrome1=current
        }
    }
    //寻找偶数长度回文串
    for(var i of s.split("").keys())
    {
        var left=i
        var right=i+1
        var current=""//注意：这里须用空字符串赋值，否则会造成第一次pad重复添加s[i]
        while((left>=0)&&(right<=s.length-1))
        {
            if(s[left]===s[right])
            {
                current=current.padStart(current.length+1,s[left])
                current=current.padEnd(current.length+1,s[right])
                console.log(current);
                left--
                right++
            }
            else {break}
        }
        //console.log(current);
        if(current.length==0){current=s[i]}//由于current用空串初始化，如果s是“abcd”这样的字符串，会导致current一直没被pad成为空值的漏洞
        if(current.length>=maxLen2)//注意这里只是如果是>,那么会使palindrome无法被current赋值，从而使上一句无效，palindrome1同理
        {
            maxLen2=current.length
            palindrome2=current
        }
    }
    //求最大长度
    if(maxLen1>=maxLen2)
    {
        return palindrome1
    }
    else {return palindrome2}

};
console.log(longestPalindrome("a"));