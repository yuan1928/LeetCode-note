/*const dict=Array(26)
for(let i of dict.keys())
{dict[i]=[]}

const nums=["zero","one","two","three","four","five","six","seven","eight","nine"]
for(let i=0; i<=9; i++)
{
    for(let char of nums[i])
    {
        //dict[i][char.charCodeAt(0)-97]+=1
        if(dict[char.charCodeAt(0)-97].indexOf(nums[i])===-1)
        {dict[char.charCodeAt(0)-97].push(nums[i])}
    }
}
for(let i=0; i<26; i++)
{
    if(dict[i].length)
    {console.log(String.fromCharCode(i+97),dict[i])}
}*/
//通过0~9单词词频统计可发现某些单词可通过一个标志字符确定其出现次数：
//g->eight  u->four w->two x->six z->zero
//某些字符在两个单词里都有出现，但以上单词确定后，该字符可唯一确定剩下单词出现次数：
//h->three(eight已确定) f->five(four已确定) s->seven(six已确定)
//现在只剩下one和nine未确定，由于已确认单词的字符已从统计表删去，故one和nine分别通过o和i确认即可
//也可以直接建立线性方程组(A:26*10,b:26*1)求解：[zero个数,one个数,...,nine个数]=A的逆*b
// zero中a的个数+one中a的个数+...+nine中a的个数=s中a的个数
// zero中b的个数+one中b的个数+...+nine中b的个数=s中b的个数
//...
// zero中z的个数+one中z的个数+...+nine中z的个数=s中z的个数
var originalDigits = function(s) {
    const dict=Array(26).fill(0)
    for(let char of s)
    {dict[char.charCodeAt(0)-97]+=1}

    const res=Array(10)
    const detect=function (identifier,num,word){
        let count=dict[identifier.charCodeAt(0)-97]
        if(count)
        {
            res[num]=count
            for(let char of word)
            {dict[char.charCodeAt(0)-97]-=count}
        }
    }
    detect("g",8,"eight")
    detect("u",4,"four")
    detect("w",2,"two")
    detect("x",6,"six")
    detect("z",0,"zero")
    detect("h",3,"three")
    detect("f",5,"five")
    detect("s",7,"seven")
    detect("o",1,"one")
    detect("i",9,"nine")

    let nums=""
    for(let i=0; i<10; i++)
    {
        while (res[i])
        {
            nums+=i
            res[i]-=1
        }
    }
    //console.log(nums);
    return nums
};
//console.log(originalDigits("owoztneoer"));
//console.log(originalDigits("fviefuro"));
console.log(originalDigits("egith"));