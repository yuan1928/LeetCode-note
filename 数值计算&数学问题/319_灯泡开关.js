//设灯泡开为1，关为0，则初始状态为[0]n
//第一次操作后状态为：[0]n^[1]n；第二次操作后状态为：[0]n^[1]n^[01]n；第三次操作后状态为：[0]n^[1]n^[01]n^[001]n；....
//最终状态：初始态^操作1^操作2^...^操作n=初始态^(操作1^操作2^...^操作n)，由归纳法可以得到总操作=[1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,...]
//初始态=[0]n -> 末态=总操作
var bulbSwitch = function(n) {
    if(n===0)return 0

    let cur=0//当前灯泡索引
    let step=1//step*2=总操作中作为间隔的0的个数
    let res=1
    while (cur+(step*2)+1<=n-1)
    {
        res+=1
        cur=cur+(step*2)+1
        step+=1
    }
    return res
};
console.log(bulbSwitch(9));
console.log(bulbSwitch(1));

//官方题解：
//第i个灯泡，假设i可以进行分解：i=1*i=x*y=j*k=...=因数a*因数b (1<x、y、j、k、...<i)
// -> 其在第(因数a)次操作时被(开/关),则会在第(因数b)次操作时被(关/开)
// -> 只要因数a!==因数b，则灯泡末态为关
// -> 只有当因数a=因数b，灯泡末态才为开
// -> res=[1,2,...,n]中完全平方数的个数=Math.floor(sqrt(n))