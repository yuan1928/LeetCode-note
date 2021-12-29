var validPalindrome = function(s) {
    const backtrack=function (start,end){//检测s[start,end]在不删字符的条件下是否回文
        while (start<end)
        {
            if(s[start]!==s[end])return false
            start+=1
            end-=1
        }
        return true
    }
    let left=0
    let right=s.length-1
    let del=false
    while (left<right)
    {
        if(s[left]===s[right])
        {
            left+=1
            right-=1
        }
        else
        {
            if(left===right-1 && s[left]===s[right])return true
            else if(s[left+1]===s[right] && s[left]!==s[right-1] && !del)//删掉s[left]
            {
                left+=2
                right-=1
                del=true
            }
            else if(s[left+1]!==s[right] && s[left]===s[right-1] && !del)//删掉s[right]
            {
                left+=1
                right-=2
                del=true
            }
            else if(s[left+1]===s[right] && s[left]===s[right-1] && !del)//分别尝试删掉s[left]和s[right]
            {return backtrack(left+1,right-2)||backtrack(left+2,right-1)}
            else {return false}
        }
    }
    return true
};
console.log(validPalindrome("aba"));
console.log(validPalindrome("abc"));
console.log(validPalindrome("abca"));
console.log(validPalindrome("agbahaba"));
console.log(validPalindrome("apghmga"));