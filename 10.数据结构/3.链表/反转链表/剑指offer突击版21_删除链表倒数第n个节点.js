function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var removeNthFromEnd = function(head, n) {
    let detect=head
    let target=head
    while ((--n)>=0) {detect=detect.next}    //target和detect相距n-1个节点 -> 当detect指向尾节点，target指向应删节点的前一个节点
    if(detect===null)return head.next//边界情况：应删节点即头节点 -> detect初始化之后指向null
    while (detect.next)
    {
        target=target.next
        detect=detect.next
    }
    target.next=target.next.next
    return head
};
let obj=new ListNode(1,new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null)))))
while (obj)
{
    //console.log(obj.val);
    obj=obj.next
}
console.log(removeNthFromEnd(new ListNode(1, null), 1));
console.log(removeNthFromEnd(new ListNode(1, new ListNode(2,null)), 1));

