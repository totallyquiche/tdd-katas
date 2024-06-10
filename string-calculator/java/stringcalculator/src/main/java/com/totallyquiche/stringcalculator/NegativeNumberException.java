package com.totallyquiche.stringcalculator;

import java.util.ArrayList;

public class NegativeNumberException extends RuntimeException {
    public NegativeNumberException(ArrayList<String> numbers) {
        super("negatives not allowed: " + String.join(", ", numbers));
    }
}