var letterCombinations = function(digits) {
    var table={"2":"abc","3":"dce","4":"ghi","5":"jkl","6":"mno","7":"pqrs","8":"tuv","9":"wxyz"}
    var result=[]
    var backTrack=function (before,current){
        if(current.length===0)
        {
            result.push(before)
            return
        }
        else
        {
            for(var digit of table[current[0]].split(""))
            {
                backTrack(before+digit,current.slice(1))
                //console.log(before,current,digit,before+digit,current.slice(1))
                //console.log("-------------------");
            }
        }
    }

    backTrack("",digits)
    return result
};
console.log(letterCombinations("23"));