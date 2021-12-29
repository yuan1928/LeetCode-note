//n个骰子点数和有(5n+1)种可能：n~6n
//dp[i][j]:i个骰子总点数和为j的概览 -> dp[i][j]=(1/6)*dp[i-1][j-k] k=1~6
var dicesProbability = function(n) {
    let dp=Array(n+1)
    dp[0]=[]
    dp[1]=Array(6).fill(1/6)//行索引与骰子数对应
    for(let i=2; i<n+1; i++)
    {
        dp[i]=Array(5*i+1).fill(0)//i个骰子点数和有(5*i+1)种可能
        for(let j of dp[i].keys())//注意每行的列索引与点数之间存在偏移：索引=点数-行索引=点数-i -> i个骰子第j列的点数和为j+i
        {
           for(let k=1; k<=6; k++)
           {
               if((j+i)-k-(i-1)>=0 && (j+i)-k-(i-1)<=dp[i-1].length-1)//点数[(j+i)-k]在i-1行的列索引应为[(j+i)-k-(i-1)]
               {dp[i][j]+=(1/6)*(dp[i-1][(j+i)-k-(i-1)])}
           }
        }
    }
    return dp[n]
};
console.log(dicesProbability(1));