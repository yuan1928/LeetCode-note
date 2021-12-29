let Trie=function (){
    this.children={}
}
Trie.prototype.insert=function (word){
    let child=this.children
    for(let c of word)
    {
        if(!child[c])
        {child[c]={}}
        child=child[c]
    }
    child.val=word
}

var longestWord = function(words) {
    let trie=new Trie()
    for(let word of words)
    {trie.insert(word)}

    let nodes=[trie.children]
    let len=1
    let isFind=false
    while (true)//BFS
    {
        let newNodes=[]
        for(let node of nodes)
        {
            for(let child in node)
            {
                if(child!=="val" && node[child].val && node[child].val.length===len)
                {newNodes.push(node[child])}
            }
        }
        if(newNodes.length>0)
        {
            isFind=true
            nodes=newNodes
            len+=1
        }
        else {break}
    }

    if(!isFind)return ""
    else
    {
        nodes=nodes.map((v,k)=>(v.val))
        nodes.sort()
        return nodes[0]
    }
};
//console.log(longestWord(["a", "banana", "app", "appl", "ap", "apply", "apple"]));
//console.log(longestWord(["w", "wo", "wor", "worl", "world"]));
console.log(longestWord(["yo", "ew", "fc", "zrc", "yodn", "fcm", "qm", "qmo", "fcmz", "z", "ewq", "yod", "ewqz", "y"]));