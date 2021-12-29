//264/266
/*
var minWindow = function(s, t) {
    let window=t.length
    let left=0
    let right=left+window-1
    while (window<=s.length)
    {
        let current=s.slice(left,right+1).split("")
        let isFind=true
        for(let char of t)
        {
            if(current.indexOf(char)!==-1) {current.splice(current.indexOf(char),1)}
            else {isFind=false;break}
        }
        if(isFind){return s.slice(left,right+1)}
        else
        {
            if(right+1<=s.length-1)
            {
                left+=1
                right+=1
            }
            else
            {
                window+=1
                left=0
                right=left+window-1
            }
        }
    }

    return ""
};*/
//264/266
/*
var minWindow = function(s, t){
    let size=Infinity
    let window=""
    let left=0
    let right=t.length-1
    while (left<=right)
    {
        let current=s.slice(left,right+1).split("")
        let isFind=true
        for(let char of t)
        {
            if(current.indexOf(char)!==-1) {current.splice(current.indexOf(char),1)}
            else {isFind=false;break}
        }
        if(isFind)
        {
            if(size>(right-left+1))
            {
                size=right-left+1
                //window=current current已经splice过了
                window=s.slice(left,right+1)
            }
            left+=1
        }
        else
        {
            if(right+1<=s.length-1) {right+=1}
            else {break}
        }
    }

    return window
}
console.log(minWindow("A", "A"));*/
var minWindow = function(s, t){
    let size=Infinity
    let window=""
    let left=0
    let right=t.length-1
    let numS={}
    let numT={}
    for(let i of Array(t.length).keys())
    {
        if(numS[s[i]]){numS[s[i]]+=1}
        else {numS[s[i]]=1}
        if(numT[t[i]]){numT[t[i]]+=1}
        else {numT[t[i]]=1}
    }

    while (left<=right)
    {
        let isFind=true
        for(let char in numT)
        {
            if(!numS[char] || numS[char]<numT[char])
            {isFind=false;break}
        }
        if(isFind)
        {
            if(size>(right-left+1))
            {
                size=right-left+1
                //window=current current已经splice过了
                window=s.slice(left,right+1)
            }
            left+=1
            //numS[s[left]]-=1 注意left已经右移
            numS[s[left-1]]-=1
        }
        else
        {
            if(right+1<=s.length-1)
            {
                right+=1//注意right已经右移
                if(numS[s[right]]){numS[s[right]]+=1}
                else {numS[s[right]]=1}
            }
            else {break}
        }
    }

    return window
}
console.log(minWindow("A", "A"))