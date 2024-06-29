function lab7(array1, array2) {
  let sum = 0;
  let isDiff = false;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      sum += Number(array1[i]);
    } else {
      isDiff = true;
    }

    if (isDiff) {
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      break;
    }
  }

  if (!isDiff) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  }
}
lab7(["10", "20", "30"], ["10", "20", "30"]);
lab7(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]);
lab7(["1"], ["10"]);
