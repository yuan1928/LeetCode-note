//表达式含n个运算符->最多可加n个括号
//每个括号须加在“操作数/运算符/操作数”这样的子表达式上，其中操作数可以是另一个子表达式的运算结果
/*var diffWaysToCompute = function(expression) {
    let ways=[]
    let results=[]
    let BFS=function (expression){
        let buckets=0
        let computes=[]
        expression=expression.split("")
        for(let i of expression.keys())
        {
            if(expression[i]==="("){buckets+=1}
            if(expression[i]===")"){buckets-=1}
            if(buckets===0 && ["+","-","*"].indexOf(expression[i])!==-1){computes.push(i)}
        }
        if(computes.length===1)
        {
            expression=expression.join().replace(/,/g,"")
            if(ways.indexOf(expression)===-1){ways.push(expression)}
            return
        }
        for(let i of computes.keys())
        {
            let newExpression=expression.slice()
            if(i===0)
            {
                newExpression.splice(0,0,"(")
                newExpression.splice(computes[1]+1,0,")")//加了前括号后，整体索引+1
            }
            else if(i===computes.length-1)
            {
                newExpression.splice(computes[computes.length-2]+1,0,"(")
                newExpression.splice(newExpression.length,0,")")
            }
            else
            {
                newExpression.splice(computes[i-1]+1,0,"(")
                newExpression.splice(computes[i+1]+1,0,")")
            }
            BFS(newExpression.join().replace(/,/g,""))
        }
    }
    BFS(expression)

    return ways
};
console.log(diffWaysToCompute("2-1-1-1"));*/
var diffWaysToCompute = function(expression) {
    let isDigit=true
    for(let i of expression.split("").keys())
    {
        if(i!==0 && ["+","-","*"].indexOf(expression[i])!==-1)
        {isDigit=false;break}
    }
    if(["+","*"].indexOf(expression[0])===-1 && isDigit)
    {return [Number(expression)]}

    let res=[]
    for(let i of expression.split("").keys())
    {
        if(["+","-","*"].indexOf(expression[i])!==-1)
        {
            let left=diffWaysToCompute(expression.slice(0,i))
            let right=diffWaysToCompute(expression.slice(i+1))
            for(let l of left)
            {
                for(let r of right)
                {
                    if(expression[i]==="+"){res.push(l+r)}
                    else if(expression[i]==="-"){res.push(l-r)}
                    else {res.push(l*r)}
                }
            }
        }
    }

    return res
};
console.log(diffWaysToCompute("2*3-4*5"));