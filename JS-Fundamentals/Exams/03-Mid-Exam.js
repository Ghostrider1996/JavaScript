function calculateDamage(items, entryPoint, type) {
  // Split the items array into left and right parts based on the entry point
  let leftItems = items.slice(0, entryPoint);
  let rightItems = items.slice(entryPoint + 1);

  // Filter the left and right items based on the type
  if (type === "cheap") {
    leftItems = leftItems.filter((digit) => digit < items[entryPoint]);
    rightItems = rightItems.filter((digit) => digit < items[entryPoint]);
  } else if (type === "expensive") {
    leftItems = leftItems.filter((digit) => digit >= items[entryPoint]);
    rightItems = rightItems.filter((digit) => digit >= items[entryPoint]);
  }

  // Calculate the sum of price ratings for left and right sides
  let leftSum = leftItems.reduce((acc, curr) => acc + curr, 0);
  let rightSum = rightItems.reduce((acc, curr) => acc + curr, 0);

  // Determine the position and sum of the higher damage
  let position;
  let damage;
  if (leftSum >= rightSum) {
    position = "Left";
    damage = leftSum;
  } else {
    position = "Right";
    damage = rightSum;
  }

  // Print the result
  console.log(`${position} - ${damage}`);
}

// Test cases
calculateDamage([1, 5, 1], 1, "cheap");
calculateDamage([5, 10, 12, 5, 4, 20], 3, "cheap");
calculateDamage([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, "expensive");
