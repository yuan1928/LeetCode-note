function TreeNode(val,left,right) {
    this.val = val;
    this.left = left
    this.right = right;
}
//29/31 溢出
/*var lowestCommonAncestor = function(root, p, q) {
    let isFind
    const getPath=function (path,cur,target){
        if(!isFind)
        {
            path.push(cur)
            if(cur===target)
            {
                isFind=true
                return path
            }
            let left
            let right
            if(cur instanceof TreeNode && cur.left) {left=getPath(path.slice(),cur.left,target)}
            if(cur instanceof TreeNode && cur.right) {right=getPath(path.slice(),cur.right,target)}
            return left||right
        }
    }
    isFind=false
    const pAncestor=getPath([],root,p)
    isFind=false
    const qAncestor=getPath([],root,q)
    const src=(pAncestor.length>qAncestor.length)?qAncestor:pAncestor
    const tar=(pAncestor.length>qAncestor.length)?pAncestor:qAncestor
    for(let i=src.length-1; i>=0; i--)
    {
        if(tar.indexOf(src[i])!==-1)return src[i]
    }
};*/
var lowestCommonAncestor = function(root, p, q) {
    let ans;
    const dfs = (root, p, q) => {
        if (root === null) return false;
        const lson = dfs(root.left, p, q);//当前节点左树是否至少含有p、q中的一个
        const rson = dfs(root.right, p, q);//当前节点右树是否至少含有p、q中的一个
        if ((lson && rson) || ((root.val === p.val || root.val === q.val) && (lson || rson))) {
            ans = root;
        }//p、q分别位于左、右树 -> lson && rson;
        // 当前节点为p、q中的一个，且另一个目标节点位于当前节点的子树 -> (root.val === p.val || root.val === q.val) && (lson || rson)
        //以上两个条件成立一个，则当前节点为最近公共祖先
        return lson || rson || (root.val === p.val || root.val === q.val);
    }
    dfs(root, p, q);
    return ans;
};
let q1=4
let p=new TreeNode(5,new TreeNode(6,null,null),new TreeNode(2,7,q1))
let q2=new TreeNode(1,0,8)
let tree=new TreeNode(3,p,q2)
console.log(lowestCommonAncestor(tree, p, q2));