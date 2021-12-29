//倒序遍历字符串 s ，记录单词左右索引边界 left , right；
// 每确定一个单词的边界，则将其添加至res ；
// 最终，返回res即可。
var reverseWords = function(s) {
    s=s.padStart(s.length+1," ")
    let right=s.length-1
    while (s[right]===" "){right-=1}
    let left=right

    let res=""
    while (left>=0)
    {
        if((s[left]!==" " && s[left-1]!==" ") || (s[left]===" " && s[left-1]===" ")){left-=1}
        else if(s[left]!==" " && s[left-1]===" ")
        {
            res+=s.slice(left,right+1)+" "
            left-=1
        }
        else
        {
            right=left-1
            left=right
        }
    }
    res=res.slice(0,res.length-1)
    return res
};
console.log(reverseWords("the sky is blue"));
console.log(reverseWords("  hello world!  "));
console.log(reverseWords("a good   example"));