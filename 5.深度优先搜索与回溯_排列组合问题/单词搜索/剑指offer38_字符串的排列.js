var permutation = function(s) {
    let res=[]
    const DFS=function (cur,choice){
        if(choice.length===0)
        {
            res.push(cur)
            return
        }

        for(let i of choice.keys())
        {
            if(choice.indexOf(choice[i])<i){continue}
            let newChoice=choice.slice()
            newChoice.splice(i,1)
            DFS(cur+choice[i],newChoice)
        }
    }
    DFS("",s.split(""))
    return res
};
console.log(permutation("abc"));
console.log(permutation("aab"));