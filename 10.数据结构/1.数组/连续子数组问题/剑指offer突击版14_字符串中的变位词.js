var checkInclusion = function(s1, s2) {
    if(s1.length===1)return (s2.indexOf(s1)!==-1)

    const dict=Array(26).fill(0)
    for(let char of s1)
    {dict[char.charCodeAt(0)-97]+=1}

    let cur
    for(let i=0; i<s2.length; i++)
    {
        if(dict[s2[i].charCodeAt(0)-97])
        {
            cur=dict.slice()
            cur[s2[i].charCodeAt(0)-97]-=1
            for(let j=i+1; j<=i-1+s1.length; j++)
            {
                if(cur[s2[j].charCodeAt(0)-97])
                {
                    if(j===i-1+s1.length){return true}
                    cur[s2[j].charCodeAt(0)-97]-=1
                }
                else {break}
            }
        }
    }
    return false
};

var checkInclusionWindow = function(s1, s2) {
    const n = s1.length, m = s2.length;
    if (n > m) {
        return false;
    }
    const cnt = new Array(26).fill(0);
    for (let i = 0; i < n; ++i) {
        --cnt[s1[i].charCodeAt() - 'a'.charCodeAt()];
    }
    let left = 0;
    for (let right = 0; right < m; ++right) {
        const x = s2[right].charCodeAt() - 'a'.charCodeAt();
        ++cnt[x];
        while (cnt[x] > 0) {//x多余->收缩窗口左沿
            --cnt[s2[left].charCodeAt() - 'a'.charCodeAt()];//之前加上的，现在减去
            ++left;
        }
        if (right - left + 1 === n) {
            return true;
        }
    }
    return false;
};

//console.log(checkInclusion(s1 = "ab", s2 = "eidbaooo"));
//console.log(checkInclusion(s1 = "ab", s2 = "eidboaoo"));
console.log(checkInclusion(s1 = "adc", s2 = "dcda"));