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

    @Test
    public void shouldAllowNewlineSeparators() {
        assertEquals(3, stringCalculator.Add("1\n2"));
        assertEquals(6, stringCalculator.Add("1\n2,3"));
    }

    @Test
    public void shouldAllowCustomSeparators() {
        assertEquals(3, stringCalculator.Add("//[;]\n1;2"));
        assertEquals(10, stringCalculator.Add("//[%]\n1%2\n3,4"));
    }

    @Test(expected = NegativeNumberException.class)
    public void shouldThrowExceptionOnNegative() {
        try {
            stringCalculator.Add("-1,2,-3");
        } catch (Exception exception) {
            assertEquals("negatives not allowed: -1, -3", exception.getMessage());

            throw exception;
        }
    }

    @Test
    public void shouldReportNumberOfAddInvocations() {
        int randomNumber = (int) Math.floor(Math.random() * 100);

        for (int i = 0; i < randomNumber; i++) {
            stringCalculator.Add("");
        }

        assertEquals(randomNumber, stringCalculator.GetCalledCount());
    }

    @Test
    public void numbersLargerThan1000AreIgnored() {
        assertEquals(1001, stringCalculator.Add("1,1000,1001"));
    }

    @Test
    public void shouldAllowSeparatorsOfAnyLength() {
        assertEquals(3, stringCalculator.Add("//[***]\n1***2"));
    }
}
