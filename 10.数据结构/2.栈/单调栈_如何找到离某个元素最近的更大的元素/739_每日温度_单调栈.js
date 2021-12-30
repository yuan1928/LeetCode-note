//stack[i]=j表示第j天，stack中日期单增、日期对应的温度不严格单减
var dailyTemperatures = function(temperatures) {
    let stack=[0]
    let res=Array(temperatures.length).fill(0)
    for(let i of temperatures.keys())
    {
        while(stack.length!==0 && temperatures[i]>temperatures[stack[stack.length-1]])//i是第一个温度高于栈顶日期温度的时间
        {
            res[stack[stack.length-1]]=i-stack[stack.length-1]
            stack.pop()
        }//此循环结束后，栈顶温度(栈中最低温度)>=当天温度
        stack.push(i)//当天日期入栈，成为新的栈顶元素
    }
    return res
};
console.log(dailyTemperatures([30,90,60]));

var dailyTemperatures_ = function(temperatures) {
    const stack=[temperatures.length-1]
    const res=[0]
    for(let i=temperatures.length-2; i>=0; i--)
    {
        if(temperatures[stack[stack.length-1]]>temperatures[i])
        {
            res.unshift(1)
            stack.push(i)
        }
        else
        {
            while (stack.length && temperatures[stack[stack.length-1]]<=temperatures[i])
            {stack.pop()}
            if(stack.length===0) {res.unshift(0)}
            else {res.unshift(stack[stack.length-1]-i)}
            stack.push(i)
        }
    }
    return res
};
console.log(dailyTemperatures_([73, 74, 75, 71, 69, 72, 76, 73]));
console.log(dailyTemperatures_([30, 40, 50, 60]));
console.log(dailyTemperatures_([30, 60, 90]));
