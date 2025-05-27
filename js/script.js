// Copyright (c) 2025 Kyle Matthew Magnaye
//
// Created by: Kyle Matthew Magnaye
// Created on: May 2025
// This file contains the JS functions for index.html

function calculateNumber() {
  let positiveIntegerNumber1 = parseInt(
      document.getElementById("positive-integer-number-1").value
  );
  let positiveIntegerNumber2 = parseInt(
      document.getElementById("positive-integer-number-2").value
  );

  // Input validation
  if (
      isNaN(positiveIntegerNumber1) ||
      isNaN(positiveIntegerNumber2) ||
      positiveIntegerNumber1 < 0 ||
      positiveIntegerNumber2 < 0
  ) {
      document.getElementById("result-output").innerHTML =
          "Please enter valid positive integers.";
      return;
  }

  let result = 0;
  let counter = 0;

  while (counter < positiveIntegerNumber2) {
      result += positiveIntegerNumber1;
      counter++;
  }

  // Show result in the webpage
  document.getElementById(
      "result-output"
  ).innerHTML = `${positiveIntegerNumber1} × ${positiveIntegerNumber2} = <strong>${result}</strong>`;
}
