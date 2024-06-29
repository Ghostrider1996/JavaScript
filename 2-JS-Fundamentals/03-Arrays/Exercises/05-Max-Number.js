function exercise5(nums) {
  let = topNums = [];

  for (let i = 0; i < nums.length; i++) {
    let currNum = nums[i];
    let isTop = true;
    for (let j = i + 1; j < nums.length; j++) {
      if (currNum <= nums[j]) {
        isTop = false;
        break;
      }
    }
    if (isTop) {
      topNums.push(currNum);
    }
  }
  console.log(topNums.join(" "));
}
exercise5([1, 4, 3, 2]);
exercise5([14, 24, 3, 19, 15, 17]);
exercise5([41, 41, 34, 20]);
exercise5([27, 19, 42, 2, 13, 45, 48]);
