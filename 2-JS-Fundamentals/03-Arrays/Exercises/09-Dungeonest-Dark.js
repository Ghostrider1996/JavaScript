function exercise9(dataArr) {
  let dataAsString = dataArr[0];
  let rooms = dataAsString.split("|");
  let initialHealth = 100;
  let initialCoins = 0;
  let roomCount = 1;

  for (const room of rooms) {
    let roomData = room.split(" ");
    let command = roomData[0];
    let num = Number(roomData[1]);

    switch (command) {
      case "potion":
        let healthHealed = num;
        if (healthHealed + initialHealth > 100) {
          healthHealed = 100 - initialHealth;
        } else {
          healthHealed = num;
        }
        initialHealth += healthHealed;
        console.log(`You healed for ${healthHealed} hp.`);
        console.log(`Current health: ${initialHealth} hp.`);
        break;
      case "chest":
        initialCoins += num;
        console.log(`You found ${num} coins.`);
        break;

      default:
        let monsterName = command;
        let monsterAttack = num;

        initialHealth -= monsterAttack;

        if (initialHealth > 0) {
          console.log(`You slayed ${monsterName}.`);
        } else {
          console.log(`You died! Killed by ${monsterName}.`);
          console.log(`Best room: ${roomCount}`);
        }
        break;
    }
    if (initialHealth !== 0) {
      roomCount++;
    } else {
      break;
    }
  }
  if (initialHealth > 0) {
    console.log("You've made it!");
    console.log(`Coins: ${initialCoins}`);
    console.log(`Health: ${initialHealth}`);
  }
}
// exercise9(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
exercise9(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
