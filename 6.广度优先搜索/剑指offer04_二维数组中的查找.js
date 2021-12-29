/*
var findNumberIn2DArray1 = function(matrix, target) {
    let res=false
    let m=matrix.length-1
    let n=matrix[0].length-1
    let directions=[[0,1],[1,0]]

    let BFS=function (nodes,visited){
        let temp=[]

        for(let [row,col] of nodes)
        {
            if(matrix[row][col]===target)
            {
                res=true
                return
            }
            else if(matrix[row][col]<target)
            {
                for(let [dx,dy] of directions)
                {
                    let newRow=row+dx
                    let newCol=col+dy
                    if(newRow>=0 && newRow<=m && newCol>=0 && newCol<=n && visited.indexOf(newRow+"/"+newCol)===-1)
                    {
                        temp.push([newRow,newCol])
                        visited.push(newRow+"/"+newCol)
                    }
                }
            }
        }

        if(temp.length>0) {BFS(temp,visited)}
    }

    BFS([[0,0]],[])
    return res
};
var findNumberIn2DArray2 = function(matrix, target) {
    if(matrix.length===0)return false

    let res=false
    let m=matrix.length-1
    let n=matrix[0].length-1
    let directions=[[0,1],[1,0]]
    let nodes=[[0,0]]
    let visited=[]

    while (nodes.length>0)
    {
        let temp=[]

        for(let [row,col] of nodes)
        {
            if(matrix[row][col]===target) {return true}
            else if(matrix[row][col]<target)
            {
                for(let [dx,dy] of directions)
                {
                    let newRow=row+dx
                    let newCol=col+dy
                    if(newRow>=0 && newRow<=m && newCol>=0 && newCol<=n && visited.indexOf(newRow+"/"+newCol)===-1)
                    {
                        temp.push([newRow,newCol])
                        visited.push(newRow+"/"+newCol)
                    }
                }
            }
        }
        nodes=temp
    }

    return res
}如果从[0,0]开始搜索，只能通过128/129
*/
//通过全部用例，从右上角开始搜索同理，总之要保证走法的单一以保证下一步不会重复之前的路；
//将二维数组拉平，如果从左上角或者右下角开始搜索，可以视为从拉平数组的首端或者末端开始搜索，
// 而如果从左下角或者右上角开始搜索，可以视为从拉平数组的中间开始搜索，类似于二分查找/二分搜索树
var findNumberIn2DArray = function(matrix, target) {
    if(matrix.length===0)return false

    let res=false
    let m=matrix.length-1
    let n=matrix[0].length-1
    let nodes=[[m,0]]

    while (nodes.length>0)
    {
        let temp=[]

        for(let [row,col] of nodes)
        {
            if(matrix[row][col]===target) {return true}
            else if(matrix[row][col]<target)//只向右走->不会遇到重复的->不必使用visited存储走过的位置
            {
                let newCol=col+1
                if(newCol<=n) {temp.push([row,newCol])}
            }
            else//只向上走->不会遇到重复的->不必使用visited存储走过的位置
            {
                let newRow=row-1
                if(newRow>=0) {temp.push([newRow,col])}
            }
        }
        nodes=temp
    }

    return res
}
let mat=[
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
]
console.log(findNumberIn2DArray(mat, 5));
