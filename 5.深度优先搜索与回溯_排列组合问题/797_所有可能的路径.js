//有向无环图->不存在死循环的问题
var allPathsSourceTarget = function(graph) {
    let paths=[]
    let BFS=function (node,path){
        for(let n of graph[node])
        {
            if(n===graph.length-1)
            {
                let newPath=path.slice()
                newPath.push(n)
                paths.push(newPath)
            }
            else
            {
                let newPath=path.slice()
                newPath.push(n)
                BFS(n,newPath)
            }
        }
    }

    BFS(0,[0])
    return paths
};
console.log(allPathsSourceTarget([[1,3],[2],[3],[]]));