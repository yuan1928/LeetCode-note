var findRepeatedDnaSequences = function(s) {
    if(s.length<=10){return []}

    const map={"A":0, "C":1, "G":2, "T":3}//每个长度为10的子串可以用20bit的整数表示，整数最多有32位，故而不会溢出
    let init=0
    for(let i=0; i<=9; i++)
    {init=(init<<2)|map[s[i]]}//s.slice(0,10)的二进制序列

    let res=[]
    //let count={init:1} init默认为字符串->count={init:1}
    let count={}
    count[init]=1
    for(let i=1; i<=s.length-10; i++)
    {
        init=((init<<2)|map[s[i+9]])&((1<<20)-1)
        //原二进制序列左移两位，最低两位补0->新字符的两位二进制填入序列最低两位(|)->移除22bit最高两位(跟20位1序列与运算)
        if(count[init]){count[init]+=1}
        else {count[init]=1}
        if(count[init]===2){res.push(s.slice(i, i+10))}
    }

    return res
};
console.log(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"));
console.log(findRepeatedDnaSequences("AAAAAAAAAAAAA"));