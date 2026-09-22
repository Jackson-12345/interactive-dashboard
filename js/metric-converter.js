document.getElementById("converter-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let value = parseFloat(document.getElementById("conversion-value").value);
    let choice = document.getElementById("conversion-type").selectedIndex + 1;
    let result;

    if (choice == 1) {
        result = value * 2.54;
    } else if (choice == 2) {
        result = value * 30.48;
    } else if (choice == 3) {
        result = value * 0.91;
    } else if (choice == 4) {
        result = value * 1.61;
    } else if (choice == 5) {
        result = value * 0.39;
    } else if (choice == 6) {
        result = value * 0.0328;
    } else if (choice == 7) {
        result = value * 1.09;
    } else if (choice == 8) {
        result = value * 0.62;
    }

    document.getElementById("conversion-result").innerHTML =
        "Result: " + result.toFixed(2);
});
