package com.totallyquiche.stringcalculator;

public class NegativeNumberException extends RuntimeException {
    public NegativeNumberException(String number) {
        super("negatives not allowed: " + number);
    }
}