function TreeNode(val, left, right)
{
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}


var postorderTraversal1 = function(root) {
    if(!root) return []

    let res=[]
    let BFS=function (node){
        if(node.left){BFS(node.left)}
        if(node.right){BFS(node.right)}
        res.push(node.val)
    }

    BFS(root)
    return res
};
//前序：中->左->右  -> 中->右->左  ->后序：reverse(中->右->左)=左->右->中
var postorderTraversal2 = function(root){
    if(!root) return []

    let res=[]
    let stack=[root]
    while (stack.length)
    {
        let node=stack.pop()
        res.push(node.val)
        if(node.left){stack.push(node.left)}
        if(node.right){stack.push(node.right)}
    }
    res.reverse()
    return res
}
let obj=new TreeNode(1,null,new TreeNode(2,new TreeNode(3)))
console.log(postorderTraversal2(obj));