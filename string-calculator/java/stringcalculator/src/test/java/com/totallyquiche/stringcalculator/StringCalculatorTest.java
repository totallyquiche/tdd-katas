package com.totallyquiche.stringcalculator;

import static org.junit.Assert.assertEquals;
import org.junit.Test;

public class StringCalculatorTest 
{
    @Test
    public void shouldReturn0WhenGivenEmptyString()
    {
        StringCalculator stringCalculator = new StringCalculator();

        assertEquals(0, stringCalculator.Add(""));
    }
}
