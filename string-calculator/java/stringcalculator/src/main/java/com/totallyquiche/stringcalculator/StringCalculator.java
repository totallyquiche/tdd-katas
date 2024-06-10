package com.totallyquiche.stringcalculator;

public class StringCalculator
{
    public int Add(String numbers)
    {
        int sum = 0;
        
        for (String number : numbers.split(",")) {
            sum += Integer.parseInt(number);
        }

        return sum;
    }
}
