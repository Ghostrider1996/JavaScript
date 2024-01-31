function exercise10(startingYield) {
  let totalSpices = 0;
  let productionCut = 10;
  let days = 0;

  while (startingYield >= 100) {
    totalSpices += startingYield;
    startingYield -= productionCut;

    days += 1;

    if (totalSpices >= 26) {
      totalSpices -= 26;
    }
  }
  if (totalSpices >= 26) {
    totalSpices -= 26;
  }
  console.log(days);
  console.log(totalSpices);
}
exercise10(111);
exercise10(450);
