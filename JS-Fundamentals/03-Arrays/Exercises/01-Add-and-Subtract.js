function exercise1(nums) {
  let originalSum = 0;
  let modifiedSum = 0;

  for (let i = 0; i < nums.length; i++) {
    originalSum += nums[i];

    if (nums[i] % 2 === 0) {
      nums[i] += i;
    } else {
      nums[i] -= i;
    }

    modifiedSum += nums[i];
  }

  console.log(nums);
  console.log(originalSum);
  console.log(modifiedSum);
}
exercise1([5, 15, 23, 56, 35]);
exercise1([-5, 11, 3, 0, 2]);
