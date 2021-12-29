var checkValidString = function(s) {
    if(s[0]===")")return false

    let lefts=[]
    let stars=[]
    for(let i of Array(s.length).keys())
    {
        if(s[i]==="(") {lefts.push(i)}
        else if(s[i]==="*") {stars.push(i)}
        else if(s[i]===")" && lefts.length>0) {lefts.pop()}
        else if(s[i]===")" && lefts.length===0 && stars.length>0) {stars.pop()}
        else if(s[i]===")" && lefts.length===0 && stars.length===0) {return false}
    }

    let pointerL=0
    let pointerS=0
    while (pointerL<=lefts.length-1 && pointerS<=stars.length-1)
    {
        if(lefts[pointerL]<stars[pointerS])
        {
            pointerL+=1
            pointerS+=1
        }
        else {pointerS+=1}
    }

    return pointerL===lefts.length
};
let s1="(((((*(()((((*((**(((()()*)()()()*((((**)())*)*)))))))(())(()))())((*()()(((()((()*(())*(()**)()(())"
let s2="()"
let s3="(*)"
let s4="(*))"
let s5="((((()(()()()*()(((((*)()*(**(())))))(())()())(((())())())))))))(((((())*)))()))(()((*()*(*)))(*)()"
console.log(checkValidString(s5));