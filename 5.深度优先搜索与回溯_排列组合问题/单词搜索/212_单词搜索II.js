//最后一个用例超时，需要用字典树优化
var findWords = function(board, words) {
    let directions=[[0,1],[1,0],[-1,0],[0,-1]]
    let res=[]
    let BFS=function (row,col,next,visited,isFirst){
        if(isFind)return

        if(isFirst)
        {
            for(let i of board.keys())
            {
                for(let j of board[0].keys())
                {
                    if(board[i][j]===word[0] && !isFind && word.length>1)
                    {BFS(i,j,1,[String(i)+"/"+String(j)],false)}
                    else if(board[i][j]===word[0] && !isFind && word.length===1)
                    {
                        res.push(word)
                        return;
                    }
                }
            }
        }

        if(!isFirst)
        {
            for(let [dx,dy] of directions)
            {
                let newRow=row+dx
                let newCol=col+dy
                if(newRow>=0 && newRow<=board.length-1 && newCol>=0 && newCol<=board[0].length-1
                    && visited.indexOf(String(newRow)+"/"+String(newCol))===-1 && board[newRow][newCol]===word[next])
                {
                    if(next===word.length-1)
                    {
                        isFind=true
                        res.push(word)
                        return;
                    }
                    else
                    {
                        let newVisited=visited.slice()
                        newVisited.push(String(newRow)+"/"+String(newCol))
                        BFS(newRow,newCol,next+1,newVisited,false)
                    }
                }
            }
        }
    }

    let isFind
    let word
    for(let current of words)
    {
        isFind=false
        word=current
        BFS(-1,-1,-1,[],true)
    }

    return res
};
let board1 = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]]
let words1 = ["oath","pea","eat","rain"]
let board2=[["a","b"],["c","d"]]
let words2=["bd"]
let board3=[["a"]]
let words3=["a"]
let board4=
          [["a","a","a","a","a","a","a","a","a","a","a","a"],
           ["a","a","a","a","a","a","a","a","a","a","a","a"],
           ["a","a","a","a","a","a","a","a","a","a","a","a"],
           ["a","a","a","a","a","a","a","a","a","a","a","a"],
           ["a","a","a","a","a","a","a","a","a","a","a","a"],
           ["a","a","a","a","a","a","a","a","a","a","a","a"],
           ["a","a","a","a","a","a","a","a","a","a","a","a"],
           ["a","a","a","a","a","a","a","a","a","a","a","a"],
           ["a","a","a","a","a","a","a","a","a","a","a","a"],
           ["a","a","a","a","a","a","a","a","a","a","a","a"],
           ["a","a","a","a","a","a","a","a","a","a","a","a"],
           ["a","a","a","a","a","a","a","a","a","a","a","a"]]
let words4=["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]

console.log(findWords(board4, words4));
