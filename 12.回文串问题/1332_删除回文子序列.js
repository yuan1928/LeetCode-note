//如果s本身是回文串->删一次即可
//如果s非回文串->先删a再删b,删两次即可
var removePalindromeSub = function(s) {
    if(s.length===1)return 1

    let left=0
    let right=s.length-1
    while(left<=right)
    {
        if(s[left]!==s[right])return 2
        left+=1
        right-=1
    }
    return 1
};