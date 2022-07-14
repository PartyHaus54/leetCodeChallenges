"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linkedListSerializer = void 0;
const linked_lists_1 = require("./linked-lists");
const linkedListSerializer = (listArray) => {
    let linkedList = new linked_lists_1.ListNode(listArray[0]);
    let currentNode = linkedList;
    if (listArray.length > 1) {
        for (let index = 1; index < listArray.length; index++) {
            currentNode.next = new linked_lists_1.ListNode(listArray[index]);
            currentNode = currentNode.next;
        }
    }
    return linkedList;
};
exports.linkedListSerializer = linkedListSerializer;
console.log((0, exports.linkedListSerializer)([0, 2, 5]));
