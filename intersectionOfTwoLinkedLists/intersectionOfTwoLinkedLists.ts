import { linkedListSerializer } from "../data-structures/linked-list-serializer";
import { ListNode } from "../data-structures/linked-lists";

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  function addValueToObject(node: ListNode, obj: any): void {
    obj[node.val] = true;
    if (node.next !== null) {
      addValueToObject(node.next, obj);
    }
  }

  function checkNodeAgainstObject(node: ListNode, obj: any): ListNode {
    if (obj[node.val]) {
      return node;
    } else if (node.next !== null) {
      return checkNodeAgainstObject(node.next, obj);
    } else {
      return new ListNode(0);
    }
  }

  let nodes: any = {};
  let currentNode: ListNode | null = headA;

  if (headA) {
    addValueToObject(headA, nodes);
  }

  if (headB) {
    return checkNodeAgainstObject(headB, nodes);
  }

  return new ListNode(0);
};

function addValueToObject(node: ListNode, obj: any): void {
  obj[node.val] = true;
  if (node.next !== null) {
    addValueToObject(node.next, obj);
  }
}

function checkNodeAgainstObject(node: ListNode, obj: any): ListNode {
  if (obj[node.val]) {
    return node;
  } else if (node.next !== null) {
    return checkNodeAgainstObject(node.next, obj);
  } else {
    return new ListNode(0);
  }
}

const r1: ListNode | null = getIntersectionNode(
  linkedListSerializer([4,1,8,4,5]),
  linkedListSerializer([5,6,1,8,4,5])
);
console.log('Result 1', r1);