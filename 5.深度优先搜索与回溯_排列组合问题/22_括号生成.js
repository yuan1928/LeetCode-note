//根据括号对数分别生成储存左括号和右括号的数组
//开始递归，初始保存结果字符串为空
//选择接下来跟左括号还是右括号
//跟左括号：字符串添加左括号数组pop出的左括号，把当前左右括号数组和字符串传入下一次递归
//只有当前字符串中左括号多于右括号，才能跟右括号：字符串添加右括号数组pop出的右括号，把当前左右括号数组和字符串传入下一次递归
//递归终止条件：左括号数组为空，此时将所有剩下的右括号追加到字符串后返回

var generateParenthesis = function(n) {
    var lefts=Array(n).fill("(")
    var rights=Array(n).fill(")")
    var result=[]

    var backtrack=function (lefts,rights,lastResult){
        if(lefts.length===0)
        {
            lastResult+=rights.join().replace(/,/g,"")
            result.push(lastResult)
            return//递归终止一定记得返回，不然会继续执行下面语句、无限递归
            //console.log("end",rights,lastResult)
        }

        var leftsCopy=lefts.slice()
        var rightsCopy=rights.slice()//每次递归都有两个分支(跟左或者跟右)，为了防止分支对应数组数据不相互干扰，其中一个分支的数组要通过备份使用
        var nextRight=lastResult.slice()
        var nextLeft=lastResult.slice()

        nextLeft+=lefts.pop()
        backtrack(lefts,rights,nextLeft)

        var lCount=0
        var rCount=0
        for(var item of nextRight)
        {
            if(item==="("){lCount+=1}
            if(item===")"){rCount+=1}
        }
        if(lCount>rCount)
        {
            nextRight += rightsCopy.pop()
            backtrack(leftsCopy, rightsCopy, nextRight)
        }
    }

    backtrack(lefts,rights,"")
    return result
};
console.log(generateParenthesis(5));