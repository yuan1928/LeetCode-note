function Node(val,children) {
    this.val = val;
    this.children = children;
}
var maxDepth = function(root) {
    if(!root)return 0

    let res=0
    let children=[root]
    let next
    while (children.length)
    {
        res+=1
        next=[]
        for(let child of children)
        {
            if((child instanceof Node) && child.children)
            {next.push(...child.children)}
        }
        children=next
    }
    return res
};
let obj=new Node(1,[new Node(3,[5,6]),2,4])
let obj1=new Node(1,[2,new Node(3,[6,new Node(7,[new Node(11,[14])])]),
    new Node(4,[new Node(8,[12])]),new Node(5,[new Node(9,[13]),10])])
console.log(maxDepth(obj1));