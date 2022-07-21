"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const linked_list_serializer_1 = require("../data-structures/linked-list-serializer");
const linked_lists_1 = require("../data-structures/linked-lists");
function getIntersectionNode(headA, headB) {
    function addValueToObject(node, obj) {
        obj[node.val] = true;
        if (node.next !== null) {
            addValueToObject(node.next, obj);
        }
    }
    function checkNodeAgainstObject(node, obj) {
        if (obj[node.val]) {
            return node;
        }
        else if (node.next !== null) {
            return checkNodeAgainstObject(node.next, obj);
        }
        else {
            return new linked_lists_1.ListNode(0);
        }
    }
    let nodes = {};
    let currentNode = headA;
    if (headA) {
        addValueToObject(headA, nodes);
    }
    if (headB) {
        return checkNodeAgainstObject(headB, nodes);
    }
    return new linked_lists_1.ListNode(0);
}
;
function addValueToObject(node, obj) {
    obj[node.val] = true;
    if (node.next !== null) {
        addValueToObject(node.next, obj);
    }
}
function checkNodeAgainstObject(node, obj) {
    if (obj[node.val]) {
        return node;
    }
    else if (node.next !== null) {
        return checkNodeAgainstObject(node.next, obj);
    }
    else {
        return new linked_lists_1.ListNode(0);
    }
}
const r1 = getIntersectionNode((0, linked_list_serializer_1.linkedListSerializer)([4, 1, 8, 4, 5]), (0, linked_list_serializer_1.linkedListSerializer)([5, 6, 1, 8, 4, 5]));
console.log('Result 1', r1);
