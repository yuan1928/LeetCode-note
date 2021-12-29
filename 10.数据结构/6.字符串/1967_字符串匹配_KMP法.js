/*var numOfStrings = function(patterns, word) {
    let memo={}
    for(let pattern of patterns)
    {
        if(memo[pattern])
        {
            memo[pattern]+=1
            continue
        }
        for(let i of Array(word.length).keys())
        {
            if(word.slice(i,i+pattern.length)===pattern)
            {
                memo[pattern]=1
                break
            }
        }
    }

    let res=0
    for(let pattern in memo)
    {res+=memo[pattern]}
    return res
};
var numOfStrings = function(patterns, word){
    let sum=0
    for(let pattern of patterns)
    {
        let reg=new RegExp(pattern)
        if(reg.test(word))
        {sum+=1}
    }
    return sum
}*/
var numOfStrings = function(patterns, word){
    let KMP=function (pattern,word){
        let next=Array(pattern.length).fill(0)
        for(let right=1,left=0;right<=pattern.length-1;right++)
        {
            while (left>0 && pattern[left]!==pattern[right])
            {left=next[left-1]}
            if(pattern[left]===pattern[right]) {left+=1}
            next[right]=left
        }
        for(let w=0,p=0;w<=word.length-1;w++)
        {
            while (p>0 && pattern[p]!==word[w])
            {p=next[p-1]}
            if(pattern[p]===word[w]) {p+=1}
            if(p===pattern.length) return true
        }
        return false
    }

    let memo={}
    let res=0
    for(let pattern of patterns)
    {
        if(memo[pattern]){res+=1}
        else if(KMP(pattern,word)) {memo[pattern]=true;res+=1}
    }
    return res
}
console.log(numOfStrings(["a","a","a"], "ab"));