var searchMatrix = function(matrix, target) {
    if(matrix[0][0]>target || matrix[matrix.length-1][matrix[0].length-1]<target) {return false}

    let nodes=[[0,0]]//从左上端点开始搜索，nodes存储所有当前可能等于target的节点
    let minDirections=[[0,1],[1,0]]//当前值小于target->向右或下走一步
    let maxDirections=[[0,-1],[-1,0]]//当前值大于target->向左或上走一步
    while (nodes.length!==0)
    {
        let newNodes=[]
        for(let [x,y] of nodes)
        {
            if(matrix[x][y]===target){return true}
            else if(matrix[x][y]>target)
            {
                for(let [dx,dy] of maxDirections)
                {
                    if(x+dx>=0 && y+dy>=0 && matrix[x+dx][y+dy]!==Infinity)
                    {newNodes.push([x+dx,y+dy])}
                }
                matrix[x][y]=Infinity//标记访问过的节点
            }
            else
            {
                for(let [dx,dy] of minDirections)
                {
                    if(x+dx<=matrix.length-1 && y+dy<=matrix[0].length-1 && matrix[x+dx][y+dy]!==Infinity)
                    {newNodes.push([x+dx,y+dy])}
                }
                matrix[x][y]=Infinity
            }
        }
        nodes=newNodes.slice()
    }

    return false
};
let mat=[[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]
console.log(searchMatrix(mat, 22));