function TreeNode(val, left, right) {
    this.val = val;
    this.left = left
    this.right = right;
}
//层序遍历，每一层:level=level.reverse() -> 对称
//注意：层序遍历用BFS
var isSymmetric = function(root) {
    let level=[root]
    while (level.length)
    {
        let vals=[]
        let valsMirror=[]
        let next=[]

        for(let node of level)
        {
            if(node instanceof TreeNode)
            {
                vals.push(node.val)
                next.push(node.left)
                next.push(node.right)
            }
            else {vals.push(node)}
        }

        //valsMirror=vals.reverse()
        valsMirror=vals.slice()
        vals.reverse()
        for(let i of vals.keys())
        {
            if(vals[i]!==valsMirror[i])
            {return false}
        }

        level=next
    }
    return true
};
const obj=new TreeNode(1, new TreeNode(2,3,4), new TreeNode(2,4,3))
const obj1=new TreeNode(1, new TreeNode(2,null,4), new TreeNode(2,null,4))
console.log(isSymmetric(obj1));
//左子树.left=右子树.right && 左树.right=右树.left -> 树对称
/*
class Solution {
    public boolean isSymmetric(TreeNode root) {
        return check(root, root);
    }
    boolean check(TreeNode a, TreeNode b) {
        if (a == null && b == null) return true;
        if (a == null || b == null) return false;
        if (a.val != b.val) return false;
        return check(a.left, b.right) && check(a.right, b.left);
    }
}
 */