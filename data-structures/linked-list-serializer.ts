import { ListNode } from "./linked-lists";

export const linkedListSerializer = (listArray: any[]): ListNode => {
  let linkedList: ListNode = new ListNode(listArray[0]);
  let currentNode: ListNode = linkedList;

  if  (listArray.length > 1) {
    for (let index: number = 1; index < listArray.length; index++) {
      currentNode.next = new ListNode(listArray[index]);
      currentNode = currentNode.next;
    }
  }

  return linkedList;
}

console.log(linkedListSerializer([0, 2, 5]));