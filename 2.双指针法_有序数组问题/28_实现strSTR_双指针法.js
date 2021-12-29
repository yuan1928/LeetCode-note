var strStr = function(haystack, needle) {
    if(needle==="")return 0

    var left=0
    var right=left+needle.length
    while (right<=haystack.length)
    {
        if(haystack.slice(left,right)===needle){return left}
        else
        {
            left+=1
            right=left+needle.length
        }
    }
    return -1
};
console.log(strStr("a", "a"));