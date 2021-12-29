var reorderedPowerOf2 = function(n) {
    if(isPower(n))return true
    n=String(n).split("")
    let res
    function isPower(n){
        /*while (n%2===0) {n=n/2}
        return (n===1)*/
        //n&(n-1)===0和n&(-n)===n  -> n为2的幂
        return ((n&(n-1))===0)
    }
    const DFS=function (cur,choice){
        if(res!==undefined)return;
        if(!choice.length)
        {
            if(cur[0]!=="0" && isPower(Number(cur))){res=cur}
            return
        }

        for(let i of choice.keys())
        {
            if((i-1>=0 && choice[i]!==choice[i-1]) || i===0)
            {
                let newChoice=choice.slice()
                newChoice.splice(i,1)
                DFS(cur+choice[i],newChoice)
            }
        }
    }
    DFS("",n)
    return (res !== undefined)
};
console.log(reorderedPowerOf2(1));
console.log(reorderedPowerOf2(10));
console.log(reorderedPowerOf2(16));
console.log(reorderedPowerOf2(24));
console.log(reorderedPowerOf2(46));
//1<=n<=10^9, 2^29<10^9<2^30 -> 所有可能出现的二次幂范围为2^0~2^29、共30个数
//每个二次幂的十进制表示中、0~9每种数字出现次数是固定的 -> 如果n的十进制表示中0~9每种数字出现次数与某个二次幂相同，则其通过重排序一定可以成为二次幂
//通过哈希表记录30个二次幂0~9出现次数、如果n的0~9出现次数与某个二次幂相同，则返回true