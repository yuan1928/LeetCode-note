function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }

var reverseBetween = function(head, left, right) {
    let pos=1
    //let res=null
    let Head=[]
    let reverse=[]
    let Tail=[]
    while (head)
    {
        if(pos<left) {Head.push(head.val)}
        else if(pos>right) {Tail.push(head.val)}
        else
        {
            /*let temp=new ListNode(head.val)
            temp.next=res
            res=temp
            head=head.next
            pos+=1*/
            reverse.push(head.val)
        }
        head=head.next
        pos+=1
    }

    let res=null
    reverse.reverse()
    Head=Head.concat(reverse)
    Head=Head.concat(Tail)
    for(let i of Head.keys())
    {
        let node=new ListNode(Head[Head.length-1-i])
        node.next=res
        res=node
    }

    return res
};
let obj=new ListNode(1,new ListNode(2,new ListNode(3,new ListNode(4,new ListNode(5,null)))))
res=reverseBetween(obj, 2, 4)
while (res)
{
    console.log(res.val);
    res=res.next
}