var champagneTower = function(poured, query_row, query_glass) {
    if(poured===0)return 0

    let cups=Array(100)
    for(let i of cups.keys())
    {cups[i]=Array(i+1).fill(0)}
    cups[0][0]=poured

    for(let i of cups.keys())
    {
        for(let j of cups[i].keys())
        {
            if(cups[i][j]>1 && i<cups.length-1)
            {
                cups[i+1][j]+=(cups[i][j]-1)/2
                cups[i+1][j+1]+=(cups[i][j]-1)/2
                cups[i][j]=1
            }
            else if(cups[i][j]>1 && i===cups.length-1) {cups[i][j]=1}
        }
    }

    return cups[query_row][query_glass]
};
/*滚动数组优化
var champagneTower = function(poured, query_row, query_glass){
    let cups=[poured]
    let row=0
    while (row<query_row)
    {
        cups.push(0)
        for(let i of cups.keys())
        {
            let glass=cups.length-1-i
            cups[glass]=(cups[glass]>1)?(cups[glass]-1)/2:0
            cups[glass]+=(glass-1>=0 && cups[glass-1]>1)?(cups[glass-1]-1)/2:0
        }
        row+=1
    }
    return (cups[query_glass]>1)?1:cups[query_glass]
} */


console.log(champagneTower(25,6,1));