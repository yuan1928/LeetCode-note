var exist = function(board, word) {
    let isFind=false
    let backtrack=function (row,col,nextFind,exp)
    {
        if(isFind){return}

        if(nextFind!==word.length-1)
        {
            if(col+1<=board[0].length-1 && exp.indexOf(row+"/"+(col+1))===-1 && board[row][col+1]===word[nextFind])
            {
                let newExp=exp.slice()
                newExp.push(row+"/"+(col+1))
                //exp.push(row+"/"+(col+1)) 回到上层递归时、exp无法回退到对应的版本
                backtrack(row,col+1,nextFind+1,newExp)
            }
            if(row+1<=board.length-1 && exp.indexOf((row+1)+"/"+col)===-1 && board[row+1][col]===word[nextFind])
            {
                let newExp=exp.slice()
                newExp.push((row+1)+"/"+col)
                backtrack(row+1,col,nextFind+1,newExp)
            }
            if(row-1>=0 && exp.indexOf((row-1)+"/"+col)===-1 && board[row-1][col]===word[nextFind])
            {
                let newExp=exp.slice()
                newExp.push((row-1)+"/"+col)
                backtrack(row-1,col,nextFind+1,newExp)
            }
            if(col-1>=0 && exp.indexOf(row+"/"+(col-1))===-1 && board[row][col-1]===word[nextFind])
            {
                let newExp=exp.slice()
                newExp.push(row+"/"+(col-1))
                backtrack(row,col-1,nextFind+1,newExp)
            }
        }
        else
        {
            if(
                (col+1<=board[0].length-1 && exp.indexOf(row+"/"+(col+1))===-1 && board[row][col+1]===word[nextFind]) ||
                (row+1<=board.length-1 && exp.indexOf((row+1)+"/"+col)===-1 && board[row+1][col]===word[nextFind]) ||
                (row-1>=0 && exp.indexOf((row-1)+"/"+col)===-1 && board[row-1][col]===word[nextFind]) ||
                (col-1>=0 && exp.indexOf(row+"/"+(col-1))===-1 && board[row][col-1]===word[nextFind])
            )
            {isFind=true}
        }
    }

    for(let i of board.keys())
    {
        for(let j of board[0].keys())
        {
            if(board[i][j]===word[0] && word.length>=2)
            {
                backtrack(i,j,1,[i+"/"+j])
                if(isFind){return true}
            }
            else if(board[i][j]===word[0] && word.length===1){return true}
        }
    }
    return isFind
};
let board=[["A","B","C","E"],["S","C","F","S"],["A","B","E","E"]]
let word="ABCB"
console.log(exist(board, word));

/*
backtrack中遍历四个方向的更精简写法：
let directions=[[0,1],[1,0],[-1,0],[0,-1]]
for [dx,dy] of directions
{
    let newRow=row+dx
    let newCol=col+dy
    if(newRow未出界 && newCol未出界 && [newRow,newCol]未访问过 && word[nextFind]===board[newRow,newCol])
    {backtrack(newRow,newCol,nextFind+1,newExp)}
}
 */