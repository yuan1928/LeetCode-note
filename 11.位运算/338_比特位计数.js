
//Brian Kernighan算法的原理是：对于任意整数x，令 x=x&(x−1)，该运算将x的二进制表示的最后一个1变成0。因此，对x重复该操作，直到x变成0，则操作次数即为x一比特数
var countBits = function(n) {
    const bits = new Array(n + 1).fill(0);
    for (let i = 0; i <= n; i++) {
        bits[i] = countOnes(i);
    }
    return bits
};

const countOnes = (x) => {
    let ones = 0;
    while (x > 0) {
        x &= (x - 1);
        ones++;
    }
    return ones;
}

//DP:
//对于正整数x，如果可以知道最大的正整数y使得y≤x且y是2的整数次幂，则令z=x-y有bits[x]=bits[z]+1。
//为了判断一个正整数是不是2的整数次幂，可以利用方法一中提到的按位与运算的性质。如果正整数y是2的整数次幂，则y的二进制表示中只有最高位是1，其余都是0->y&(y-1)=0。
var countBits_ = function(n) {
    const bits = new Array(n + 1).fill(0);
    let highBit = 0;
    for (let i = 1; i <= n; i++) {
        if ((i & (i - 1)) == 0) {
            highBit = i;
        }
        bits[i] = bits[i - highBit] + 1;
    }
    return bits;
};
/*
var countBits = function(n) {
    let N=0
    while (2**N<n)
    {N+=1}
    let res=Array(n+1)
    let backtrack=function (num,bits,degree){
        if(degree>N)return

        if(num+2**degree<=n)
        {
            res[num+2**degree]=bits+1
            backtrack(num+2**degree,bits+1,degree+1)
        }
        if(num<=n)
        {
            res[num]=bits
            backtrack(num,bits,degree+1)
        }
    }
    backtrack(0,0,0)
    return res
};
console.log(countBits(10));
 */

