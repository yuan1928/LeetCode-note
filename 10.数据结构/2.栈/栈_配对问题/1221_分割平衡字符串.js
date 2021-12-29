var balancedStringSplit = function(s) {
    let stack=[]
    let sum=0
    for(let c of s)
    {
        if(stack.length>0 && stack[stack.length-1]!==c)
        {
            stack.pop()
            sum+=(stack.length===0)?1:0
        }
        else{stack.push(c)}
    }
    return sum
};
console.log(balancedStringSplit("LLLLRRRR"));