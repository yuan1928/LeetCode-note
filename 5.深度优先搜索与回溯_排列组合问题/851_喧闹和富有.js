// 71/86
/*var loudAndRich = function(richer, quiet) {
    const memo=Array(quiet.length)
    const res=Array(quiet.length).fill(0).map((v,k)=>(k))
    for(let i of memo.keys()) {memo[i]=[]}//memo[i]=[j,k,....]->j、k、...都比i富有
    const isPoorer=function (poorer,poor,rich){
        let hasPoor=false
        for(let person of memo[poorer])
        {
            if(person===rich)return false
            if(person===poor)hasPoor=true
        }
        return hasPoor
    }
    const isRicher=function (richer,poor,rich){
        let hasRich=false
        for(let person of memo[rich])
        {if(person===richer)hasRich=true}
        return hasRich&&(memo[richer].indexOf(poor)===-1)
    }
    const DFS=function (rich,poor){
        memo[poor].push(rich)
        if(quiet[rich]<quiet[res[poor]]) {res[poor]=rich}
        for(let i=0; i<memo.length; i++)
        {
            if(i===poor || i===rich)continue
            if(isPoorer(i,poor,rich)) {DFS(rich,i)}
            if(isRicher(i,poor,rich)) {DFS(i,poor)}
        }
    }

    for(let [rich,poor] of richer)
    {DFS(rich,poor)}
    return res
};*/
var loudAndRich = function(richer, quiet) {
    const n = quiet.length;
    const g = new Array(n).fill(0);
    for (let i = 0; i < n; ++i) {
        g[i] = [];
    }//g[i]=[j,k,...]:j、k...比i富
    for (const r of richer) {
        g[r[1]].push(r[0]);
    }//根据richer更新g

    const ans = new Array(n).fill(-1);
    for (let i = 0; i < n; ++i) {
        dfs(i, quiet, g, ans);
    }
    return ans;
};

const dfs = (x, quiet, g, ans) => {
    if (ans[x] !== -1) {
        return;
    }
    ans[x] = x;//初始化x的ans:x肯定不比x穷
    for (const y of g[x]) {
        dfs(y, quiet, g, ans); //先更新比x富的y的ans[y]，再更新ans[x]
        if (quiet[ans[y]] < quiet[ans[x]]) {
            ans[x] = ans[y];//y>x -> ans[x]=min(y1,y2,...)
        }
    }
}


console.log(loudAndRich(richer = [[1, 0], [2, 1], [3, 1], [3, 7], [4, 3], [5, 3], [6, 3]], quiet = [3, 2, 5, 4, 6, 1, 7, 0]));
//dfs(1,...)->2、3比1富有->dfs(2和3,....)->dfs(2和3,...)时得到ans[3]=5,ans[2]=2->ans[1]=ans[3]=5
console.log(loudAndRich([], [0]));
console.log(loudAndRich([[0, 1], [1, 2]], [0, 1, 2]));