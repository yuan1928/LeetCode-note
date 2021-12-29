//以l1=[1,2,4] l2=[1,3,4]为例
//1=1->l2.next=?->l1=[1,2,4] l2=[3,4]->l2.next=[1,2,3,4,4]  返回l2=[1,1,2,3,4,4]->合并结果：[1,1,2,3,4,4]
//1<3->l1.next=?->l1=[2,4] l2=[3,4]->l1.next=[2,3,4,4]   返回l1=[1,2,3,4,4]
//2<3->l1.next=?->l1=[4] l2=[3,4]->l1.next=[3,4,4]   返回l1=[2,3,4,4]
//4>3->l2.next=?->l1=[4] l2=[4]->l2.next=[4,4]   返回l2=[3,4,4]
//4=4->l2.next=?->l1=[4] l2=[]->l2.next=[4]   返回l2=[4,4]
//l2=null->返回l1=[4]
//每一次递归，都做两件事：
//1.给出合并链表下一个节点的指向，注意合并链表实际上是从l1 l2中头节点较小的那一个、不断递归改变next指向生成的
//2.返回确定了此次递归中下一个节点指向的合并链表，好作为上一层递归合并链表next的指向

function ListNode(val, next)
{
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var mergeTwoLists = function(l1, l2) {
    if(l1===null){return l2}
    else if(l2===null){return l1}
    else if(l1.val<l2.val)
    {
        l1.next=mergeTwoLists(l1.next,l2)
        return l1//如果l1头节点小，那么将l1头节点作为合并链表头节点，l1 next指向由下一次递归决定，而此处返回的l1将作为上一层递归合并链表的next 指向
    }
    else
    {
        l2.next=mergeTwoLists(l1,l2.next)
        return l2
    }
}
var l1=new ListNode(1,new ListNode(2, new ListNode(4)))
var l2=new ListNode(1,new ListNode(3, new ListNode(4)))
var result=mergeTwoLists(l1,l2)
while (result)
{
    console.log(result.val)
    result=result.next
}