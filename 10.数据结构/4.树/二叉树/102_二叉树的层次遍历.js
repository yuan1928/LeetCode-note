function TreeNode(val, left, right)
{
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/*迭代实现BFS
var levelOrder = function(root) {
    if(root===null)return []

    let cur=[root]
    let next=[]
    let res=[[]]
    while (cur.length!==0)
    {
        for(let node of cur)
        {
            if(node.left){next.push(node.left)}
            if(node.right){next.push(node.right)}
            res[res.length-1].push(node.val)
        }
        cur=next
        next=[]
        if(cur.length!==0)
        {res.push([])}
    }

    return res
};*/
//递归实现BFS
var levelOrder = function(root){
    if(root===null)return []

    let res=[[]]
    let BFS=function (cur){
        let nextLayer=[]
        for(let node of cur)
        {
            res[res.length-1].push(node.val)
            if(node.left){nextLayer.push(node.left)}
            if(node.right){nextLayer.push(node.right)}
        }
        if(nextLayer.length>0)
        {
            res.push([])
            BFS(nextLayer)
        }
    }

    BFS([root])
    return res
}
let obj=new TreeNode(3,new TreeNode(9),new TreeNode(20,new TreeNode(15),new TreeNode(7)))//3 9 20 15 7
let obj1=new TreeNode(1,new TreeNode(2, new TreeNode(3,new TreeNode(4))))//1 2 3 4
//console.log(levelOrder(obj));
//console.log(null===null)

//迭代
let levelOrder1=function (root) {
    if (!root) return []

    let res = []
    let queue = [root]
    while (queue.length)
    {
        let node = queue.shift()
        res.push(node.val)
        if (node.left) {queue.push(node.left)}
        if (node.right) {queue.push(node.right)}
    }
    return res
}
console.log(levelOrder1(obj1));
















