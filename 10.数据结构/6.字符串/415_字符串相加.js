var addStrings = function(num1, num2) {
    num1=num1.split("").map((v,k)=>Number(v))
    num2=num2.split("").map((v,k)=>Number(v))
    var result=(num1.length>num2.length)?num1.slice():num2.slice()
    result.splice(0,0,0)

    for(var i of Array(Math.min(num1.length,num2.length)).keys())
    {
        result[result.length-1-i]=num1[num1.length-1-i]+num2[num2.length-1-i]
    }
    for(var i of result.keys())
    {
        if(result[result.length-1-i]>=10)
        {
            result[result.length-1-i-1]+=Math.floor(result[result.length-1-i]/10)//先进位，否则当前位已经改写成余数，进的位数会错
            result[result.length-1-i]=result[result.length-1-i]%10
        }
    }

    while (result[0]===0 && result.length>1)
    {result.splice(0,1)}
    result=result.join().replace(/,/g,"")
    return result

};

console.log(addStrings("99", "1999"));