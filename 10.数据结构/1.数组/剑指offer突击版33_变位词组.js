/*var groupAnagrams = function(strs) {
    const isAnagram=function (str1,str2){
        for(let char in str1)
        {if(str1[char]!==str2[char])return false}
        return true
    }

    let res=[]
    let mask=[]
    let str2
    for(let i of strs.keys())
    {
        word=strs[i]
        str2={len:word.length}
        for(let char of word)
        {str2[char]=(str2[char]===undefined)?1:(str2[char]+1)}

        if(i===0)
        {
            res.push([word])
            mask.push(str2)
            continue
        }

        for(let i of mask.keys())
        {
            if(isAnagram(mask[i],str2))
            {
                res[i].push(word)
                break
            }
            if(i===mask.length-1)
            {
                res.push([word])
                mask.push(str2)
                break
            }
        }
    }
    return res
};*/

var groupAnagrams = function(strs) {
    const dict=
    {
        'a':101,"b":2,"c":3,"d":5,"e":7,"f":11,"g":13,"h":17,"i":19,"j":23,"k":29,"l":31,"m":37,"n":41,
        'o':43,"p":47,"q":91,'r':53,"s":59,"t":61,"u":67,"v":71,'w':73,'x':79,'y':83,'z':89
    }

    const memo={}
    let cur
    for(let word of strs)
    {
        cur=1
        for(let char of word) {cur*=dict[char]}

        if(memo[cur]!==undefined){memo[cur].push(word)}
        else {memo[cur]=[word]}
    }

    const res=[]
    for(let group in memo)
    {res.push(memo[group])}
    return res
}
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));