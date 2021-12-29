//左前缀积数组：a的前缀积数组
//右前缀积数组：a reverse之后的前缀积数组
//如：对于a=[1,2,3,4,5]->左前缀积数组[1,2,6,24,120]，右前缀积数组[5,20,60,120,120]
//乘积数组[i]=左前缀积数组[i-1]*右前缀积数组[len-1-(i-1)]
var constructArr = function(a) {
    //let reverseA=a.reverse()
    let reverseA=a.slice()
    reverseA.reverse()
    for(let i=1; i<a.length; i++)
    {
        a[i]*=a[i-1]
        reverseA[i]*=reverseA[i-1]
    }
    let res=Array(a.length)
    for(let i=0; i<res.length; i++)
    {res[i]=((i-1)>=0?a[i-1]:1)*((res.length-2-i>=0)?reverseA[res.length-2-i]:1)}
    return res
};
console.log(constructArr([1, 2, 3, 4, 5]));