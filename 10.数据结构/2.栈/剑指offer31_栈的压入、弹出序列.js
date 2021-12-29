var validateStackSequences = function(pushed, popped) {
    let stack=[]//模拟实际的压入、弹出过程

    for(let i=0; i<=popped.length-1; i++)
    {
        if(popped[i]===stack[stack.length-1]){stack.pop()}//popped[i]就是当前栈顶->弹出栈顶元素
        else if(pushed.indexOf(popped[i])!==-1)//popped[i]是pushed[j]->pushed.slice(0,j)压入stack,pushed[j]压入又弹出->只须将其从pushed中删去
        {
            while (pushed[0]!==popped[i])
            {stack.push(pushed.shift())}//压入pushed[j]之前的元素
            pushed.shift()//pushed[j]从pushed压入stack，又从stack弹出
        }
        else {return false}
    }

    return true
};
console.log(validateStackSequences(pushed = [0,2,1], popped = [0,1,2]));