/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// Taking the Input
let input = document.getElementById("tb");

// Taking output field for length conversion
let output1 = document.getElementById("len");
output1.textContent = ` ${input.value} meter = ${3.281 * input.value} feet | ${
  input.value
} feet = ${input.value / 3.281} meter`;

// Taking output field for Volume Conversion
let output2 = document.getElementById("vol");
output2.textContent = ` ${input.value} litre = ${
  0.264 * input.value
} gallon | ${input.value} gallon = ${input.value / 0.264} liter`;

// Taking output field for Mass Conversion
let output3 = document.getElementById("mas");
output3.textContent = ` ${input.value} kilogram = ${
  2.204 * input.value
} pound | ${input.value} pound = ${input.value / 2.204} kilogram`;

// Taking output field for Temperature Conversion
let output4 = document.getElementById("temp");
output4.textContent = `${input.value} Degree = ${
  1.8 * input.value + 32
} Fahrenheit | ${input.value} Fahrenheit = ${(input.value - 32) / 1.8} Degree`;

function demo() {
  for (let i = 0; i <= 2; i++) {
    switch (i) {
      case 0:
        output1.textContent = ` ${input.value} meter = ${(
          3.281 * input.value
        ).toFixed(2)} feet | ${input.value} feet = ${(
          input.value / 3.281
        ).toFixed(2)} meter`;

      case 1:
        output2.textContent = ` ${input.value} litre = ${(
          0.264 * input.value
        ).toFixed(2)} gallon | ${input.value} gallon = ${(
          input.value / 0.264
        ).toFixed(2)} liter`;
      case 2:
        output3.textContent = ` ${input.value} kilogram = ${(
          2.204 * input.value
        ).toFixed(2)} pound | ${input.value} pound = ${(
          input.value / 2.204
        ).toFixed(2)} kilogram`;
      case 3:
        output4.textContent = `${input.value} Degree = ${(
          1.8 * input.value +
          32
        ).toFixed(2)} Fahrenheit | ${input.value} Fahrenheit = ${(
          (input.value - 32) /
          1.8
        ).toFixed(2)} Degree`;
    }
  }
}
