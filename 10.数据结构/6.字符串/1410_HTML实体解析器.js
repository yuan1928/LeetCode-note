/*var entityParser = function(text) {
    let dict={"&quot;":"\\\"","&apos;":"'","&amp;":"&","&gt;":">","&lt;":"<","&frasl;":"/"}
    let res=""
    let cur=0
    while (cur<=text.length-1)
    {
        if(text[cur]!=="&")
        {
            res+=text[cur]
            cur+=1
        }
        else
        {
            let end=cur+1
            while (end-cur+1<=7)
            {
                if(text[end]===";")break
                else {end+=1}
            }
            if(dict[text.slice(cur,end+1)])
            {
                res+=dict[text.slice(cur,end+1)]
                cur=end+1
            }
            else
            {
                res+=text[cur]
                cur+=1
            }
        }
    }
    return res
};*/
//正则匹配
var entityParser = function(text) {
    let map = {
        '&quot;': '/"',
        '&apos;':"'",
        '&amp;':'&·',//&amp;amp->&amp->& 为了防止多次匹配、第一次匹配结果暂时设置为&.而不是&
        '&gt;':'>',
        '&lt;':'<',
        '&frasl;':'/'
    }

    for (let key in map) {
        let reg = new RegExp(key, 'g')
        text = text.replace(reg, map[key])
    }
    // 将·去除去除
    return text.replace(/·/g, '')
};

console.log(entityParser("and I quote: &quot;...&quot;"));