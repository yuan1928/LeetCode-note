var compareVersion = function(version1, version2) {
    if(version1.length===0 && version2.length===0)return 0

    let left1=0
    let right1=1
    let left2=0
    let right2=1

    while (version1.length!==0 && left1<right1 && right1<=version1.length-1 && version1[right1]!==".")
    {
        if(version1[left1]==="0"){left1+=1}
        right1+=1
    }
    while (version2.length!==0 && left2<right2 && right2<=version2.length-1 && version2[right2]!==".")
    {
        if(version2[left2]==="0"){left2+=1}
        right2+=1
    }

    let num1=(version1.length===0)?0:Number(version1.slice(left1,right1))
    let num2=(version2.length===0)?0:Number(version2.slice(left2,right2))
    if(num1===num2)
    {return compareVersion((right1<version1.length-1)?version1.slice(right1+1):"",
        (right2<version2.length-1)?version2.slice(right2+1):"")}
    else {return (num1>num2)?1:-1}
};
console.log(compareVersion("1.1", "1.000000000000000000000010"))