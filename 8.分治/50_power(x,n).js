//快速幂算法:x**n=[x**(n/2)]*[x**(n/2)]=[x**(n/4)]*[x**(n/4)]*[x**(n/4)]*[x**(n/4)]=.......
//本题用递归实现

var myPow = function(x, n) {
    let backtrack=function (x,n){
            if(n===1){return x}

            if(n%2===0)
            {
                let lastPower=backtrack(x,n/2)
                return lastPower*lastPower
            }
            else
            {
                let lastPower=backtrack(x,(n-1)/2)
                return lastPower*lastPower*x
            }
        }

    if(n===0){return 1}
    else if (n>0){return backtrack(x,n)}
    else {return 1/backtrack(x,-n)}
};
console.log(myPow(2.0000, -2));