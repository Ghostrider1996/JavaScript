function exercise10(baseSize, increment) {
  let stone = 0;
  let marble = 0;
  let lapisLazuri = 0;
  let gold = 0;
  let height = 0;
  let level = 1;

  for (let curSize = baseSize; curSize > 0; curSize -= 2) {
    let totalArea = curSize ** 2;
    height += increment;
    if (curSize <= 2) {
      gold = totalArea * increment;
    } else {
      let stoneArea = (curSize - 2) ** 2;
      stone += stoneArea * increment;

      if (level % 5 === 0) {
        let lapisArea = totalArea - stoneArea;
        lapisLazuri += lapisArea * increment;
      } else {
        let marbleArea = totalArea - stoneArea;
        marble += marbleArea * increment;
      }
      level++;
    }
  }

  console.log(`Stone required: ${Math.ceil(stone)}`);
  console.log(`Marble required: ${Math.ceil(marble)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuri)}`);
  console.log(`Gold required: ${Math.ceil(gold)}`);
  console.log(`Final pyramid height: ${Math.floor(height)}`);
}
// exercise10(11, 1);
// exercise10(11, 0.75);
// exercise10(12, 1);
// exercise10(23, 0.5);
