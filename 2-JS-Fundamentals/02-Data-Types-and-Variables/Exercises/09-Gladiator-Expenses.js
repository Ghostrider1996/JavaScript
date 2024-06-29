function exercise9(
  lostFights,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let expenses = 0;
  let shieldBreaks = 0;

  for (let curLostFight = 1; curLostFight <= lostFights; curLostFight++) {
    if (curLostFight % 2 === 0) {
      expenses += helmetPrice;
    }

    if (curLostFight % 3 === 0) {
      expenses += swordPrice;
    }

    if (curLostFight % 2 === 0 && curLostFight % 3 === 0) {
      expenses += shieldPrice;
      shieldBreaks += 1;
    }

    if (shieldBreaks === 2) {
      expenses += armorPrice;
      shieldBreaks = 0;
    }
  }
  console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
exercise9(7, 2, 3, 4, 5);
exercise9(23, 12.5, 21.5, 40, 200);
