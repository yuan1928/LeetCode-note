var fullJustify = function(words, maxWidth) {
    let res=[""]
    let pos=0
    let lineCount=[0]
    for(let i of words.keys())
    {
        if(i!==words.length-1 && res[pos].length+words[i].length+1<=maxWidth)
        {
            res[pos]+=words[i]+" "
            lineCount[pos]+=1
        }
        else if(i!==words.length-1 && res[pos].length+words[i].length===maxWidth)
        {
            res[pos]+=words[i]
            lineCount[pos]+=1
            pos+=1
            res[pos]=""
            lineCount[pos]=0
        }
        else if(i!==words.length-1 && res[pos].length+words[i].length+1>maxWidth)
        {
            pos+=1
            res[pos]=words[i]+" "
            lineCount[pos]=1
            res[pos-1]=res[pos-1].slice(0,res[pos-1].length-1)
        }
        else if(i===words.length-1 && res[pos].length+words[i].length<=maxWidth)
        {
            res[pos]+=words[i]
            lineCount[pos]+=1
        }
        else if(i===words.length-1 && res[pos].length+words[i].length>maxWidth)
        {
            pos+=1
            res[pos]=words[i]
            lineCount[pos]=1
            res[pos-1]=res[pos-1].slice(0,res[pos-1].length-1)
        }
    }

    for(let i of res.keys())
    {
        if(i!==res.length-1 && lineCount[i]>1 && res[i].length<maxWidth)
        {
            let fill
            if(Math.floor((maxWidth-res[i].length+lineCount[i]-1)/(lineCount[i]-1))>=1)
            {
                fill=Array(Math.floor((maxWidth-res[i].length+lineCount[i]-1)/(lineCount[i]-1))).fill(" ").join().replace(/,/g,"")
                console.log(fill.length);
                res[i]=res[i].replace(/ /g,fill)
            }
            let restFill=maxWidth-res[i].length
            let S=""
            for(let j of Array(res[i].length).keys())
            {
                if(res[i][j]===" " && res[i][j+1]!==" " && restFill>0)
                {
                    S+=res[i][j]+' '
                    restFill-=1
                }
                else {S+=res[i][j]}
            }
            res[i]=S
        }
        else if(i===res.length-1 || lineCount[i]===1)
        {
            let fill=Array(maxWidth-res[i].length).fill(" ").join().replace(/,/g,"")
            res[i]=res[i].padEnd(res[i].length+fill.length,fill)
        }
    }

    return res
    return {res,lineCount}

};
words1 = ["This", "is", "an", "example", "of", "text", "justification."]
maxWidth1 = 16
words2 = ["What","must","be","acknowledgment","shall","be"]
maxWidth2 = 16
words3 = ["Science","is","what","we","understand","well","enough","to","explain",
    "to","a","computer.","Art","is","everything","else","we","do"]
maxWidth3 = 20
let res=fullJustify(words2, maxWidth2)
console.log(res);
/*for(let line of res)
{console.log(line);}*/