/*13/16  sumRegion有大量重复计算->timeout
var NumMatrix = function(matrix) {
    this.mat=matrix
};

NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    let res=0
    for(let i=row1; i<=row2; i++)
    {
        for(let j=col1; j<=col2; j++)
        {res+=this.mat[i][j]}
    }
    return res
};*/
var NumMatrix = function(matrix) {
    this.dp=this.getDP(matrix)//dp[i][j]=NumMatrix.sumRegion(0,0,i,j)
};
NumMatrix.prototype.getDP=function (mat){
    let row=mat.length-1
    let col=mat[0].length-1
    for(let i=0; i<=row; i++)
    {
        for(let j=0; j<=col; j++)
        {
            if(i-1>=0 && j-1>=0){mat[i][j]+=(mat[i-1][j]+mat[i][j-1]-mat[i-1][j-1])}
            else if(i-1>=0){mat[i][j]+=mat[i-1][j]}
            else if(j-1>=0){mat[i][j]+=mat[i][j-1]}
        }
    }
    return mat
}
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    //console.log(this.dp);
    if(row1!==0 && col1!==0) {return this.dp[row2][col2]-this.dp[row1-1][col2]-this.dp[row2][col1-1]+this.dp[row1-1][col1-1]}
    else if(row1===0 && col1!==0) {return this.dp[row2][col2]-this.dp[row2][col1-1]}
    else if(row1!==0 && col1===0) {return this.dp[row2][col2]-this.dp[row1-1][col2]}
    else {return this.dp[row2][col2]}
};
const obj=new NumMatrix([[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]])
console.log(obj.sumRegion(2, 1, 4, 3));
console.log(obj.sumRegion(1, 1, 2, 2));
console.log(obj.sumRegion(1, 2, 2, 4));