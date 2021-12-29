//每个单词一定先与其余单词比较一下、判断是否包含相同字符，这一步无法避免 -> 通过加快判断的过程优化暴力解法
//每一位单词的字符出现情况用26位二进制字符表示(最高6位置0)：第i位为1表示asc(i+97)存在于该单词，否则不存在
//判断word[i]与word[j]是否包含相同字符：code[i]^code[j]===code[i]+code[j]
var maxProduct = function(words) {
    let code=[]
    let cur
    for(let word of words)
    {
        cur=0
        for(let char of word)
        {cur|=(1<<(char.charCodeAt(0)-97))}
        code.push(cur)
    }

    let res=0
    for(let i of code.keys())
    {
        for(let j=i+1; j<code.length; j++)
        {
            cur=(code[i]^code[j])
            //if(cur>code[i] && cur>code[j])
            if(code[i]+code[j]===cur)
            {res=Math.max(res,words[i].length*words[j].length)}
        }
    }
    return res
};
console.log(maxProduct(["abcw", "baz", "foo", "bar", "fxyz", "abcdef"]));
console.log(maxProduct(["a", "ab", "abc", "d", "cd", "bcd", "abcd"]));
console.log(maxProduct(["a", "aa", "aaa", "aaaa"]));