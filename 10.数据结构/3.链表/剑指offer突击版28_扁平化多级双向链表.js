function Node(val,next,child,prev) {
    this.val = val;
    this.prev = prev===undefined?null:prev;
    this.next = next;
    this.child = child===undefined?null:child;
}

var flatten = function(head) {
    const flattenChild=function (father,uncle){
        //将[father,uncle]内的多级链表进行扁平化，返回扁平化后的非空链表尾节点(uncle或者uncle前一个节点)

        //father和child头节点互指
        const child=father.child
        father.child=null
        child.prev=father
        father.next=child

        //child内部进行扁平化
        let pointer=child
        let temp
        while (pointer)
        {
            if(!pointer.child) {temp=pointer.next}
            else {temp=flattenChild(pointer,pointer.next)}

            if(temp) pointer=temp
            else {break}
        }

        //扁平化后的child尾节点与uncle互指
        if(uncle)
        {
            pointer.next=uncle
            uncle.prev=pointer
        }
        return uncle?uncle:pointer
    }
    const DFS=function (cur,flattenChild){
        if(!cur || (!cur.next && !cur.child))return

        if(cur.child){let next=flattenChild(cur,cur.next);DFS(next,flattenChild)}
        else {DFS(cur.next,flattenChild)}
    }

    DFS(head,flattenChild)
    return head
};

const setPrev=function (l){
    let pointer=l
    while (pointer.next)
    {
        pointer.next.prev=pointer
        pointer=pointer.next
    }
}
const l3=new Node(11,new Node(12))
const l2=new Node(7,new Node(8,new Node(9,new Node(10)),l3))
const l1=new Node(1,new Node(2,new Node(3,new Node(4,new Node(5,new Node(6))),l2)))
setPrev(l1);setPrev(l2);setPrev(l3)
//---------------------------------------
const l4=new Node(3)
const l5=new Node(1,new Node(2,null,l4))
setPrev(l5)
//---------------------------------------
const l6=new Node(1)
const l7=new Node(2)
const l8=new Node(3)
l6.child=l7
l7.child=l8
//----------------------------------------
const l9=new Node(11,new Node(12))
const l10=new Node(7,new Node(8,null,l9))
const l11=new Node(1,new Node(2,new Node(3,new Node(4,new Node(5,new Node(6))),l10)))
setPrev(l9);setPrev(l10);setPrev(l11)


flatten(l1)
let pointer=l1
while (pointer)
{
    console.log(pointer.val);
    pointer=pointer.next
}