//观察可发现当每段绳长相等或近乎相等时，乘积在该分割段数下达到最大
//长为n的绳子可能的段数有n-1种(2段~n段),其中n段时乘积为1
//按照均值最优原则，m段时，设假均值为ave=Math.floor(n/m)，则有n%m段绳子长为ave，(m-n%m)段绳子长为ave，此时乘积为(ave+1)^(n%m)+ave^(m-n%m)
//尝试每种段数，得到最大乘积
var cuttingRope1 = function(n) {
    let res=1//分为长为1的n段
    for(let m=2;m<=n-1;m++)
    {
        let cur=Math.pow(Math.floor(n/m)+1,n%m)*Math.pow(Math.floor(n/m),m-n%m)
        if(cur>res){res=cur}
    }
    return res
};
//console.log(cuttingRope(7));

//官方题解：通过数学推导，可知每段绳长相等或近乎相等时乘积最大，且每段绳长等于3时最优
//->最优分法：能分出长为3的绳子就分，如果不能则分出长为2的绳子，再不能就分出长为1的绳子
//->n>=4：n%3=0：可分为n/3段长为3的绳子；
//        n%3=1：可分出Math.floor(n/3)段长为3的绳子，1段长为1的绳子，但2比1更接近3，因此把最后长为3、1两段转换为2、2
//        n%3=2：可分出Math.floor(n/3)段长为3的绳子，1段长为2的绳子
//  n=2，最优解为1
//  n=3，最优解为2
var cuttingRope = function(n) {
    if(n===2)return 1
    if(n===3)return 2

    if(n%3===0) return Math.pow(3,n/3)
    else if(n%3===1){return Math.pow(3,Math.floor(n/3)-1)*4}
    else if(n%3===2){return Math.pow(3,Math.floor(n/3))*2}
};
//剪绳子II
//算最大乘积与上一题相同，本题难点在于大数求余
//当数值超过32位时，此时存储的是溢出之后的值，对其直接%会得出错误解
//循环取余->求大数(X^n)%a等价于:
//x=1
//while(n>0)
//{
//    x=*x%a
//    n-=1
// }
var cuttingRopeII = function(n) {
    if(n===2)return 1
    if(n===3)return 2

    let remain={"0":[1,n/3],"1":[4,Math.floor(n/3)-1],"2":[2,Math.floor(n/3)]}
    let [res,cycle]=remain[n%3]
    while (cycle>0)
    {
        res=(res*3)%(Math.pow(10,9)+7)
        cycle-=1
    }
    return res
};
console.log(cuttingRope(120));