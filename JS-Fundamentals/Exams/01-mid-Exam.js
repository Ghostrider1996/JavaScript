function midExam1(arr) {
  let budged = arr[0];
  let studentCount = arr[1];
  let flourPrice = arr[2];
  let eggPrice = arr[3];
  let apronPrice = arr[4];

  let totalApronPrice = Math.ceil(studentCount * 1.2) * apronPrice;
  let totalEggPrice = studentCount * 10 * eggPrice;
  let totalFlourPrice = studentCount * flourPrice;

  for (let student = 1; student <= studentCount; student++) {
    if (student % 5 === 0) {
      totalFlourPrice -= flourPrice;
    }
  }

  let totalExpenses = totalApronPrice + totalEggPrice + totalFlourPrice;

  if (budged >= totalExpenses) {
    return `Items purchased for ${totalExpenses.toFixed(2)}$.`;
  } else {
    let moneyNeeded = totalExpenses - budged;
    return `${moneyNeeded.toFixed(2)}$ more needed.`;
  }
}

console.log(midExam1([50, 2, 1.0, 0.1, 10.0])); // Should output: "Items purchased for 36.80$."
