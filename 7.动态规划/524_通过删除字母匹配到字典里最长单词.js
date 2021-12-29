/*
var findLongestWord = function(s, dictionary) {
    let dict={}
    for(let i of Array(s.length).keys())
    {
        if(dict[s[i]]){dict[s[i]].push(i)}
        else {dict[s[i]]=[i]}
    }

    let res=""
    dictionary=dictionary.sort()
    for(let word of dictionary)
    {
        if(word.length<=res.length)continue

        let dictCopy={}
        for(let c in dict)
        {dictCopy[c]=dict[c].slice()}

        let isSub=true
        let last=-1
        for(let c of word)
        {
            if(!dictCopy[c] || dictCopy[c].length===0 || dictCopy[c][dictCopy[c].length-1]<last)
            {
                isSub=false
                break
            }
            for(let i of dictCopy[c].keys())
            {
                if(dictCopy[c][i]>last)
                {
                    last=dictCopy[c][i]
                    dictCopy[c].splice(i,1)
                    break
                }
            }
        }
        if(isSub) {res=word}
    }

    return res
};
*/

var findLongestWord = function(s, dictionary){
    let dp=Array(s.length)//dp[i]是一个对象，记录s[i]后的字符在s中第一次出现的索引，键是字符，值是相应的索引
    dp[dp.length-1]={}
    for(let i of dp.keys())
    {
        if(i===0)continue

        dp[dp.length-1-i]={}
        for(let c in dp[dp.length-1-i+1])
        {dp[dp.length-1-i][c]=dp[dp.length-1-i+1][c]}
        dp[dp.length-1-i][s[dp.length-1-i+1]]=dp.length-1-i+1
    }

    dictionary=dictionary.sort()//按字典序排序
    let res=""
    for(let word of dictionary)
    {
        if(word.length<=res.length)continue//如果当前word长度<=res，由于其长度和字典序至少有一项不如当前res，故而即使其为s的子串也不能成为新的res

        let pointerW=0
        let pointerS=0
        let isSub=true
        while (pointerW<word.length-1 && pointerS<=s.length-1)
        {
            if(word[pointerW]===s[pointerS])//当前字符匹配上
            {
                pointerW+=1//匹配word下一个字符
                pointerS=dp[pointerS][word[pointerW]]//pointerS更新为能匹配上word下一个字符的索引
            }
            else {pointerS=dp[pointerS][word[pointerW]]}//当前字符匹配不上->pointerS更新为能匹配上word当前字符的索引

            if(pointerS===undefined)
            {
                isSub=false
                break
            }
        }
        if(pointerW===word.length-1 && isSub)
        {res=word}
    }

    return res
}
let s = "abpcplea"
let dictionary = ["ale","apple","monkey","plea"]
let dictionary1 = ["a","b","c","p"]
let s2="abce"
let dictionary2=["abe","abc"]
let s3="bab"
let dictionary3=["ba","ab","a","b"]
let s4="okbmfyugqqongobwofraotanviqjraaktmmwyxzdnnwwaqsnvfxwngglybtiqwblprgvbgmolotnppzbovnstxmcmocixresdpojmntcdkyjzgbhhigkiyatrgzayivjyqiopvvdftkbsgwgnidsecvydvltaxxywydawrsseyolixznuyhjolngdsmjhepregixtklanjjggzssrbtmhhpamcfeghgssmrjrpelabojfhkdfvscjwhqxubwrhryqmtkiksljezeembngdjyhgmdzahxvvpkqwvhkqlensuxbrcdctqojqnlogjbpovdsbvurwcoehtmtkwxswrwhszuyesdqspnwqxlmjxrbdqbnbbyxhhlabxrdjxtjgpugojsexmrhrfzryapdzglalqzuzfpxeaemjkyfhpbnmdxjtxnxyjecfsapcjyglmtivnsfalpxzdkylgcixjljaqjwminyaodeekpzzpchhceguzayeul"
let  dictionary4=["mfuraildmrjhdjtctdxejgdurr","ecirmvkdovensp"]
console.log(findLongestWord(s4, dictionary4));

