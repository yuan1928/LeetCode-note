//暴力解法：先算第一根竖线和其后所有竖线各自围成面积，再算第二根竖线和其后所有竖线各自围成面积...
//决定面积的因素只有宽和高，以第二根和第三根竖线为例：
//第二根竖线所围的宽一定大于第三根，而此时第三根的高又小于第二根，由于围成面积的短板原则，第三根无需算
//优化解法：如果某根竖线比前面一根短，则其无需计算、直接筛掉
//注意：首尾竖线必须保留
//进一步优化得到最优解法-双指针法
var maxArea = function(height) {
    var x=Array(height.length).fill(0).map((v,k)=>Number(k)+1)
    var optX=[x[0]]
    var optY=[height[0],height[0]]//line20
    var max=0
    //console.log(x,optX,optY,max)
    if(height[0]===Math.max(...height)&&height[-1]===Math.max(...height))
    {
        return (x[-1]-x[0])*height[0]
    }

    for(var i of height.keys())
    {
        if(((i-1)>=0)&&(i<height.length-1))
        {
            if(height[i]>Math.max(...optY))//max传入的参数解构后至少须有2个
            {
                //console.log(i);
                optX.push(x[i])
                optY.push(height[i])
            }
        }
    }
    //optX.push(x[-1])//js不可用-1索引
    optX.push(x[x.length-1])
    optY.splice(0,1)//line9,20
    //optY.push(height[-1])
    optY.push(height[height.length-1])
    //console.log(optX,optY)

    for(var i of x.keys())
    {
        //for(var j of optX.keys().slice(i+1)) keys返回迭代器而非数组，故此处不可用数组方法slice
        for(var j of optX.keys())
        {
            max=Math.max(Math.abs(x[i]-optX[j])*Math.min(height[i],optY[j]),max)
            console.log(i,optX[j],optX);
            //console.log((optX[j]-optX[i])*Math.min(optY[i],optY[j]))
        }
    }
    return max
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));