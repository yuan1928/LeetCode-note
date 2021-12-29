var countAndSay = function(n) {
    var backtrack=function (before,n)
    {
        if(n===1)
        {
            result=before
            return
        }//终止条件,注意return before之后，在backtrack外是无法获得before的：before是函数内变量，它e在backtrack外只能是undefined

        //每次递归进行的操作：
        //将before切分成slice，每个slice是不含重复字符的子串，所有slice保存在slices中
        var left=0
        var right=1
        var currentIndex=0
        var slices=[before[left]]
        while (left<right && left<=before.length-1 && right<=before.length-1)
        {
            if(before[left]===before[right])
            {
                slices[currentIndex]+=before[right]
                right+=1
            }
            else
            {
                left=right
                right=right+1
                currentIndex+=1
                slices[currentIndex]=before[left]
            }
        }
        //对每个slice用两位数字描述，描述字符覆盖slices
        for(var i of slices.keys()) {slices[i]=slices[i].length+slices[i][0]}
        // 将每个slice的描述拼接后覆盖before
        before=slices.join().replace(/,/g,"")
        //backtrack(before,n-1)
        backtrack(before,n-1)
    }
    var result
    backtrack("1",n)
    return result
};
console.log(countAndSay(5));