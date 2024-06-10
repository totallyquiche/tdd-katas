package com.totallyquiche.stringcalculator;

import java.util.ArrayList;
import java.util.Arrays;

public class StringCalculator
{
    public int Add(String numbers)
    {
        return this.AddNumbers(numbers);
    }

    private ArrayList<String> GetSeparators(String numbers) {
        ArrayList<String> separators = new ArrayList<>(Arrays.asList(",", "\n"));

        if (numbers.startsWith("//")) {
            String separator = numbers.substring(2, numbers.indexOf("\n"));

            separators.add(separator);
        }

        return separators;
    }

    private String GetNumbersString(String numbers) {
        return numbers.startsWith("//") ?
            numbers.substring(3, numbers.length()) :
            numbers;
    }

    private ArrayList<String> GetNumbersList(String numbers) {
        ArrayList<String> separators = this.GetSeparators(numbers);
        ArrayList<String> numbersList = new ArrayList<>(Arrays.asList(this.GetNumbersString(numbers)));

        for (String separator : separators) {
            ArrayList<String> newNumbersList = new ArrayList<>();

            for (String number : numbersList) {
                newNumbersList.addAll(Arrays.asList(number.split(separator)));
            }

            numbersList = newNumbersList;
        }

        return numbersList;
    }

    private int AddNumbers(String numbers) {
        ArrayList<String> numbersList = this.GetNumbersList(numbers);

        int sum = 0;

        for (String number : numbersList) {
            sum += number.isBlank() ? 0 : Integer.parseInt(number);
        }

        return sum;
    }
}