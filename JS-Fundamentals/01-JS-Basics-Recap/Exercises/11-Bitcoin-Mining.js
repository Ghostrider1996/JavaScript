function exercise11(shifts) {
  let currentShift = 0;
  let totalMoney = 0;
  let shiftCount = shifts.length - 1;
  let bitcoinsBought = 0;
  let dayOfTheFirstPurchase = 0;

  for (let index = 0; index <= shiftCount; index++) {
    let minedGold = shifts[index];

    currentShift += 1;

    if (currentShift % 3 === 0) {
      minedGold *= 0.7;
    }
    totalMoney += minedGold * 67.51;

    while (totalMoney >= 11949.16) {
      bitcoinsBought += 1;
      totalMoney -= 11949.16;
      if (bitcoinsBought === 1) {
        dayOfTheFirstPurchase = currentShift;
      }
    }
  }

  console.log(`Bought bitcoins: ${bitcoinsBought}`);
  if (bitcoinsBought > 0) {
    console.log(`Day of the first purchased bitcoin: ${dayOfTheFirstPurchase}`);
  }
  console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}
exercise11([100, 200, 300]);
exercise11([50, 100]);
// exercise11([3124.15, 504.212, 2511.124]);
