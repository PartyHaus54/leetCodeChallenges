package com.example.java;

import java.util.ArrayList;
import java.util.List;

public class ListNode {
    int val;
    ListNode next;

    ListNode() {}

    ListNode(int val) {
        this.val = val;
    }

    ListNode(int val, ListNode next) {
        this.val = val;
        this.next = next;
    }

    public static ListNode convertArrayToList (int[] array) {
        ListNode list = new ListNode();
        ListNode nextNode = list;

        if (array.length > 0) {
            nextNode.val = array[0];
        }

        if (array.length > 1) {
            for (int index = 1; index < array.length; index++) {
                nextNode.next = new ListNode();
                nextNode = nextNode.next;
                nextNode.val = array[index];
            }
        }

        return list;
    }

    public static Integer[] convertListToArray (ListNode list) {
        List<Integer> arrayList = new ArrayList<>();
        ListNode node = list;
        boolean finished = false;
        while (!finished) {
            arrayList.add(node.val);
            if (node.next != null) {
                node = node.next;
            } else {
                finished = true;
            }
        }
        Integer[] array = arrayList.toArray(new Integer[0]);
        return array;
    }
}
