//dp[i][j][k]:前i个字符串在[“0”<=j,"1"<=k]条件限制下最大子集长度
var findMaxForm = function(strs, m, n) {
    const length = strs.length;
    const dp = new Array(length + 1).fill(0).map(() => new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0)));
    //dp首行置0，避免手动初始化dp首行
    for (let i = 1; i <= length; i++) {
        const zerosOnes = getZerosOnes(strs[i - 1]);
        let zeros = zerosOnes[0], ones = zerosOnes[1];//strs[i]含1数和含0数
        for (let j = 0; j <= m; j++) {
            for (let k = 0; k <= n; k++) {
                dp[i][j][k] = dp[i - 1][j][k];//不将strs[i]加入所求最长子集
                if (j >= zeros && k >= ones)//如果可以加
                {dp[i][j][k] = Math.max(dp[i][j][k], dp[i - 1][j - zeros][k - ones] + 1);}
            }
        }
    }
    return dp[length][m][n];
};

const getZerosOnes = (str) => {
    const zerosOnes = new Array(2).fill(0);
    const length = str.length;
    for (let i = 0; i < length; i++) {
        zerosOnes[str[i].charCodeAt() - '0'.charCodeAt()]++;
    }
    return zerosOnes;

}
