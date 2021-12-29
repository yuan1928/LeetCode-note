var maxAreaOfIsland = function(grid){
    let memo=[]
    let max=0
    let area=0
    let backtrack=function (row,col)
    {
        if(row-1>=0 && grid[row-1][col]!==0 && memo.indexOf((row-1)+"/"+col)===-1)
        {
            area+=1
            memo.push((row-1)+"/"+col)
            backtrack(row-1,col,area)
        }
        if(row+1<=grid.length-1 && grid[row+1][col]!==0 && memo.indexOf((row+1)+"/"+col)===-1)
        {
            area+=1
            memo.push((row+1)+"/"+col)
            backtrack(row+1,col,area)
        }
        if(col-1>=0 && grid[row][col-1]!==0 && memo.indexOf(row+"/"+(col-1))===-1)
        {
            area+=1
            memo.push(row+"/"+(col-1))
            backtrack(row,col-1,area)
        }
        if(col+1<=grid[0].length-1 && grid[row][col+1]!==0 && memo.indexOf(row+"/"+(col+1))===-1)
        {
            area+=1
            memo.push(row+"/"+(col+1))
            backtrack(row,col+1,area)
        }
        max=Math.max(max,area)
    }

    for (let i of grid.keys())
    {
        for(let j of grid[0].keys())
        {
            if(grid[i][j]!==0 && memo.indexOf(i+'/'+j)===-1)
            {
                memo.push(i+'/'+j)
                area=1
                backtrack(i,j)
                //backtrack(i,j,area) area不能作为局部变量直接传入，否则每一层递归的area是该层传入的临时值:
                //假设第i层递归传入的area是2，在该层继续向下递归、area终止到了5，此时返回第i层，area的值将会变回2而非5
                //area必须作为全局变量传入递归，这样area在每层递归中作相应改变后返回上层时、访问到的将是最新的area
            }
        }
    }

    return max
}

let grid1= [[0,0,1,0,0,0,0,1,0,0,0,0,0],
            [0,0,0,0,0,0,0,1,1,1,0,0,0],
            [0,1,1,0,1,0,0,0,0,0,0,0,0],
            [0,1,0,0,1,1,0,0,1,0,1,0,0],
            [0,1,0,0,1,1,0,0,1,1,1,0,0],
            [0,0,0,0,0,0,0,0,0,0,1,0,0],
            [0,0,0,0,0,0,0,1,1,1,0,0,0],
            [0,0,0,0,0,0,0,1,1,0,0,0,0]]
let grid2= [[1,1,0,1,1],
            [1,0,0,0,0],
            [0,0,0,0,1],
            [1,1,0,1,1]]
let grid3=[[1,1],
           [1,0]]
let grid4=[[0,1,1],
           [1,1,0]]
let grid5=[[1,1,1],
           [1,0,1]]
console.log(maxAreaOfIsland(grid5));