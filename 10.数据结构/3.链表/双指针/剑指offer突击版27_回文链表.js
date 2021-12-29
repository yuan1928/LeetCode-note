function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/*var isPalindrome = function(head) {
    let nodes=""
    let pointer=head
    while (pointer)
    {
        nodes+=pointer.val
        pointer=pointer.next
    }
    let reverse=nodes.split("").reverse().join().replace(/,/g,"")
    return  nodes===reverse
};*/

//(1)找到链表中点center->(2)使链表成为奇数长度->(3)反转center之后的部分：
//*->*->center->*->*         ->
// *->*->center<->*<-*
//或：*->*(center)->*->*      ->
// 添加一个中间节点使链表长度为奇数：*->*->center->*->*      ->
// *->*->center<->*<-*
//(4)从链表头和链表尾开始逐一向中间比较对称节点是否相等，当左右指针相遇时结束
//快慢指针法找中点：慢指针slow初始化为head,快指针fast初始化为head.next
// ->slow每走一步，fast走两步
// ->fast指向空或fast.next指向空时，slow指向中点
// 注意链表长为偶数时，slow指向实际中点的左节点，此时要加一个中间节点使链表成为奇数长，并且将slow指向该新增节点
var isPalindrome = function(head){
    if(!head.next)return true

    //找中点(slow最终指向中点)
    let slow=head
    let fast=head.next
    while (!(!fast || !fast.next))
    {
        slow=slow.next
        fast=fast.next.next
    }
    if(fast)//fast停在非空节点->链表为偶数长
    {
        let center=new ListNode("center")
        center.next=slow.next
        slow.next=center
        slow=center
    }

    //反转slow之后的节点指向
    let pointer=slow.next
    let temp
    while (pointer)
    {
        temp=pointer.next
        pointer.next=slow
        slow=pointer
        pointer=temp
    }//此时slow指向尾节点

    //从两端向中间比较对称节点是否相等
    let left=head
    let right=slow
    while (left!==right)
    {
        if(left.val!==right.val){return false}
        left=left.next
        right=right.next
    }
    return true
}
let l1=new ListNode(1,new ListNode(2,new ListNode(3,new ListNode(3,new ListNode(2,new ListNode(1))))))
let l2=new ListNode(1,new ListNode(2))
console.log(isPalindrome(l1));
console.log(isPalindrome(l2));