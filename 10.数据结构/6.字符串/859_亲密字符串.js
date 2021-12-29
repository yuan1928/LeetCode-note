//满足题意的只有两种情况：
//(1)s和goal有且只有两个字母不同且二者可交换：(s[i]!==goal[i],s[j]!==goal[j]) && (s[i]===goal[j],s[j]===goal[i])
//(2)s和goal相同，且s(即goal)中含有重复出现的字母：如"aa"、"abab"，注意"ab"不满足条件
var buddyStrings = function(s, goal) {
    if(s.length!==goal.length)return false

    let diff=0
    let idx=[]
    let memo=Array(26).fill(0)
    let isSelfSame=false
    for(let i=0; i<s.length; i++)
    {
        if(s[i]!==goal[i])
        {
            diff+=1
            idx.push(i)
        }
        if(diff>2)return false
        memo[s[i].charCodeAt(0)-97]+=1
        if(memo[s[i].charCodeAt(0)-97]>=2){isSelfSame=true}//检测s是否含有重复出现的字母
    }
    return ((diff===0 && isSelfSame) || (diff===2 && (s[idx[0]]===goal[idx[1]] && s[idx[1]]===goal[idx[0]])))
};
console.log(buddyStrings("ab", "ba"));
console.log(buddyStrings("ab", "ab"));
console.log(buddyStrings(s = "aaaaaaabc", goal = "aaaaaaacb"));
console.log(buddyStrings("aa", "aa"));
console.log(buddyStrings("abab", "abab"));