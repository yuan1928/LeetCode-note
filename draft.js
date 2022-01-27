var countValidWords = function(sentence) {
    let res=0
    const dict={}
    for(let i=97; i<=122; i++) {dict[String.fromCharCode(i)]=true}
    const isValid=function (start,end){
        let cur
        let char1=false
        let char2=false
        for(let i=start; i<=end; i++)
        {
            cur=sentence[i]
            if(cur.charCodeAt(0)>=48 && cur.charCodeAt(0)<=57)return

            if(cur==="-")
            {
                if(char1 || !((sentence[i-1] in dict) && (sentence[i+1] in dict)))return
                else {char1=true}
            }

            if(cur==="!" || cur==="." || cur===",")
            {
                if(char2 || i!==end)return
                else {char2=true}
            }
        }
        res+=1
    }

    let s
    for(let i=0; i<=sentence.length-1; i++)
    {
        if((i===0 || sentence[i-1]===" ") && sentence[i]!==" ") {s=i}
        if((i===sentence.length-1 || sentence[i+1]===" ") && sentence[i]!==" ") {isValid(s,i)}
    }
    return res
};
console.log(countValidWords("alice   is a  girl"));
console.log(countValidWords("cat and  dog"));
console.log(countValidWords("!this  1-s b8d!"));
console.log(countValidWords("alice and  bob are playing stone-game10"));
console.log(countValidWords("he bought 2 pencils, 3 erasers, and 1  pencil-sharpener."));