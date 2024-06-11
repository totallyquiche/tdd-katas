package com.totallyquiche.stringcalculator;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class StringCalculator
{
    private int calledCount = 0;

    public int Add(String numbers)
    {
        this.calledCount++;

        return this.AddNumbers(
            this.GetNumbersList(
                this.GetSeparators(numbers),
                numbers
            )
        );
    }

    public int GetCalledCount() {
        return this.calledCount;
    }

    private ArrayList<String> GetSeparators(String numbers) {
        ArrayList<String> separators = new ArrayList<>(Arrays.asList(",", "\n"));

        if (numbers.startsWith("//")) {
            String separatorsString = numbers.substring(2, numbers.indexOf("\n"));
            Matcher matcher = Pattern.compile("\\[(.*?)\\]").matcher(separatorsString);

            while (matcher.find()) {
                separators.add(matcher.group(1));
            }
        }

        return separators;
    }

    private String GetNumbersString(String numbers) {
        return numbers.startsWith("//") ?
            numbers.substring(numbers.indexOf("\n"), numbers.length()) :
            numbers;
    }

    private ArrayList<String> GetNumbersList(ArrayList<String> separators, String numbers) {
        ArrayList<String> numbersList = new ArrayList<>(Arrays.asList(this.GetNumbersString(numbers)));

        for (String separator : separators) {
            ArrayList<String> newNumbersList = new ArrayList<>();

            for (String number : numbersList) {
                newNumbersList.addAll(Arrays.asList(number.split(Pattern.quote(separator))));
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

            if (integer > 1000) {
                continue;
            }

            sum += integer;
        }

        if (!negativeNumbers.isEmpty()) {
            throw new NegativeNumberException(negativeNumbers);
        }

        return sum;
    }
}