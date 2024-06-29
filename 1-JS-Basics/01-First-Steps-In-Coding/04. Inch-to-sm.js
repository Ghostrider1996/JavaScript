function InchToSM(input) {
      // Input
      let InchCount = parseFloat(input[0]);

      // Logic
      let centimetersPerInch = 2.54;
      let InchesToSentimeters = InchCount * centimetersPerInch;

      // Output
      console.log(InchesToSentimeters);
}
InchToSM(["7"]);
