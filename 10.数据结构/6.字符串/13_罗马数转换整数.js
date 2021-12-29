var romanToInt = function(s) {
    var result=0
    var flag=true//因为通过遍历每个字符进行识别，当当前识别的字符串包含两个字符时，下一个字符应该跳过识别，此行为通过flag控制
    for(var i of Array(s.length).keys())
    {
        if(flag)
        {
            if(s[i]==="M"){result+=1000}
            else if(s.slice(i,i+2)==="CM"){result+=900;flag=false}
            else if(s.slice(i,i+2)==="CD"){result+=400;flag=false}
            else if(s[i]==='D'){result+=500}
            else if(s[i]==="C"){result+=100}
            else if(s.slice(i,i+2)==="XC"){result+=90;flag=false}
            else if(s.slice(i,i+2)==="XL"){result+=40;flag=false}
            else if(s[i]==="L"){result+=50}
            else if(s[i]==='X'){result+=10}
            else if(s.slice(i,i+2)==='IX'){result+=9;flag=false}
            else if(s.slice(i,i+2)==="IV"){result+=4;flag=false}
            else if(s[i]==="V"){result+=5}
            else if(s[i]==="I"){result+=1}
        }
        else(flag=true)
    }
    return result
};