const dict={10:"a", 11:"b", 12:"c", 13:"d", 14:"e", 15:"f"}
const binary=function (num){
    let res=""
    while (Math.floor(num/2))
    {
        res=res.padStart(res.length+1, String(num%2))
        num=Math.floor(num/2)
    }
    res=res.padStart(res.length+1, String(num%2))
    res=res.padStart(32,"0")
    return res
}
const hex=function (num){
    const slices=[]
    for(let i=0; i<32; i+=4)
    {slices.push(num.slice(i,i+4))}
    //console.log(slices);

    let res=""
    for(let slice of slices)
    {
        let sum=0
        for(let i=0; i<4; i++)
        {sum+=Number(slice[i])*Math.pow(2, 3-i)}
        res=(sum<10)?res.padEnd(res.length+1, String(sum)):res.padEnd(res.length+1, dict[sum])
    }

    while (res[0]==="0")
    {res=res.slice(1)}
    return res
}
const negate=function (num){
    let res=""
    for(let i=0; i<32; i++)
    {res=res.padEnd(res.length+1, (num[i]==="0")?"1":"0")}
    return res
}
const addOne=function (num){
    let res=""
    const one="1".padStart(32,"0")
    let carry=0
    for(let i=31; i>=0; i--)
    {
        let sum=Number(num[i])+Number(one[i])
        res=res.padStart(res.length+1, (sum+carry>=2)?"0":String(sum+carry))
        carry=Math.floor((sum+carry)/2)
    }
    return res
}
var toHex = function(num) {
    if(num===0)return "0"
    else if(num>0)return hex(binary(num))
    else {return hex(addOne(negate(binary(-num))))}
}
console.log(toHex(-1));

/*
var toHex = function(num) {
    if (num === 0) {
        return "0";
    }
    const sb = [];
    for (let i = 7; i >= 0; i --) {
        const val = (num >> (4 * i)) & 0xf;
        if (sb.length > 0 || val > 0) //首位非"0"
        {
            const digit = val < 10 ? String.fromCharCode('0'.charCodeAt() + val) : String.fromCharCode('a'.charCodeAt() + val - 10);
            sb.push(digit);
        }
    }
    return sb.join('');
}
 */