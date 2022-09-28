/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var middleNode = function(head) {
    let nodeCount = 0;
    let list = head;
    while (list) {
        list = list.next;
        nodeCount++;
    }
    nodeCount = parseInt(nodeCount / 2);
    list = head;
    while (nodeCount > 0) {
        list = list.next;
        nodeCount--;
    }
    return list;
};