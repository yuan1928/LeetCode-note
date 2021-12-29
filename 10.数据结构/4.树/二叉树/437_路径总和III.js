function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }

var pathSum = function(root, targetSum) {
    const prefix = new Map();
    prefix.set(0, 1);//前缀长为0的节点有1个
    return dfs(root, prefix, 0, targetSum);
}

const dfs = (root, prefix, curr, targetSum) => {
    if (root == null) {return 0}

    let res = 0;
    curr += (root.val)?root.val:root
    res = prefix.get(curr - targetSum) || 0;//注意不是加一，是加所有符合条件的前缀路径

    prefix.set(curr, (prefix.get(curr) || 0) + 1);
    res += dfs(root.left, prefix, curr, targetSum);
    res += dfs(root.right, prefix, curr, targetSum);
    prefix.set(curr, (prefix.get(curr) || 0) - 1);

    return res;
}
let obj=new TreeNode(10,new TreeNode(5,new TreeNode(3,3,-2),new TreeNode(2,null,1)),new TreeNode(-3,null,11))
let obj1= new TreeNode(5,new TreeNode(4,new TreeNode(11,7,2),null),new TreeNode(8,new TreeNode(13,5,1),4))
console.log(pathSum(obj1,22));