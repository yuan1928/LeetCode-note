/*var getMoneyAmount = function(n) {
    if(n===1)return 0

    let res=Infinity
    let left
    let right
    let leftCost
    let rightCost
    for(let i=1; i<=n; i++)
    {
        left=0
        right=i
        leftCost=i
        rightCost=i
        while ((i-1)-(left+1)+1>1)
        {
            left=Math.floor(((i-1)+(left+1))/2)
            leftCost+=left
        }
        while (n-(right+1)+1>1)
        {
            right=Math.floor(((right+1)+n)/2)
            rightCost+=right
        }
        res=Math.min(res, Math.max(leftCost, rightCost))
    }
    return res
};
console.log(getMoneyAmount(2));*/

//cost([1,n])=min(k+max[cost(1,k-1),cost(k+1,n)]),1<=k<=n
//cost([i,j])=min(k+max[cost(i,k-1),cost(k+1,j)]),i<=k<=j
//回溯过程中大量求cost的过程是重复的，如求cost(1,6):
//当k=2:cost(1,6)=cost(1,1)+cost(3,6)，其中cost(3,6)取k=3时需要求cost(4,6)
//当k=3:cost(1,6)=cost(1,2)+cost(4,6) -> cost(4,6)重复计算
//本题搜索空间巨大，必须引入记忆化搜索

var getMoneyAmount=function (n){
    /*let memo={}
    const DFS=function (start,end,cur){//DFS(i,j,cur)表示在已有代价cur的基础上加上cost(i,j)最小值
        if(start===end) {return cur}
        if(start+"/"+end in memo)return memo[start+"/"+end]+cur

        let costs=[]//储存每个元素作为断点时的最小代价
        for(let i=start; i<=end; i++)
        {
            let left=0//答案在断点左边时的代价
            let right=0//答案在断点右边时的代价
            if(i-1>=start)
            {
                let cost=DFS(start,i-1,cur+i)
                left=cost
                memo[start+"/"+(i-1)]=cost-(cur+i)//注意memo存储的是cost(i,j)，要减去已有代价
            }
            if(i+1<=end)
            {
                let cost=DFS(i+1,end,cur+i)
                right=cost
                memo[(i+1)+"/"+end]=cost-(cur+i)
            }
            costs.push(Math.max(left,right))
        }
        return Math.min(...costs)
    }

    return DFS(1, n, 0)*/
    const f = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0));
    for (let i = n - 1; i >= 1; i--) {
        for (let j = i + 1; j <= n; j++) {
            f[i][j] = j + f[i][j - 1];
            for (let k = i; k < j; k++) {
                f[i][j] = Math.min(f[i][j], k + Math.max(f[i][k - 1], f[k + 1][j]));
            }
        }
    }
    return f[1][n];
}
console.log(getMoneyAmount(10));
console.log(getMoneyAmount(1));
console.log(getMoneyAmount(2));
console.log(getMoneyAmount(16));
console.log(getMoneyAmount(25));
//console.log(Math.max(19, null));