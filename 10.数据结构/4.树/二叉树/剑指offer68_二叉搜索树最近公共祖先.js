function TreeNode(val,left,right) {
    this.val = val;
    this.left = left
    this.right = right;
}
//找出从root分别到达p、q的路径
//最近公共祖先即两条路径中离尾部最近的公共元素节点
var lowestCommonAncestorDFS = function(root, p, q) {
    const getPath=function (path,cur,target) {
        path.push(cur)
        if (cur === target) {return path}
        getPath(path, (target.val < cur.val) ? cur.left : cur.right, target)
        return path
    }
    const pAncestor=getPath([],root,p)
    const qAncestor=getPath([],root,q)
    const src=(pAncestor.length>qAncestor.length)?qAncestor:pAncestor
    const tar=(pAncestor.length>qAncestor.length)?pAncestor:qAncestor
    for(let i=src.length-1; i>=0; i--)
    {
        if(tar.indexOf(src[i])!==-1)return src[i]
    }
};

//遍历二叉树，若某节点大于p、q，则二者皆在其左子树 -> 最近公共祖先也在左树 -> 向左树搜索祖先
//若某节点小于p、q，则二者皆在其右子树 -> 最近公共祖先也在右树 -> 向右树搜索祖先
//否则当前节点即最近公共祖先
var lowestCommonAncestor = function(root, p, q){
    if(root.val<p.val && root.val<q.val){return lowestCommonAncestor(root.right,p,q)}
    else if(root.val>p.val && root.val>q.val){return lowestCommonAncestor(root.left,p,q)}
    else {return root}
}
let q1=new TreeNode(4,3,5)
let p=new TreeNode(2,new TreeNode(0,null,null),q1)
let q2=new TreeNode(8,7,9)
let tree=new TreeNode(6,p,q2)
console.log(lowestCommonAncestor(tree, p, q2));