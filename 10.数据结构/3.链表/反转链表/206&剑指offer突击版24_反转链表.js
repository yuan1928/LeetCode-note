function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }

var reverseList1 = function(head) {
    let res=null
    while (head)
    {
        let temp=new ListNode(head.val)//注意temp=head会使得temp与head同指向，后面temp的操作会同步到head上，故而此处只能用new来对head进行深拷贝
        temp.next=res
        res=temp
        head=head.next
    }
    return res
};
let obj=new ListNode(1,new ListNode(2,new ListNode(3,new ListNode(4,new ListNode(5,null)))))
let obj1=new ListNode(1,new ListNode(2,null))
console.log(reverseList1(obj1));

var reverseList = function(head) {
    if(!head)return head

    let changed=head//即将反转next指向的节点
    let pointer=null//被changed指向的新链表
    let next//保留改变之前的changed.next
    while (changed)//按原顺序遍历链表节点
    {
        next=changed.next//changed即将改变，提前保留其next节点
        changed.next=pointer//改变changed指向
        pointer=changed//更新新链表
        changed=next//更新changed
    }
    return pointer
};
let obj1=new ListNode(1,new ListNode(2,new ListNode(3,new ListNode(4,new ListNode(5)))))
let obj2=new ListNode(1,new ListNode(2))
console.log(reverseList(obj1));