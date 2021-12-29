var exist = function(board, word) {
    let isFind=false
    let directions=[[0,1],[1,0],[0,-1],[-1,0]]
    let m=board.length-1
    let n=board[0].length-1
    let DFS=function (pos,target,visited){
        if(isFind)return

        for(let [dx,dy] of directions)
        {
            let newRow=pos[0]+dx
            let newCol=pos[1]+dy
            if(newRow>=0 && newRow<=m && newCol>=0 && newCol<=n &&
                board[newRow][newCol]===word[target] && visited.indexOf(newRow+"/"+newCol)===-1)
            {
                if(target===word.length-1){isFind=true;return;}
                else
                {
                    let newVisited=visited.slice()
                    newVisited.push(newRow+"/"+newCol)
                    DFS([newRow,newCol],target+1,newVisited)
                }
            }
        }
    }

    for(let i of board.keys())
    {
        for(let j of board[0].keys())
        {
            if(board[i][j]===word[0] && !isFind && word.length>1)
            {DFS([i,j],1,[i+"/"+j])}
            else if(board[i][j]===word[0] && !isFind && word.length===1)
            {return true}
        }
    }
    return isFind
};
let b=[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
let w="ABCCED"
let b1=[["a","b"],["c","d"]]
let w1="abdc"
console.log(exist(b1, w1));