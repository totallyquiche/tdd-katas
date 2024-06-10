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
}
