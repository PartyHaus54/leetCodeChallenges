"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linkedListSerializer = exports.ListNode = void 0;
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
exports.ListNode = ListNode;
const linkedListSerializer = (listArray) => {
    let linkedList = new ListNode(listArray[0]);
    let currentNode = linkedList;
    if (listArray.length > 1) {
        for (let index = 1; index < listArray.length; index++) {
            currentNode.next = new ListNode(listArray[index]);
            currentNode = currentNode.next;
        }
    }
    return linkedList;
};
exports.linkedListSerializer = linkedListSerializer;
