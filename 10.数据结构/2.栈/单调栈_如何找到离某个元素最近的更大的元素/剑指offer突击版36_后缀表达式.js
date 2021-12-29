var evalRPN = function(tokens) {
    const dict={'+':0,'-':1,'*':2,'/':3}
    const compute=function (num1,num2,flag){
        if(flag===0)return num1+num2
        else if(flag===1)return num2-num1//注意减法和除法不满足交换律，而num1后入栈、num2先入栈
        else if(flag===2)return num1*num2
        else if(flag===3)
        {
            if((num1>0 && num2>0) || (num1<0 && num2<0))
            {return Math.floor(num2/num1)}
            else {return -(Math.floor(-num2/num1))}
        }
    }
    const stack=[]

    for(let char of tokens)
    {
        if(char in dict)
        {stack.push(compute(stack.pop(),stack.pop(),dict[char]))}
        else {stack.push(Number(char))}
    }
    return stack[0]
};
console.log(evalRPN(["2", "1", "+", "3", "*"]));
console.log(evalRPN(["4", "13", "5", "/", "+"]));
console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]));