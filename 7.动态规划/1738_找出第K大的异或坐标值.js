/*超时
var kthLargestValue = function(matrix, k) {
    let maxs=[]
    for(let i of matrix.keys())
    {
        for(let j of matrix[0].keys())
        {
            if(i===0 && j-1>=0) {matrix[i][j]=matrix[i][j]^matrix[i][j-1]}
            else if(j===0 && i-1>=0) {matrix[i][j]=matrix[i][j]^matrix[i-1][j]}
            else if(i>0 && j>0) {matrix[i][j]=matrix[i][j]^matrix[i][j-1]^matrix[i-1][j]^matrix[i-1][j-1]}

            if(maxs.length<k) {maxs.push(matrix[i][j]);maxs.sort((a,b)=>(b-a))}
            else
            {
                if(matrix[i][j]>=maxs[0])
                {
                    maxs.pop()
                    maxs.splice(0,0,matrix[i][j])
                }
                else if(matrix[i][j]<maxs[0] && matrix[i][j]>maxs[k-1])
                {
                    let pos=0
                    while (pos+1<=k-1)
                    {
                        if(maxs[pos]>=matrix[i][j] && maxs[pos+1]<=matrix[i][j])break
                        else {pos+=1}
                    }
                    maxs.pop()
                    maxs.splice(pos+1,0,matrix[i][j])
                }
            }
        }
    }
    return maxs[k-1]
    return maxs
};*/
var kthLargestValue = function(matrix, k) {
    for(let i of matrix.keys())
    {
        for(let j of matrix[0].keys())
        {
            if(i===0 && j-1>=0) {matrix[i][j]=matrix[i][j]^matrix[i][j-1]}
            else if(j===0 && i-1>=0) {matrix[i][j]=matrix[i][j]^matrix[i-1][j]}
            else if(i>0 && j>0) {matrix[i][j]=matrix[i][j]^matrix[i][j-1]^matrix[i-1][j]^matrix[i-1][j-1]}
        }
    }
    let flat=[]
    for(let item of matrix) {flat=flat.concat(item)}
    flat.sort((a,b)=>(b-a))
    return flat[k-1]
    return maxs
};
let mat=[[5,2],
    [1,6]]
let mat1=[[10,9,5],
    [2,0,4],
    [1,0,9],
    [3,4,8]]
let mat2=[[3,10,9,5,5,7],
    [0,1,7,3,8,1],
    [9,3,0,6,1,6],
    [10,2,9,10,10,7]]

console.log(kthLargestValue(mat2, 18));