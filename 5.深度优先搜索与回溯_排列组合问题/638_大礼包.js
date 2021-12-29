/*var shoppingOffers = function(price, special, needs) {
    let N=needs.length
    let idx=0
    while (idx<special.length)
    {
        let memo=[0,0,0]
        for(let i=0; i<N; i++)
        {
            if(special[idx][i]>needs[i])
            {
                special.splice(idx,1)
                break
            }

            if(special[idx][i]===0){memo[0]+=1}
            else if(special[idx][i]===1)
            {
                memo[1]+=1
                memo[2]=i
            }

            if(i===N-1)
            {
                if(memo[0]===N-1 && memo[1]===1)
                {price[memo[2]]=special[idx][N]}
                idx+=1
            }
        }
    }

    const isSpecial=function (nums){
        for(let i of special.keys())
        {
            let res
            let idx=0
            while (special[i][idx]===0){idx+=1}
            if(nums[idx]%special[i][idx]!==0){continue}
            const k=nums[idx]/special[i][idx]
            for(let j of nums.keys())
            {
                if(special[i][j]*k!==nums[j])
                {
                    res=-1
                    break
                }
            }
            if(res===undefined)return k*special[i][special[i].length-1]
        }
        return -1
    }
    let init=Array(N).fill(0).join()
    let dp={}
    dp[init]=0
    while (dp[needs.join()]===undefined)
    {
        //console.log(dp);
        let newDP={}
        for(let cur in dp)
        {
            let curA=cur.split(",").map((v,k)=>Number(v))
            for(let i=0; i<N; i++)
            {
                if(curA[i]+1<=needs[i])
                {
                    let nextA=curA.slice()
                    nextA[i]+=1
                    let next=nextA.join()
                    if(next==="1,2")debugger
                    let p=isSpecial(nextA)
                    if(p!==-1) {newDP[next]=Math.min(p,dp[cur]+price[i])}
                    else if(newDP[next]!==undefined) {newDP[next]=Math.min(newDP[next],dp[cur]+price[i])}
                    else {newDP[next]=dp[cur]+price[i]}
                }
            }
        }
        dp=newDP
        //console.log(dp);
    }
    return dp[needs.join()]
};*/
var shoppingOffers = function(price, special, needs) {
    const memo = new Map();

    // 记忆化搜索计算满足购物清单所需花费的最低价格
    const dfs = (price, special, curNeeds, filterSpecial, n) => {
        if (!memo.has(curNeeds)) {
            let minPrice = 0;
            for (let i = 0; i < n; ++i) {
                minPrice += curNeeds[i] * price[i]; // 不购买任何大礼包，原价购买购物清单中的所有物品
            }
            for (const curSpecial of filterSpecial) {
                const specialPrice = curSpecial[n];
                const nxtNeeds = [];
                for (let i = 0; i < n; ++i) {
                    if (curSpecial[i] > curNeeds[i]) { // 不能购买超出购物清单指定数量的物品
                        break;
                    }
                    nxtNeeds.push(curNeeds[i] - curSpecial[i]);
                }
                if (nxtNeeds.length === n) { // 大礼包可以购买
                    minPrice = Math.min(minPrice, dfs(price, special, nxtNeeds, filterSpecial, n) + specialPrice);
                }
            }
            memo.set(curNeeds, minPrice);
        }
        return memo.get(curNeeds);
    }

    const n = price.length;

    // 过滤不需要计算的大礼包，只保留需要计算的大礼包
    const filterSpecial = [];
    for (const sp of special) {
        let totalCount = 0, totalPrice = 0;
        for (let i = 0; i < n; ++i) {
            totalCount += sp[i];
            totalPrice += sp[i] * price[i];
        }
        if (totalCount > 0 && totalPrice > sp[n]) {
            filterSpecial.push(sp);
        }
    }

    return dfs(price, special, needs, filterSpecial, n);
};
console.log(shoppingOffers(price = [2, 3, 4], special = [[1, 1, 0, 4], [2, 2, 1, 9]], needs = [1, 2, 1]));
console.log(shoppingOffers(price = [2, 5], special = [[3, 0, 5], [1, 2, 10]], needs = [3, 2]));
console.log(shoppingOffers([2, 3, 4], [[1, 1, 0, 4], [2, 2, 1, 9]], [0, 0, 0]));
console.log(shoppingOffers([0, 0, 0], [[1, 1, 0, 4], [2, 2, 1, 9]], [2, 2, 1]));
console.log(shoppingOffers([2, 3], [[1, 0, 1], [0, 1, 2]], [1, 1]));