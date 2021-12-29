var minArray = function(numbers) {
    let left=0
    let right=numbers.length-1
    while(left<right)
    {
        let mid=Math.floor((left+right)/2)
        if(numbers[mid]>numbers[right]){left=mid+1}
        else if(numbers[mid]<numbers[right]){right=mid}
        else {right-=1}
    }
    return numbers[left]
};
console.log(minArray([3, 4, 5, 1, 2,2,3]));