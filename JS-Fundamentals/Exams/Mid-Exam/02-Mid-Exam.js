function calculateVehicleTaxes(inputArray) {
  let inputString = inputArray[0];

  let vehicles = inputString.split(">>");
  let totalTaxCollected = 0;

  for (let vehicle of vehicles) {
    let [carType, yearsInUse, kilometersTraveled] = vehicle.split(" ");
    yearsInUse = parseInt(yearsInUse);
    kilometersTraveled = parseInt(kilometersTraveled);

    let tax;
    switch (carType) {
      case "family":
        tax = 50 - yearsInUse * 5 + Math.floor(kilometersTraveled / 3000) * 12;
        break;
      case "heavyDuty":
        tax = 80 - yearsInUse * 8 + Math.floor(kilometersTraveled / 9000) * 14;
        break;
      case "sports":
        tax = 100 - yearsInUse * 9 + Math.floor(kilometersTraveled / 2000) * 18;
        break;
      default:
        console.log("Invalid car type.");
        continue;
    }

    console.log(`A ${carType} car will pay ${tax.toFixed(2)} euros in taxes.`);
    totalTaxCollected += tax;
  }

  console.log(
    `The National Revenue Agency will collect ${totalTaxCollected.toFixed(
      2
    )} euros in taxes.`
  );
}

// Test cases
calculateVehicleTaxes([
  "family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410",
]);

//   calculateVehicleTaxes("family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012");
