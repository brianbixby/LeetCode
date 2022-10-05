// * reverse a linkedlist
function reverseLinkedList(head) {
    let reversedLinkedList = null;
    while (head) {
        const next = head.next;
        head.next = reversedLinkedList;
        reversedLinkedList = head;
        head = next;
    }
    return reversedLinkedList;
}

// * reverse a linkedlist
function reverseLinkedList(head) {
    let ll = head;
    let list = null;
    while (ll) {
      list = {val: ll.val, next: list};
      ll = ll.next;
    }
    return list;
}

// combine lists
var mergeKLists = function(lists) {
    let numsArr = [];
      lists.forEach(item => {
        while(item && item.val !== null) {
          numsArr.push(item.val);
          item = item.next;
        }
      });
      numsArr = numsArr.sort((a, b) => b - a);
      let resultNode = null;
      numsArr.forEach(item => {
        let tempNode = new ListNode(item);
        tempNode.next = resultNode;
        resultNode = tempNode;
      })
      return resultNode;
    };
