package com.totallyquiche.stringcalculator;

public class NegativeNumberException extends RuntimeException {
    public NegativeNumberException() {
        super("negatives not allowed");
    }
}