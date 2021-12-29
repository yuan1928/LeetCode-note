function ListNode(val,next) {
      this.val = val;
      this.next = next;
  }
 //反转链表
//按顺序打印
//55.88% 77.58%
var reversePrint1 = function(head) {
    let reverse=null
    while (head)
    {
        let next=head.next
        head.next=reverse
        reverse=head
        head=next
    }

    let res=[]
    while (reverse)
    {
        res.push(reverse.val)
        reverse=reverse.next
    }

    return res
};

//依次读取到栈
//依次pop
//25.44% 31.41%
var reversePrint = function(head){
    let stack=[]
    while (head)
    {
        stack.push(head.val)
        head=head.next
    }

    let res=[]
    while (stack.length>0)
    {res.push(stack.pop())}

    return res
}
let obj=new ListNode(1,new ListNode(2,new ListNode(3,new ListNode(4,new ListNode(5,null)))))
console.log(reversePrint(obj));
