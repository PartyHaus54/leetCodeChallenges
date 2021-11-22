package com.example.java;

import java.util.ArrayList;
import java.util.List;

public class PascalsTriangle {
    public List<List<Integer>> generate(int numRows) {
        List<List<Integer>> triangle = new ArrayList<>();
        while (triangle.size() < numRows) {
            List<Integer> row = new ArrayList<>();
            for (int index = 0; index <= triangle.size(); index++) {
                if (index == 0 || index == triangle.size()) {
                    row.add(1);
                } else if (triangle.size() >= 2) {
                    int leftParent = triangle.get(triangle.size() - 1).get(index - 1);
                    int rightParent = triangle.get(triangle.size() - 1).get(index);
                    row.add(leftParent + rightParent);
                }
            }
            triangle.add(row);
        }
        return triangle;
    }
}
s