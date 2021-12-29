function ListNode(val, next)
{
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
//将l1 l2的数据分别读取到数组L1 L2
//合并L1 L2后排序
//将排序后的合并数组转换成链表
var mergeTwoLists = function(l1, l2) {
    if(l1===null || (l2===null)){return (l1===null)?l2:l1}

    var L1=[]
    var L2=[]
    var compare=function (a,b){
        if(a===b){return 0}
        else {return (a<b)?1:-1}
    }//由于后面数组转链表是反向生成，所以这里按降序排序
    var generator=function (list){
        var rear=new ListNode(list[0])
        var listnode=new ListNode()
        list=list.slice(1)
        for(var current of list)
        {
            listnode.val=current
            listnode.next=rear
            rear=new ListNode(current,listnode.next)
        }
        return listnode
    }


    while (l1)
    {
        L1.push(l1.val)
        l1=l1.next
    }
    while (l2)
    {
        L2.push(l2.val)
        l2=l2.next
    }
    var L=L1.concat(L2)//JS数组不能直接相加，否则强制转换为字符串
    L.sort(compare)
    //console.log(L);
    return generator(L)
};

var l1=new ListNode(1,new ListNode(2, new ListNode(4)))
var l2=new ListNode(1,new ListNode(3, new ListNode(4)))
var l3=new ListNode()
var l4=new ListNode(0,new ListNode())
var result=mergeTwoLists(l3,l4)

while (result){console.log(result.val);result=result.next}


