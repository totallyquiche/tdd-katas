package com.totallyquiche.stringcalculator;

import static org.junit.Assert.assertEquals;
import org.junit.Test;

public class StringCalculatorTest 
{
    StringCalculator stringCalculator = new StringCalculator();

    @Test
    public void shouldReturn0WhenGivenEmptyString()
    {
        assertEquals(0, stringCalculator.Add(""));
    }

    @Test
    public void shouldReturnNumberWhenGivenSingleNumber() {
        assertEquals(0, stringCalculator.Add("0"));
    }

    @Test
    public void shouldReturnSumOfTwoNumbers() {
        assertEquals(3, stringCalculator.Add("1,2"));
    }

    @Test
    public void shouldReturnSumOfUnknownNumberOfNumbers() {
        int randomNumber = (int) Math.floor(Math.random() * 100);
        int expectedSum = 0;
        String numbers = "";

        for (int i = 0; i < randomNumber; i++) {
            expectedSum += i;
            numbers = numbers.concat("," + i);
        }

        assertEquals(expectedSum, stringCalculator.Add(numbers));
    }
}
