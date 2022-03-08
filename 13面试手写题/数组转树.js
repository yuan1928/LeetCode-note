const arrayToTree=function (arr){
    let res
    const memo={}
    for(let node of arr)
    {memo[node.id]={id: node.id, val: node.val, children: []}}
    for(let node of arr)
    {
        if(node.parentId===null){res=memo[node.id]}
        else {memo[node.parentId].children.push(memo[node.id])}
    }
    return res.children
}
console.log(arrayToTree([
    {
        id: 1, val: '学校', parentId: null
    }, {
        id: 2, val: '班级1', parentId: 1
    }, {
        id: 3, val: '班级2', parentId: 1
    }, {
        id: 4, val: '学生1', parentId: 2
    }, {
        id: 5, val: '学生2', parentId: 2
    }, {
        id: 6, val: '学生3', parentId: 3
    },
]));