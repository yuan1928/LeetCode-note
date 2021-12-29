function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

//设链表被插入的前半部分有a个节点，链表共x个节点：a-1=x-a -> a=Math.ceil((x+1)/2)
//(1)将链表后半部分保存，从尾部开始依次进行插入
//(2)将后半部分逆序后依次原地插入
//注意将前半部分尾节点指向null，否则会造成链表内死循环
var reorderListI = function(head) {
    //求链表长度
    let pointer=head
    let len=0
    while (pointer)
    {
        len+=1
        pointer=pointer.next
    }

    //保存后半部分
    len=Math.ceil((len+1)/2)
    pointer=head
    let nodes=[]
    let prev
    while (pointer)
    {
        if(len<=0){nodes.push(pointer)}
        if(len===1){prev=pointer}
        len-=1
        pointer=pointer.next
    }
    prev.next=null

    //依次插入
    pointer=head
    let temp
    for(let i=nodes.length-1; i>=0; i--)
    {
        temp=pointer.next
        pointer.next=nodes[i]
        nodes[i].next=temp
        pointer=temp
    }
};
var reorderListII = function(head) {
    //求长度
    let pointer=head
    let len=0
    while (pointer)
    {
        len+=1
        pointer=pointer.next
    }

    //找到后半部分头节点和前半部分尾节点
    len=Math.ceil((len+1)/2)
    pointer=head
    let pivot
    let prev
    while (pointer)
    {
        if(len===1)
        {
            prev=pointer
            pivot=pointer.next
            break
        }
        len-=1
        pointer=pointer.next
    }

    //后半部分逆序重排列，前半部分尾节点指向null
    let reverse=null
    pointer=pivot
    let temp
    while (pointer)
    {
        temp=pointer.next
        pointer.next=reverse
        reverse=pointer
        pointer=temp
    }
    prev.next=null

    //后半部分依次插入前半部分
    let pointer1=head
    let pointer2=reverse
    let temp1
    let temp2
    while (pointer2)
    {
        temp1=pointer1.next
        temp2=pointer2.next
        pointer1.next=pointer2
        pointer2.next=temp1
        pointer1=temp1
        pointer2=temp2
    }
};
const l1=new ListNode(1,new ListNode(2,new ListNode(3,new ListNode(4))))
const l2=new ListNode(1,new ListNode(2,new ListNode(3,new ListNode(4,new ListNode(5,null)))))
reorderListI(l1)
let pointer=l1
while (pointer)
{
    console.log(pointer.val);
    pointer=pointer.next
}