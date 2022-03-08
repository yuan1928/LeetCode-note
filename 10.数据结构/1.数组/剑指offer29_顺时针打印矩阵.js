var spiralOrder = function(matrix) {
    //matrix[m,n]
    //第i行从matrix[i][i]走，走到matrix[i][n-1-i]停下
    //开始向下，走到matrix[m-1-i][n-1-i]行停止
    //开始向左，走到matrix[m-1-i][i]停止
    //开始向上，走到matrix[i+1][i]停止
    if(matrix.length===0)return matrix

    let rowUp=0
    let rowDown=matrix.length-1
    let colLeft=0
    let colRight=matrix[0].length-1
    let res=[]

    while (rowUp<=rowDown && colLeft<=colRight)
    {
        for(let num of matrix[rowUp].slice(colLeft,colRight+1))//(1)
        {res.push(num)}
        for(let row=rowUp+1; row<rowDown; row++)
        {res.push(matrix[row][colRight])}//注意matrix[rowUp][colRight]不要重复添加
        if(rowDown>rowUp)//如果rowDown=rowUp，则(1)中已读过了rowDown这一行，此处不必再读
        {
            for(let num of matrix[rowDown].slice(colLeft,colRight+1).reverse())
            {res.push(num)}
        }
        if(colLeft<colRight)
        {
            for(let row=rowDown-1; row>rowUp; row--)
            {res.push(matrix[row][colLeft])}//注意matrix[rowDown][colLeft]不要重复添加
        }

        rowUp+=1
        rowDown-=1
        colLeft+=1
        colRight-=1
    }

    return res
};
let m1=[[1,2,3],[4,5,6],[7,8,9]]
let m2=[[1,2,3,4],[5,6,7,8],[9,10,11,12]]
let m3=[[7],[6],[9]]
console.log(spiralOrder(m3));
