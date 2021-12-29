function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
}
var copyRandomList = function(head) {
    let node=[]//按序存储待复制链表各节点(节点对象本质是地址指针)
    let dict={}//某个出现过的节点值:[{node:节点1,idx:该节点在node中的索引},...]
    let pointer=head
    let idx=0
    while (pointer)//更新node和dict
    {
        node.push(pointer)
        if(dict[pointer.val]){dict[pointer.val].push({node:pointer,"idx":idx})}
        else {dict[pointer.val]=[{node:pointer,"idx":idx}]}
        idx+=1
        pointer=pointer.next
    }

    let res=null
    let copy=Array(node.length)//按序存储各个复制节点
    for(let i=node.length-1; i>=0; i--)//复制出主链、将主链上的复制节点添加到copy
    {
        let cur=new Node(node[i].val)
        copy[i]=cur
        cur.next=res
        res=cur
    }

    for(let i=0; i<=node.length-1; i++)//逐个更新copy中节点的random指向
    {
        if(node[i].random===null){copy[i].random=null}
        else if(dict[node[i].random.val].length===1){copy[i].random=copy[dict[node[i].random.val][0].idx]}
        else if(dict[node[i].random.val].length>1)
        {
            for(let n of dict[node[i].random.val])
            {
                if(n.node===node[i].random)//对象的地址指针相同->对象相等
                {
                    copy[i].random=copy[n.idx]//copy[i]是node[i]的复制品，二者通过同样的索引相关联
                    break
                }
            }
        }
    }

    return res
}

/*let obj1=new Node(3)
let obj2=new Node(3)
let obj3=new Node(3)
obj1.next=obj2
obj2.next=obj3
obj3.next=null
obj1.random=null
obj2.random=obj1
obj3.random=null*/
let obj=[new Node(7),new Node(13),new Node(11),new Node(10),new Node(1)]
let random=[Infinity,0,4,2,0]
for(let i of obj.keys())
{
    if(i<obj.length-1){obj[i].next=obj[i+1]}
    else {obj[i].next=null}
    if(random[i]<=obj.length-1){obj[i].random=obj[random[i]]}
    else {obj[i].random=null}
}
console.log(copyRandomList(obj[0]));

//方法2：
//原链表A->B->C->... 扩展为 A->Acopy->B->Bcopy->C->Ccopy->... ，则Acopy.random=A.random.next
//从扩展链表中截取复制结果：
//从A..next开始{cur.next=cur.next.next; cur=cur.next},注意尾节点的处理