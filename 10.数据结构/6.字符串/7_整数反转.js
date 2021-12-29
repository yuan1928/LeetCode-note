var reverse = function(x) {
    var flag=""
    var mirror=String(x)
    if(x<0)
    {
        flag="-"
        mirror=String(x).slice(1)
    }
    mirror=mirror.split("").reverse().join().replace(/,/g,"")
    //注意：reverse是数组的方法，且通过数组join得到的字符串一般要用replace去除逗号
    for(var item of mirror)
    {
        if(item===0)
        {
            mirror=mirror.replace(item,"")//replace第一个参数为字符串时，只能替换第一个匹配到的子串
        }
    }
    mirror=mirror.padStart(mirror.length+flag.length,flag)
    var result=(Number(mirror)>=-Math.pow(2,31))&&(Number(mirror)<=Math.pow(2,31)-1)?Number(mirror):0
    return result
};