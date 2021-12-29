function TreeNode(val, left, right)
{
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
//递归
var inorderTraversal1 = function(root) {
    if(!root)return []

    let res=[]
    let BFS=function (node){
        if(node.left){BFS(node.left)}
        res.push(node.val)
        if(node.right){BFS(node.right)}
    }

    BFS(root)
    return res
};
//迭代
var inorderTraversal2 = function(root){
    let stack=[]
    let res=[]
    while (root || stack.length>0)
    {
        while (root)
        {
            stack.push(root)
            root=root.left
        }
        root=stack.pop()
        res.push(root.val)
        root=root.right
    }
    return res
}
let obj=new TreeNode(1,null,new TreeNode(2,new TreeNode(3)))
let obj1=new TreeNode(1)
let obj2=new TreeNode(1,null,new TreeNode(2))
let obj3=new TreeNode(1,new TreeNode(2))
//console.log(inorderTraversal(obj3));