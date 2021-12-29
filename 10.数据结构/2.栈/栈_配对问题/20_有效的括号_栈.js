var isValid = function(s) {
    var table={")":"(","]":"[","}":"{"}
    var lefts={"(":"","[":"","{":""}
    var temp=[]
    for(var symbol of s)
    {
        if(symbol in lefts){temp.push(symbol)}//当前为左括号->压入栈顶
        else //当前为右括号->查看temp是否为空、栈顶元素是否与当前右括号匹配
        {
            if(temp.length!==0)
            {
                var current=temp.pop()
                if(current!==table[symbol]){return false}
            }
            else {return false}
        }
    }
    return (temp.length === 0)
};

console.log(isValid("()"))