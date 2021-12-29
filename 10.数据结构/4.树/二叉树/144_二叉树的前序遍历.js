function TreeNode(val, left, right)
{
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
//递归实现前序遍历：根->左->右
var preorderTraversal1 = function(root) {
    let res=[]
    let BFS=function (node){
        if(node){res.push(node.val)} else{return}

        if(node.left){BFS(node.left)}
        if(node.right){BFS(node.right)}
    }
    BFS(root)
    return res
};
//利用栈来迭代实现前序遍历
var preorderTraversal2 = function(root){
    if(!root)return []

    let stack=[root]
    let res=[]
    while (stack.length>0)
    {
        let node=stack.pop()
        res.push(node.val)
        if(node.right){stack.push(node.right)}//栈后进先出、前序遍历先左后右->左节点后入栈、右节点先入栈
        if(node.left){stack.push(node.left)}
    }
    return res
}
let obj=new TreeNode(1,null,new TreeNode(2,null,new TreeNode(3)))
let obj1=new TreeNode(1)
let obj2=new TreeNode(1,null,new TreeNode(2))
//console.log(preorderTraversal(obj));
