var MapSum = function() {
    this.tree={}
    this.preSum=0
};

MapSum.prototype.insert = function(key, val) {
    let cur=this.tree
    for(let char of key)
    {
        if(!cur[char]) {cur[char]={}}
        cur=cur[char]
    }
    cur.val=val
    //cur.done=true
};

MapSum.prototype.sum = function(prefix) {
    this.preSum=0
    let head=this.tree
    for(let char of prefix)
    {
        if(head[char]){head=head[char]}
        else {return 0}
    }
    this.DFS(head)
    return this.preSum
};

MapSum.prototype.DFS=function (cur){
    for(let branch in cur)
    {
        if(branch==="val"){this.preSum+=cur[branch]}
        else {this.DFS(cur[branch])}
    }
}

var obj = new MapSum()
obj.insert("aa",3)
console.log(obj.sum("a"));
obj.insert("aa", 2)
console.log(obj.sum("a"));
console.log(obj.sum("aa"));
obj.insert("aaa",3)
console.log(obj.sum("aaa"));
console.log(obj.sum("bbb"));
