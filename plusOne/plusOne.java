package com.example.java;

public class PlusOne {
    public int[] plusOne(int[] digits) {
        boolean spillover = false;
        for (int digit = digits.length - 1; digit >= 0; digit--) {
            if (digit == digits.length - 1) {
                digits[digit]++;
                if (digits[digit] >= 10) {
                    spillover = true;
                    digits[digit] = digits[digit] % 10;
                }
            } else {
                if (spillover) {
                    digits[digit]++;
                }
                if (digits[digit] >= 10) {
                    spillover = true;
                    digits[digit] = digits[digit] % 10;
                } else {
                    spillover = false;
                }
            }
        }
        if (!spillover) {
            return digits;
        } else {
            int[] extraDigit = new int[digits.length + 1];
            extraDigit[0] = 1;
            for (int index = 0; index < digits.length; index++) {
                extraDigit[index + 1] = digits[index];
            }
            return extraDigit;
        }
    }
}
