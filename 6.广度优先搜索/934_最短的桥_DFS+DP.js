let grid1=[[0,1],
           [1,0]]
let grid2=[[0,1,0],
           [0,1,0],
           [0,0,1]]
let grid3=[[1,1,1,1,1],
           [1,0,0,0,1],
           [1,0,1,0,1],
           [1,0,0,0,1],
           [1,1,1,1,1]]
//DFS->找出两座岛各自组成元素的坐标集合
//DP->找出岛2组成元素各自到岛1的最小距离，返回最小距离集合中的最小值
var shortestBridge = function(grid) {
    let island1=[]
    let island2=[]
    let backtrack=function (row,col,visited){
        let directions=[[1,0],[0,1],[0,-1],[-1,0]]
        for(let [dx,dy] of directions)
        {
            let newRow=row+dx
            let newCol=col+dy
            if(newRow>=0 && newRow<=grid.length-1 && newCol>=0 && newCol<=grid[0].length-1 && grid[newRow][newCol]===1
               && visited.indexOf(newRow+"/"+newCol)===-1)
            {
                island1.push(newRow+"/"+newCol)
                visited.push(newRow+"/"+newCol)
                backtrack(newRow,newCol,visited)
            }
        }
    }
    let DP=function (dp,island){//dp将一座island重置为0、其余位置置为infinity；island是另一座岛的坐标集合
        for(let i of dp.keys())
        {
            for(let j of dp[0].keys())
            {
                if(i-1>=0){dp[i][j]=Math.min(dp[i][j],dp[i-1][j]+1)}
                if(j-1>=0){dp[i][j]=Math.min(dp[i][j],dp[i][j-1]+1)}
            }
        }
        for(let i of dp.keys())
        {
            for(let j of dp[0].keys())
            {
                let row=dp.length-1-i
                let col=dp[0].length-1-j
                if(row+1<=dp.length-1){dp[row][col]=Math.min(dp[row][col],dp[row+1][col]+1)}
                if(col+1<=dp[0].length-1){dp[row][col]=Math.min(dp[row][col],dp[row][col+1]+1)}
            }
        }

        let min=Infinity
        for(let [islandX,islandY] of island)
        {min=Math.min(min,dp[islandX][islandY])}
        return min-1
    }

    let isIsland1=true
    for(let i of grid.keys())
    {
        for(let j of grid[0].keys())
        {
            if(grid[i][j]===1 && isIsland1)
            {
                island1.push(i+"/"+j)
                backtrack(i,j,[i+"/"+j])
                isIsland1=false
            }
            else if(grid[i][j]===1 && island1.indexOf(i+"/"+j)===-1)
            {island2.push([i,j])}
        }
    }

    let dp=Array(grid.length)//岛1元素到自己的最小距离为0、其余非岛1元素到岛1的最小距离初始化为infinity
    for(let i of dp.keys())
    {
        dp[i]=Array(grid[0].length)
        for(let j of dp[0].keys())
        {
            if(island1.indexOf(i+"/"+j)!==-1){dp[i][j]=0}
            else {dp[i][j]=Infinity}
        }
    }
    return DP(dp,island2)
};
console.log(shortestBridge(grid2));
