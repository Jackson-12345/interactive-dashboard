# Jacksons Interactive Productivity Dashboard

## TODO: Things to Add
1. [x] Add a simple calculator tool.
2. [ ] Add a random number generator.
3. [ ] Add a basic password generator.

## Weekly Task Goals

Shows the amount of weekly tasks input

## Imperial/Metric Converter

This application converts measurements between Imperial and Metric units. It supports inches, feet, yards, and miles to centimeters, meters, and kilometers, as well as the reverse conversions.

### Logic and Pseudocode

```text
BEGIN

    DISPLAY "Metric Converter"

    DISPLAY "1. Inches to Centimeters"
    DISPLAY "2. Feet to Centimeters"
    DISPLAY "3. Yards to Meters"
    DISPLAY "4. Miles to Kilometers"
    DISPLAY "5. Centimeters to Inches"
    DISPLAY "6. Centimeters to Feet"
    DISPLAY "7. Meters to Yards"
    DISPLAY "8. Kilometers to Miles"

    INPUT conversionChoice
    INPUT value

    IF conversionChoice = 1 THEN
        SET result = value * 2.54
    ELSE IF conversionChoice = 2 THEN
        SET result = value * 30.48
    ELSE IF conversionChoice = 3 THEN
        SET result = value * 0.91
    ELSE IF conversionChoice = 4 THEN
        SET result = value * 1.61
    ELSE IF conversionChoice = 5 THEN
        SET result = value * 0.39
    ELSE IF conversionChoice = 6 THEN
        SET result = value * 0.0328
    ELSE IF conversionChoice = 7 THEN
        SET result = value * 1.09
    ELSE IF conversionChoice = 8 THEN
        SET result = value * 0.62
    ELSE
        DISPLAY "Invalid conversion choice"
    END IF

    DISPLAY result

END
