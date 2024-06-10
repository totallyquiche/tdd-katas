package com.totallyquiche.stringcalculator;

import java.util.ArrayList;
import java.util.Arrays;

public class StringCalculator
{
    public int Add(String numbers)
    {
        return this.AddNumbers(
            this.GetNumbersList(
                this.GetSeparators(numbers),
                numbers
            )
        );
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

    private ArrayList<String> GetNumbersList(ArrayList<String> separators, String numbers) {
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

    private int AddNumbers(ArrayList<String> numbersList) {
        int sum = 0;
        ArrayList<String> negativeNumbers = new ArrayList<>();

        for (String number : numbersList) {
            int integer = number.isBlank() ? 0 : Integer.parseInt(number);

            if (integer < 0) {
                negativeNumbers.add(number);
            }

            sum += integer;
        }

        if (!negativeNumbers.isEmpty()) {
            throw new NegativeNumberException(negativeNumbers);
        }

        return sum;
    }
}