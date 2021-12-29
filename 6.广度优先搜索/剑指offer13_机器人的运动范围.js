var movingCount = function(m, n, k) {
    let board=Array(m)
    for(let i of board.keys())
    {board[i]=Array(n).fill(true)}
    let getSum=function (num) {
        let sum=0
        while (num>=1)
        {
            sum+=num%10
            num=Math.floor(num/10)
        }
        return sum
    }
    for(let i of board.keys())
    {
        for(let j of board[0].keys())
        {
            /*if(String(i).split("").map(v=>Number(v)).reduce((a,b)=>(a+b))
                +String(j).split("").map(v=>Number(v)).reduce((a,b)=>(a+b))>k)*/
            if(getSum(i)+getSum(j)>k)
            {board[i][j]=false}
        }
    }
    let res=1
    //let directions=[[0,1],[1,0],[0,-1],[-1,0]]
    let directions=[[0,1],[1,0]]
    let BFS=function (pos){
        let newPos=[]
        for(let [x,y] of pos)
        {
            board[x][y]=false
            for(let [dx,dy] of directions)
            {
                let newX=x+dx
                let newY=y+dy
                if(newX>=0 && newX<=board.length-1 && newY>=0 && newY<=board[0].length-1 && board[newX][newY])
                {
                    newPos.push([newX,newY])
                    board[newX][newY]=false
                }
            }
        }
        res+=newPos.length
        if(newPos.length>0)
        {BFS(newPos)}
    }

    BFS([[0,0]])
    return res
};
console.log(movingCount(3,2,17));