function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var pathSum = function(root, target) {
    if(!root)return []

    let res=[]
    const DFS=function (node,path){
        if(!(node instanceof TreeNode) || (!node.left && !node.right))
        {
            if(path.reduce((a,b)=>(a+b))===target)
            {res.push(path)}
        }

        if(node.left)
        {
            let newPath=path.slice()
            newPath.push((node.left instanceof TreeNode)?node.left.val:node.left)
            DFS(node.left,newPath)
        }
        if(node.right)
        {
            let newPath=path.slice()
            newPath.push((node.right instanceof TreeNode)?node.right.val:node.right)
            DFS(node.right,newPath)
        }
    }
    DFS(root,[root.val])
    return res
};
const obj=new TreeNode(5, new TreeNode(4, new TreeNode(11,7,2), null), new TreeNode(8, 13, new TreeNode(4,5,1)))
console.log(pathSum(obj, 22));
console.log(pathSum(new TreeNode(1, 2, 3), 5));
console.log(pathSum(new TreeNode(1, 2, 3), 3));
console.log(pathSum(new TreeNode(1, 2), 0));