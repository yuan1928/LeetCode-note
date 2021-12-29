//链表表头添加哑节点
//左右指针最初都指向表头
//右指针先右移n+1步，这样两个指针间隔n个节点->当右指针处于末尾空节点时，左指针刚好处于目标节点的前一个节点
//执行删除操作：左节点.next=左节点.next.next

function ListNode(val, next)
{
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var removeNthFromEnd = function(head, n){
    var dummy=new ListNode(0,head)
    var left=dummy
    var right=dummy

    while (1+n--){right=right.next}
    while (right!==null)
    {
        left=left.next
        right=right.next
        //console.log(left,right);
    }
    left.next=left.next.next
    return dummy.next
}
var head=new ListNode(1,new ListNode(2,new ListNode(3,new ListNode(4,new ListNode(5,undefined)))))
console.log(removeNthFromEnd(head, 3));