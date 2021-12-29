var solveSudoku=function (board){
    var final=[]
    var possibleFill={"1":"","2":"","3":"","4":"","5":"","6":"","7":"","8":"","9":""}
    var deepCopy=function (twoDimensionArray)
    {
        var copy=[]
        for(var i of Array(twoDimensionArray.length).keys())
        {
            copy.push(twoDimensionArray[i].slice())
        }
        return copy
    }
    var getInfo=function (board, i, j){
        var rows=Array(10).fill(0)
        var cols=Array(10).fill(0)
        var boxs=Array(10).fill(0)
        for(var k of Array(9).keys())
        {
            var current=board[i][Number(k)]
            if(current!=="."){rows[current]+=1}
            current=board[Number(k)][j]
            if(current!=="."){cols[current]+=1}
        }
        var row=[Math.floor(i/3)*3,Math.floor(i/3)*3+1,Math.floor(i/3)*3+2]
        var col=[Math.floor(j/3)*3,Math.floor(j/3)*3+1,Math.floor(j/3)*3+2]
        for(var r of row)
        {
            for(var c of col)
            {
                var current=board[r][c]
                if(current!=="."){boxs[current]+=1}
            }
        }
        return [rows,cols,boxs]
    }

    var backtrack=function (board){
        //当board填满时，递归终止
        var isEnd=true
        for(var row of board)
        {
            if(row.indexOf(".")!==-1){isEnd=false;break}
        }
        if(isEnd)
        {
            final=board
            return
        }


        //遍历每个空位，若其possibles为空，结束此分支
        //否则将可能值值逐一填入后递归
        for(var i of Array(9).keys())
        {
            for(var j of Array(9).keys())
            {
                if(board[Number(i)][Number(j)]!=="."){continue}
                else
                {
                    var possibles=[]
                    var info=getInfo(board,Number(i),Number(j))
                    for(var p in possibleFill)//找出当前空缺位所有可能的值
                    {
                        if(info[0][Number(p)]===0 && info[1][Number(p)]===0 && info[2][Number(p)]===0)
                        {possibles.push(p)}
                    }
                    if(possibles.length===0) {return;}
                    else
                    {
                        for (var fill of possibles)
                        {
                            var b = deepCopy(board)//.slice()只能对一维数组进行深拷贝，二维数组深拷贝需要自己实现！
                            b[Number(i)][Number(j)] = fill
                            //if(i===0 && j===0){console.log(b)}
                            //console.log(i,j,fill,possibles)
                            backtrack(b)
                        }
                        return;//这里不return，遍历完所有的fill之后不会跳回上一层递归继续遍历上一个位置的fill，而是回到这次递归的for！！！！！1
                    }
                }
            }
        }
    }
    backtrack(board)
    board=final
    return board
}
var board= [["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]]
console.log(solveSudoku(board));