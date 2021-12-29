var pacificAtlantic = function(heights) {
    let memo={}
    let ends=[]
    let exp=[]
    let shortcut=false
    let backtrack=function (row,col) {
        if(memo[row+"/"+col]===true) {shortcut=true;return}

        if(row===0 || row===heights.length-1 || col===0 || col===heights[0].length-1){ends.push([row,col])}
        if(!shortcut && row-1>=0 && heights[row-1][col]<=heights[row][col] && exp.indexOf((row-1)+"/"+col)===-1)
        {exp.push((row-1)+"/"+col);backtrack(row-1,col)}
        if(!shortcut && row+1<=heights.length-1 && heights[row+1][col]<=heights[row][col] && exp.indexOf((row+1)+"/"+col)===-1)
        {exp.push((row+1)+"/"+col);backtrack(row+1,col)}
        if(!shortcut && col-1>=0 && heights[row][col-1]<=heights[row][col] && exp.indexOf(row+"/"+(col-1))===-1)
        {exp.push(row+"/"+(col-1));backtrack(row,col-1)}
        if(!shortcut && col+1<=heights[0].length-1 && heights[row][col+1]<=heights[row][col] && exp.indexOf(row+"/"+(col+1))===-1)
        {exp.push(row+"/"+(col+1));backtrack(row,col+1)}
    }


    let result=[]
    for(let i of heights.keys())
    {
        for(let j of heights[0].keys())
        {
            ends=[]
            exp=[i+"/"+j]
            shortcut=false
            backtrack(i,j)
            if(shortcut)
            {
                memo[i+"/"+j]=true
                result.push([i,j])
            }
            else
            {
                let pacific=false
                let atlantic=false
                for (let end of ends)
                {
                    if(end[0]===0 || end[1]===0){pacific=true}
                    if(end[0]===heights.length-1 || end[1]===heights[0].length-1){atlantic=true}
                }
                if(pacific && atlantic)
                {
                    memo[i+"/"+j]=true
                    result.push([i,j])
                }
            }
        }
    }

    return result
};
let heights=[
    [1,2,2,3,5],
    [3,2,3,4,4],
    [2,4,5,3,1],
    [6,7,1,4,5],
    [5,1,1,2,4]]
console.log(pacificAtlantic(heights));