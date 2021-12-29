var longestSubsequence = function(arr, difference) {
    let dp=Array(arr.length).fill(1)//dp[i]:以arr[i]作为当前定差子序列结尾时能获得的最大长度
    let memo={}//num=arr[i]，记录出现过的num的最大的dp[num]
    memo[arr[0]]=1
    for(let i=1; i<dp.length; i++)
    {
        if(memo[arr[i]-difference]!==undefined) {dp[i]=memo[arr[i]-difference]+1}
        memo[arr[i]]=(memo[arr[i]]===undefined)?dp[i]:Math.max(memo[arr[i]],dp[i])
    }
    return Math.max(...dp)
};
console.log(longestSubsequence(arr = [1, 2, 3, 4], difference = 1));
console.log(longestSubsequence(arr = [1, 3, 5, 7], difference = 1));
console.log(longestSubsequence(arr = [1, 5, 7, 8, 5, 3, 4, 2, 1], difference = -2));