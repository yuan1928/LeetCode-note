var highestPeak = function(isWater) {
    for(let i=0; i<=isWater.length-1; i++)
    {
        for(let j=0; j<=isWater[0].length-1; j++)
        {isWater[i][j]=isWater[i][j]?0:1}
    }

    let directions
    for(let i=0; i<=isWater.length-1; i++)
    {
        for(let j=0; j<=isWater[0].length-1; j++)
        {
            directions=[(i-1>=0)?isWater[i-1][j]:Infinity, (i+1<=isWater.length-1)?isWater[i+1][j]:Infinity,
                        (j-1>=0)?isWater[i][j-1]:Infinity, (j+1<=isWater[0].length-1)?isWater[i][j+1]:Infinity]
            if(isWater[i][j])
            {isWater[i][j]=Math.min(...directions.map(height=>(height+1)))}
        }
    }
    return isWater
};
console.log(highestPeak([[0,0,1],[1,0,0],[0,0,0]]));