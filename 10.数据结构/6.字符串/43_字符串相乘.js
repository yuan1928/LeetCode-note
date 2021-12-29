var multiply = function(num1, num2) {
    var result=Array(num1.length+num2.length).fill(0)
    num1=num1.split("").map((v,k)=>Number(v))
    num2=num2.split("").map((v,k)=>Number(v))

    for(var i of num1.keys())
    {
        for(var j of num2.keys())
        {
            result[result.length-1-i-j]+=num1[num1.length-1-i]*num2[num2.length-1-j]
        }
    }
    //console.log(result);

    for(var i of result.keys())
    {
        if(result[result.length-1-i]>=10)
        {
            result[result.length-1-i-1]+=Math.floor(result[result.length-1-i]/10)
            result[result.length-1-i]=result[result.length-1-i]%10
        }
    }


    while (result[0]===0 && result.length>1)
    {result=result.slice(1)}
    result=result.join().replace(/,/g,"")

    return result
};
console.log(multiply("123", "456"));