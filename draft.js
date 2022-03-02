//1765
var highestPeak = function(isWater) {
    for(let i=0; i<=isWater.length-1; i++)
    {
        for(let j=0; j<=isWater[0].length-1; j++)
        {isWater[i][j]=isWater[i][j]?0:1}
    }

    for(let i=0; i<=isWater.length-1; i++)
    {
        for(let j=0; j<=isWater[0].length-1; j++)
        {
            let [up, down, left, right]=[i-1>=0?isWater[i-1][j]:Infinity, isWater[i+1]?isWater[i+1][j]:undefined,
                                         j-1>=0?isWater[i][j-1]:Infinity, isWater[i][j+1]]
            if(isWater[i][j] && down!==0 && right!==0 && !(up===Infinity && left===Infinity))
            {isWater[i][j]=Math.min(up+1, left+1)}
        }
    }
    for(let i=isWater.length-1; i>=0; i--)
    {
        for(let j=isWater[0].length-1; j>=0; j--)
        {
            let [up, down, left, right]=[i-1>=0?isWater[i-1][j]:Infinity, (i+1<=isWater.length-1)?isWater[i+1][j]:Infinity,
                                         j-1>=0?isWater[i][j-1]:Infinity, (j+1<=isWater[0].length-1)?isWater[i][j+1]:Infinity]
            if(isWater[i][j])
            {isWater[i][j]=Math.min(up+1, left+1,right+1, down+1)}
        }
    }
    return isWater
};
console.log(highestPeak([[0,0,0,0,0,0,1,0],[0,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0],[0,0,1,0,0,0,0,0]]));
//console.log(highestPeak([[0, 1], [0, 0]]));