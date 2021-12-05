package com.example.java;

public class Binary {
    public String addBinary(String a, String b) {
        int place = 0;
        int placeValue = 0;
        int remainder = 0;
        String sum = "";
        int longerLength = Math.max(a.length(), b.length());
        while (place < longerLength || remainder > 0) {
            int p1 = 0;
            int p2 = 0;
            if (place < a.length()) {
                p1 = Character.getNumericValue(a.charAt(a.length() - 1 - place));
            }
            if (place < b.length()) {
                p2 = Character.getNumericValue(b.charAt(b.length() - 1 - place));
            }
            placeValue = p1 + p2 + remainder;
            sum = (placeValue % 2) + sum;
            if (placeValue >= 2) {
                remainder = 1;
            } else if (placeValue < 2) {
                remainder = 0;
            }
            place++;
        }
        return sum;
    }
}
