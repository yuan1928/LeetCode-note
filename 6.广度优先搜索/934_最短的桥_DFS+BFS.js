//DFS->找出岛1和岛2各自的组成元素坐标集合
//BFS->如果岛1的桥元素与岛2元素不相交，则将桥更新为当前桥的相邻“圈”、桥长+1，进入下一次BFS，直到桥元素与岛2元素相交
//桥元素初始化为岛1元素

var shortestBridge = function(grid) {
    let island1=[]
    let island2=[]
    let DFS=function (row, col, visited){
        let directions=[[1,0],[0,1],[0,-1],[-1,0]]
        for(let [dx,dy] of directions)
        {
            let newRow=row+dx
            let newCol=col+dy
            if(newRow>=0 && newRow<=grid.length-1 && newCol>=0 && newCol<=grid[0].length-1 && grid[newRow][newCol]===1
                && visited.indexOf(newRow+"/"+newCol)===-1)
            {
                island1.push(newRow+"/"+newCol)
                bridge.push([newRow,newCol])
                visited.push(newRow+"/"+newCol)
                DFS(newRow,newCol,visited)
            }
        }
    }
    let BFS=function (bridge){
        let newBridge=[]
        for(let [row,col] of bridge)
        {
            if(island2.indexOf(row+"/"+col)!==-1) {return}
            else
            {
                let directions=[[1,0],[0,1],[0,-1],[-1,0]]
                for(let [dx,dy] of directions)
                {
                    let newRow=row+dx
                    let newCol=col+dy
                    if(newRow>=0 && newRow<=grid.length-1 && newCol>=0 && newCol<=grid[0].length-1
                        && island1.indexOf(newRow+"/"+newCol)===-1)
                    {
                        newBridge.push([newRow,newCol])
                        island1.push(newRow+"/"+newCol)
                    }
                }
            }
        }
        bridgeLen+=1
        //console.log(bridgeLen);
        BFS(newBridge)
    }

    let isIsland1=true
    let bridge=[]
    for(let i of grid.keys())
    {
        for(let j of grid[0].keys())
        {
            if(grid[i][j]===1 && isIsland1)
            {
                island1.push(i+"/"+j)
                bridge.push([i,j])
                DFS(i,j,[i+"/"+j])
                isIsland1=false
            }
            else if(grid[i][j]===1 && island1.indexOf(i+"/"+j)===-1)
            {island2.push(i+"/"+j)}
        }
    }

    let bridgeLen=0
    BFS(bridge)
    return bridgeLen-1
};
console.log(shortestBridge([[1,1,1,1,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]));