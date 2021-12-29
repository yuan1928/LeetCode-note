function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var findTilt = function(root) {
    let res=0
    const DFS=function (cur){
        if(!(cur instanceof TreeNode) || (cur.left===null && cur.right===null))return

        if(cur.left)DFS(cur.left)
        if(cur.right)DFS(cur.right)
        let left=(cur.left instanceof TreeNode)?cur.left.val:cur.left//左子树节点和
        let right=(cur.right instanceof TreeNode)?cur.right.val:cur.right//右子树节点和
        res+=(Math.abs(left-right))
        cur.val+=(left+right)
    }
    DFS(root)
    return res
};
const obj1=new TreeNode(1,2,3)
const obj2=new TreeNode(4,new TreeNode(2,3,5),new TreeNode(9,null,7))
const obj3=new TreeNode(21,new TreeNode(7,new TreeNode(1,3,3),1),new TreeNode(14,2,2))
console.log(findTilt(obj1));
console.log(findTilt(obj2));
console.log(findTilt(obj3));