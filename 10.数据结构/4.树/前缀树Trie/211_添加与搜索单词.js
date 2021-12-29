var WordDictionary = function() {
    this.tree={}
};
WordDictionary.prototype.addWord = function(word) {
    let cur=this.tree
    for(let i=0; i<word.length; i++)
    {
        if(!cur[word[i]]){cur[word[i]]={}}
        if(i===word.length-1){cur[word[i]].isDone=true}
        cur=cur[word[i]]
    }
};
WordDictionary.prototype.search = function(word) {
    return this.BFS(0,this.tree,word)
};
WordDictionary.prototype.BFS=function (cur,choice,word){
    if(word[cur]!==".")
    {
        if(!choice[word[cur]])return false
        else if(cur===word.length-1) {return (choice[word[cur]].isDone!==undefined)}
        else if(cur<word.length-1) {return this.BFS(cur+1,choice[word[cur]],word)}
    }
    else
    {
        if(Object.keys(choice).length===0) return false
        else if(cur===word.length-1)
        {
            for(let char in choice)
            {
                if(choice[char].isDone)
                {return true}
            }
            return false
        }
        else if(cur<word.length-1)
        {
            let isEnd=false
            for(let char in choice)
            {
                isEnd=this.BFS(cur+1,choice[char],word)
                if(isEnd)return true
            }
            return false
        }
    }
}
let wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
console.log(wordDictionary.search("pad"));// return False
console.log(wordDictionary.search("bad")); // return True
console.log(wordDictionary.search(".ad"));// return True
console.log(wordDictionary.search("b.."));// return True


