var minJumps = function(arr) {
    const memo={}//memo[value]=[i,j,k,...] arr[i]=arr[j]=arr[k]=value
    for(let i of arr.keys())
    {
        if(memo[arr[i]]!==undefined){memo[arr[i]].push(i)}
        else {memo[arr[i]]=[i]}
    }
    for(let value in memo)//arr.slice(i,j)=[v,v,v,...] -> reset:memo[v]=[i,j]
    {
        if(memo[value][memo[value].length-1]-memo[value][0]+1===memo[value].length)
        {memo[value]=[memo[value][memo[value].length-1],memo[value][0]]}
    }

    let res=0
    const BFS=function (pos,count,visited){
        if(!pos || pos[0]===arr.length-1)return

        let newPos=[]
        for(let i=pos.length-1; i>=0; i--)
        {
            let idx=pos[i]
            if(idx+1===arr.length-1 || memo[arr[idx]].indexOf(arr.length-1)!==-1)
            {
                res=count+1
                return
            }

            for(let j of [...memo[arr[idx]],idx-1,idx+1])
            {
                if(j!==idx && !visited[j] && j>=0 && j<arr.length-1)
                {
                    newPos.push(j)
                    visited[j]=true
                }
            }
        }
        if(newPos.indexOf(arr.length-2)!==-1){res=count+2;return}
        BFS(newPos,count+1,visited)
    }
    BFS([0],0,{0:true})
    return res
};
console.log(minJumps([100, -23, -23, 404, 100, 23, 23, 23, 3, 404]));
console.log(minJumps([7]));
console.log(minJumps([7, 6, 9, 6, 9, 6, 9, 7]));
console.log(minJumps([6, 1, 9]));
console.log(minJumps([11, 22, 7, 7, 7, 7, 7, 7, 7, 22, 13]));