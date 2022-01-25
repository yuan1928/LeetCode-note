var numberOfMatches = function(n) {
    let res=0
    while (n>1)
    {
        if(n%2===0)
        {
            res+=(n/2)
            n=n/2
        }
        else
        {
            res+=((n-1)/2)
            n=1+((n-1)/2)
        }
    }
    return res
};
console.log(numberOfMatches(7));
console.log(numberOfMatches(14));