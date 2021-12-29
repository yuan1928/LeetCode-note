function ListNode(val,next) {
    this.val = val;
    this.next = next;
}

var deleteNode = function(node) {
    node.val=node.next.val
    node.next=node.next.next
};
let node=new ListNode(1,new ListNode(9,null))
let obj=new ListNode(4,new ListNode(5,node))
deleteNode(node)
console.log(obj);
//var deleteNode = function(node) {
//     let pointer=node
//     while (pointer)
//     {
//         pointer.val=pointer.next.val
//         if(!pointer.next.next)
//         {pointer.next=null}
//         pointer=pointer.next
//     }
// };
// let node1=new ListNode(5,new ListNode(1,new ListNode(9,null)))
// let obj1=new ListNode(4,node1)
// let node2=new ListNode(1,new ListNode(9,null))
// let obj2=new ListNode(4,new ListNode(5,node2))
// let node3=new ListNode(3,new ListNode(4,null))
// let obj3=new ListNode(1,new ListNode(2,node3))
// let node4=new ListNode(0,new ListNode(1,new ListNode(2,null)))
// deleteNode(node4)
// while (node4)
// {
//     console.log(node4.val);
//     node4=node4.next
// }