// Copyright (c) 2025 Kyle Matthew Magnaye
//
// Created by: Kyle Matthew Magnaye
// Created on: May 2025
// This file contains the JS logic for reversing numbers

"use strict"

function calculateNumber() {
    // Get input value from the text box and convert it to an integer
    let number = parseInt(
        document.getElementById("positive-integer-number-1").value
    );

    // Check if the input is valid
    if (isNaN(number) || number < 1) {
        document.getElementById("result-output").innerHTML =
            "❗ Please enter a valid positive number greater than 0.";
        return;
    }

    // Reverse the digits of the number
    let reversed = 0;
    let original = number; // Save the original number for display

    while (number > 0) {
        reversed = reversed * 10 + (number % 10);
        number = Math.floor(number / 10);
    }

    // Display result
    document.getElementById(
        "result-output"
    ).innerHTML = `<strong>Reversed Result:</strong><br>${original} → ${reversed}`;
}
